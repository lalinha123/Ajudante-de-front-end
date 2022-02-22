const conteiner = document.querySelector('#conteiner');
const clr_border = document.querySelector('#clr-border');
let codigo_css = '';
let codigo_html = '';
let num_linhas_css = 0;
let num_linhas_html = 0;
let cor_fonte_border;

const border_top = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '2px',
};

const border_bottom = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '2px',
};

const border_left = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '2px',
};

const border_right = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '2px',
};

const border = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '2px',
};

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
                codigo_css += `<code class="linha-css"><code class="atr-css">${nome}:</code>
                <code class="atr-valor-css">${border.tamanho} ${border.estilo}
                <code class="atr-valor-css atr-cor-css">${border.cor.toUpperCase()}</code>;</code>`;
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
                valor = `<code class="atr-valor-css">${border.cor.toUpperCase()}</code>`;
                break;

              case 'border-width':
                border.tamanho = valor;
                break;
            }

            codigo_css += `<br />`;
            codigo_css += `<code class="linha-css"><code class="atr-css">${nome}:</code> <code class="atr-valor-css atr-cor-css">${valor}</code>;</code>`;
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
  if(document.getElementById('cbx-borda-tipo-lados').checked){
    border.estilo = document.querySelector('#sel-borda').value;
    border.cor = clr_border.value;

    conteiner.style.borderWidth = border.tamanho;
    conteiner.style.borderStyle = border.estilo;
    conteiner.style.borderColor = border.cor;
  }
}

function criaAtrCss(){
  if(document.getElementById('cbx-borda-tipo-lados').checked){
    if(document.querySelector('#cbx-red-css').checked){
      criaLinha('css', 'reduzido', 'atributo', 'border');
    }

    else{
      criaLinha('css', 'normal', 'atributo', 'border-style', border.estilo);
      criaLinha('css', 'normal', 'atributo', 'border-color', border.cor);
      criaLinha('css', 'normal', 'atributo', 'border-width', border.tamanho);
    }
  }
}

function updateCodigo(ling){
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

function marcaCbx(id){
  if(document.getElementById(id).checked){
    document.getElementById(id).checked = false;
  }

  else{
    document.getElementById(id).checked = true;
  }

  updateCodigo();
}

clr_border.addEventListener('change', function(e){
  border.cor = e.target.value;
  updateCodigo();
});

document.querySelector('#id').addEventListener('change', updateCodigo);

document.querySelector('#sel-tag').addEventListener('change', updateCodigo);

document.querySelector('#sel-borda').addEventListener('change', updateCodigo);

document.querySelector('#cbx-red-css').addEventListener('change', updateCodigo);

window.addEventListener('load', updateCodigo);
