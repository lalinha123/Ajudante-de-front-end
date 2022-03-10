const conteiner = document.querySelector('#conteiner');
const clr_border = document.querySelector('#clr-border');
const txt_clr_border = document.querySelector('#txt-cor-border');
const txt_tam_border = document.querySelector('#txt-tam-border');
const sel_tam_border = document.querySelector('#sel-tam-border');
let codigo_css = '';
let codigo_html = '';
let num_linhas_css = 0;
let num_linhas_html = 0;
let cor_fonte_border;

const cont_tam = {
  larg: '300px',
  alt: '300px',
};

const border = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '4px',
};

const border_top = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '4px',
};

const border_bottom = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '4px',
};

const border_left = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '4px',
};

const border_right = {
  estilo: 'dashed',
  cor: '#320777',
  tamanho: '4px',
};

function abreItem(id){
  const lista_id_sec = ['sec-config', 'sec-border'];

  for (i = 0; i < lista_id_sec.length; i++) {
    id_sec = lista_id_sec[i];
    document.getElementById(id_sec).classList.remove('aberto');
  }

  document.getElementById(id).classList.add('aberto');
}

function criaLinha(ling, cod_tipo, tipo, nome, valor){
  let nome_tag = document.querySelector('#sel-tag').value;
  let id = document.querySelector('#id').value.replaceAll(' ', '-',);
  id = id.replaceAll('.', '',);
  id = id.replaceAll(',', '',);
  id = id.replaceAll('#', '',);

  function criaCodCss(){
    ++num_linhas_css;

    function criaCodigo(){
      codigo_css += `<br />`;
      codigo_css += `<code class="linha-css"><code class="atr-css">${nome}:</code> <code class="atr-valor-css atr-cor-css">${valor}</code>;</code>`;
    }

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
                <code class="atr-valor-css atr-cor-css">${border.cor}</code>;</code>`;
                break;

              default:
                criaCodigo();
                break;
            }
            
            break;
        
          case 'normal':
            criaCodigo();
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
    ++num_linhas_html;
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
  cont_tam.larg = document.getElementById('txt-width').value.toString() + document.getElementById('sel-width').value;
  cont_tam.alt = document.getElementById('txt-height').value.toString() + document.getElementById('sel-height').value;

  conteiner.style.width = cont_tam.larg;
  conteiner.style.height  = cont_tam.alt;

  if(document.getElementById('cbx-borda-tipo-lados').checked){
    border.estilo = document.querySelector('#sel-borda').value;
    border.cor = clr_border.value;
    border.tamanho = txt_tam_border.value.toString() + sel_tam_border.value;

    conteiner.style.borderWidth = border.tamanho;
    conteiner.style.borderStyle = border.estilo;
    conteiner.style.borderColor = border.cor;
  }
}

function criaAtrCss(){
  criaLinha('css', 'normal', 'atributo', 'width', cont_tam.larg);
  criaLinha('css', 'normal', 'atributo', 'height', cont_tam.alt);

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

  codigo_css += '<br /> }';
  ++num_linhas_css;
}

function criaNumeroLinhas(ling){
  let linhas;
  let div;

  switch (ling) {
    case 'css':
      linhas = num_linhas_css;
      div = document.getElementById('div-num-code-css');
      break;

    case 'html':
      linhas = num_linhas_html;
      div = document.getElementById('div-num-code-html');
      break;
  }

  for (i = 1; i <= linhas; i++) {
    const span = document.createElement('span');
    span.textContent = i.toString();
    div.appendChild(span);
  }
}

function updateCodigo(){
  num_linhas_css = 0;
  num_linhas_html = 0;

  document.getElementById('div-num-code-css').innerHTML = '';
  document.getElementById('div-num-code-html').innerHTML = '';

  mudaConteiner();

  codigo_css = '';
  criaLinha('css', 'normal', 'seletor');
  criaAtrCss();
  document.querySelector('#code-bloco-css').innerHTML = codigo_css;
  criaNumeroLinhas('css');

  codigo_html = '';
  criaLinha('html', '');
  document.querySelector('#code-bloco-html').innerHTML = codigo_html;
  criaNumeroLinhas('html');
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

document.getElementById('txt-width').addEventListener('change', function(e){
  cont_tam.larg = document.getElementById('txt-width').value.toString() + document.getElementById('sel-width').value;
  updateCodigo();
});

document.getElementById('sel-width').addEventListener('change', function(e){
  cont_tam.larg = document.getElementById('txt-width').value.toString() + document.getElementById('sel-width').value;
  updateCodigo();
});

document.getElementById('txt-height').addEventListener('change', function(e){
  cont_tam.alt = document.getElementById('txt-height').value.toString() + document.getElementById('sel-height').value;
  updateCodigo();
});

document.getElementById('sel-height').addEventListener('change', function(e){
  cont_tam.alt = document.getElementById('txt-height').value.toString() + document.getElementById('sel-height').value;
  updateCodigo();
});

sel_tam_border.addEventListener('change', function(e){
  border.tamanho = txt_tam_border.value.toString() + sel_tam_border.value;
  updateCodigo();
});

txt_tam_border.addEventListener('change', function(e){
  border.tamanho = txt_tam_border.value.toString() + sel_tam_border.value;
  updateCodigo();
});


clr_border.addEventListener('change', function(e){
  txt_clr_border.value = e.target.value;
  updateCodigo();
});

txt_clr_border.addEventListener('change', function(e){
  clr_border.value = e.target.value;
  updateCodigo();
});

document.querySelector('#id').addEventListener('change', updateCodigo);

document.querySelector('#sel-tag').addEventListener('change', updateCodigo);

document.querySelector('#sel-borda').addEventListener('change', updateCodigo);

document.querySelector('#cbx-red-css').addEventListener('change', updateCodigo);

window.addEventListener('load', function(){
  document.getElementById('sec-config').classList.add('aberto');
  updateCodigo();
});


