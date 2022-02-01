const conteiner = document.querySelector('#conteiner');
const border = {
  estilo: 'dashed',
  cor: '#230752',
  tamanho: '2px',
};
let tipo_codigo = 'normal';
let codigo_css = '';
let codigo_html = '';
let num_linhas_css = 0;
let num_linhas_html = 0;

function criaLinha(ling, cod_tipo, tipo, nome, valor){
  let nome_tag = document.querySelector('#sel-tag').value;
  let id = document.querySelector('#id').value.replaceAll(' ', '-',);
  id = id.replaceAll('.', '',);
  id = id.replaceAll(',', '',);
  id = id.replaceAll('#', '',);

  function criaCodCss(){
    switch (tipo) {
      case 'seletor':
        if(id === ''){
          codigo_css = `<code class="sel-css">${nome_tag}</code> {`;
        }

        else{
          codigo_css = `<code class="sel-css id-css">#${id}</code> {`;
        }

        break;

      case 'atributo':
        switch (cod_tipo) {
          case 'reduzido':
            switch (nome) {
              case 'border':
                codigo_css += `<br />`;
                codigo_css += `<code class="linha-css"><code class="atr-css">${nome}:</code> <code class="atr-valor-css">${border.tamanho} ${border.estilo} ${border.cor}</code>;</code>`;
                break;
            }
            break;
        
          case 'normal':
            switch (nome) {
              case 'border-style':
                border.estilo = valor;
                break;

              case 'border-color':
                border.cor = valor;
                let cor = getComputedStyle(document.documentElement).getPropertyValue('--c-code-back1');

                if(valor.charAt(cor.length - 2) >= 0 || valor.charAt(cor.length - 1) >= 0){
                  cor = 'white';
                }

                valor = `<code class="atr-valor-css" style="background-color: ${valor}; color: ${cor}">${valor}</code>`;
                break;

              case 'border-width':
                border.tamanho = valor;
                break;
            }

            codigo_css += `<br />`;
            codigo_css += `<code class="linha-css"><code class="atr-css">${nome}:</code> <code class="atr-valor-css">${valor}</code>;</code>`;
            break;
        }

      break;
    }
  }

  function criaCodHtml(){
    codigo_html += `&lt;<code class="tag-html">${nome_tag}</code>`;

    if(id != ''){
      codigo_html += ` <code class="atr-html">id</code>="<code class="atr-valor-html">${id}</code>"`;
    }

    codigo_html += `&gt;`;
    codigo_html += `&lt;/<code class="tag-html">${nome_tag}</code>&gt;`;
  }

  switch (ling) {
    case 'css':
      criaCodCss();
      break;

    case 'html':
      criaCodHtml();
      break;
  }
}

function mudaConteiner(){
  border.estilo = document.querySelector('#sel-borda').value;

  conteiner.style.borderWidth = border.tamanho;
  conteiner.style.borderStyle = border.estilo;
  conteiner.style.borderColor = border.cor;
}

function criaAtrCss(){
  if(document.querySelector('#cbx-red-css').checked){
    criaLinha('css', 'reduzido', 'atributo', 'border');
  }

  else{
    criaLinha('css', 'normal', 'atributo', 'border-style', border.estilo);
    criaLinha('css', 'normal', 'atributo', 'border-color', border.cor);
    criaLinha('css', 'normal', 'atributo', 'border-width', border.tamanho);
  }
  
}

function criaCodigo(ling){
  mudaConteiner();

  codigo_css = '';
  criaLinha('css', 'normal', 'seletor');
  criaAtrCss();
  codigo_css += '<br /> }';
  document.querySelector('#code-bloco-css').innerHTML = codigo_css;

  codigo_html = '';
  criaLinha('html', '');
  document.querySelector('#code-bloco-html').innerHTML = codigo_html;
}

document.querySelector('#id').addEventListener('change', function(){
  criaCodigo();
});

document.querySelector('#sel-tag').addEventListener('change', function(){
  criaCodigo();
});

document.querySelector('#sel-borda').addEventListener('change', function(){
  criaCodigo();
});

document.querySelector('#cbx-red-css').addEventListener('change', function(){
  criaCodigo();
});

window.addEventListener('load', function(e){
  criaCodigo('css');
  criaCodigo('html');
});