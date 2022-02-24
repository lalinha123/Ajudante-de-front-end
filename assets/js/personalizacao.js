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
  tamanho: txt_tam_border.value.toString() + sel_tam_border.value,
};

function addSelTamanho(id){
  const opt_px = document.createElement('option');
  const opt_em = document.createElement('option');
  const opt_rem = document.createElement('option');
  const opt_vw = document.createElement('option');
  const opt_vh = document.createElement('option');
  const opt_porc = document.createElement('option');
  const opt_pt = document.createElement('option');
  const opt_in = document.createElement('option');
  const opt_cm = document.createElement('option');
  const opt_mm = document.createElement('option');
  const opt_pc = document.createElement('option');

  opt_px.value = 'px';
  opt_px.selected = 'selected';
  opt_px.name = opt_px.value;
  opt_px.text = opt_px.value;

  opt_em.value = 'em';
  opt_em.name = opt_em.value;
  opt_em.text = opt_em.value;

  opt_rem.value = 'rem';
  opt_rem.name = opt_rem.value;
  opt_rem.text = opt_rem.value;

  opt_vw.value = 'vw';
  opt_vw.name = opt_vw.value;
  opt_vw.text = opt_vw.value;

  opt_vh.value = 'vh';
  opt_vh.name = opt_vh.value;
  opt_vh.text = opt_vh.value;

  opt_porc.value = '%';
  opt_porc.name = 'porc';
  opt_porc.text = opt_porc.value;

  opt_pt.value = 'pt';
  opt_pt.name = opt_pt.value;
  opt_pt.text = opt_pt.value;

  opt_in.value = 'in';
  opt_in.name = opt_in.value;
  opt_in.text = opt_in.value;

  opt_cm.value = 'cm';
  opt_cm.name = opt_cm.value;
  opt_cm.text = opt_cm.value;

  opt_mm.value = 'mm';
  opt_mm.name = opt_mm.value;
  opt_mm.text = opt_mm.value;

  opt_pc.value = 'pc';
  opt_pc.name = opt_pc.value;
  opt_pc.text = opt_pc.value;

  document.getElementById(id).appendChild(opt_px);
  document.getElementById(id).appendChild(opt_porc);
  document.getElementById(id).appendChild(opt_em);
  document.getElementById(id).appendChild(opt_rem);
  document.getElementById(id).appendChild(opt_vw);
  document.getElementById(id).appendChild(opt_vh);
  document.getElementById(id).appendChild(opt_pt);
  document.getElementById(id).appendChild(opt_in);
  document.getElementById(id).appendChild(opt_cm);
  document.getElementById(id).appendChild(opt_mm);
  document.getElementById(id).appendChild(opt_pc);
}

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
                <code class="atr-valor-css atr-cor-css">${border.cor}</code>;</code>`;
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
                valor = `<code class="atr-valor-css">${border.cor}</code>`;
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
  updateCodigo();
  addSelTamanho(sel_tam_border.id);
});
