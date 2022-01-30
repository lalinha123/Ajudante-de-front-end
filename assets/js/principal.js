const body = document.querySelector('body');
const conteiner = document.querySelector('#conteiner');
const border = {
  estilo: 'dashed',
  cor: '#320777',
  tam: '2px',
};
let codigo_css = '';
let codigo_html = '';
let num_linhas_css = 0;
let num_linhas_html = 0;

function criaLinha(ling, tipo, nome, valor){
  let nome_tag = document.querySelector('#sel-tag').value;
  let id = document.querySelector('#id').value.replaceAll(' ', '-',);
  id = id.replaceAll('.', '',);
  id = id.replaceAll(',', '',);
  id = id.replaceAll('#', '',);

  function criaCodCss(){
    switch (tipo) {
      case 'seletor':
        if(id === ''){
          codigo_css = `${nome_tag} {`;
        }

        else{
          codigo_css = `#${id} {`;
        }

        break;

      case 'atributo':
        switch (nome) {
          case 'border-style':
            border.estilo = valor;
            break;

          case 'border-color':
            border.cor = valor;
            break;
        }

        codigo_css += `<br />`;
        codigo_css += `${nome}: ${valor};`;
        break;
    }
  }

  function criaCodHtml(){
    codigo_html += `&lt;${nome_tag}`;

    if(id != ''){
      codigo_html += ` id="${id}"`;
    }

    codigo_html += `&gt;`;
    codigo_html += `&lt;/${nome_tag}&gt;`;
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
  conteiner.style.borderStyle = border.estilo;
  conteiner.style.borderColor = border.cor;
}

function criaAtributos(){
  criaLinha('css', 'atributo', 'border-style', border.estilo);
  criaLinha('css', 'atributo', 'border-color', border.cor);
}

function criaCodigo(ling){
  mudaConteiner();

  switch (ling) {
    case 'css':
      criaLinha('css', 'seletor');
      criaAtributos();
      codigo_css += '<br /> }';
      document.querySelector('#code-bloco-css').innerHTML = codigo_css;
      break;

    case 'html':
      codigo_html = '';
      criaLinha('html', '');
      document.querySelector('#code-bloco-html').innerHTML = codigo_html;
      break;
  }
}

document.querySelector('#id').addEventListener('change', function(){
  criaCodigo('css');
  criaCodigo('html');
});

document.querySelector('#sel-tag').addEventListener('change', function(){
  criaCodigo('css');
  criaCodigo('html');
});

function navbar(){
  const nav = document.createElement('nav');
  const link_logo = document.createElement('a');
  const link_sobre = document.createElement('a');
  const div_right = document.createElement('div');

  link_logo.id = 'logo';
  link_logo.href = 'index.html';
  link_logo.innerHTML = 'AF';

  link_sobre.innerHTML = 'Sobre';

  div_right.classList.add('float-right');
  div_right.appendChild(link_sobre);

  nav.appendChild(link_logo);
  nav.appendChild(div_right);

  body.appendChild(nav);
}

window.addEventListener('load', function(e){
  criaCodigo('css');
  criaCodigo('html');
  navbar();
});