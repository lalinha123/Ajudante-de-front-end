const body = document.querySelector('body');
const conteiner = document.querySelector('#conteiner');
const border = {
  estilo: 'dashed',
  cor: '#320777',
  tam: '2px',
};
let codigo_css;
let codigo_html;
let nome_conteiner;
let num_linhas_css = 0;
let num_linhas_html = 0;

function criaLinha(ling, tipo, nome, valor){
  function criaCodCss(){
    switch (tipo) {
      case 'seletor':
        if(document.querySelector('#id').value === ''){
          nome_conteiner = document.querySelector('#sel-tag').value;
        }

        else{
          nome_conteiner = `#${document.querySelector('#id').value}`;
        }

        codigo_css = `${nome_conteiner} {`;
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

        codigo_css += `<br />${nome}: ${valor};`;
        break;
    }
  }

  function criaCodHtml(){
    codigo_html = `<${nome_conteiner}>`;
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
  document.querySelector('#code-bloco-css').innerHTML = '';

  switch (ling) {
    case 'css':
      criaLinha('css', 'seletor');
      criaAtributos();
      codigo_css += '<br /> }';
      document.querySelector('#code-bloco-css').innerHTML = codigo_css;
      break;

    case 'html':
      document.querySelector('#code-bloco-html').innerHTML = codigo_html;
      break;
  }
}

document.querySelector('#id').addEventListener('change', function(){
  criaCodigo('css');
});

document.querySelector('#sel-tag').addEventListener('change', function(){
  criaCodigo('css');
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
  navbar();
});