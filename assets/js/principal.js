const body = document.querySelector('body');
let tag_nome = 'conteiner';
let id_conteiner = document.querySelector('#id');
let num_linhas_css = 0;
let num_linhas_html = 0;

function criaCodigo(ling, tipo, nome, valor){
  let code_tag_css = document.querySelector('#code-bloco-css');
  code_tag_css.innerHTML = '';

  function criaCodCss(){
    switch (tipo) {
      case  'seletor':
        if(valor === ''){
          tag_nome = `${document.querySelector('#sel-tag').value}`;
        }
        else if(valor != ''){
          tag_nome = `#${valor}`;
        }

        code_tag_css.innerHTML += `${tag_nome} {`;
        break;
    }

    code_tag_css.innerHTML += '<br /> }';
  }

  switch (ling) {
    case 'css':
      criaCodCss();
      break;
  }
}


document.querySelector('#id').addEventListener('change', function(){
  criaCodigo('css', 'seletor', 'id', document.querySelector('#sel-tag').value);
});

document.querySelector('#sel-tag').addEventListener('change', function(){
  criaCodigo('css', 'seletor', 'tag', document.querySelector('#id').value);
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
  criaCodigo('css', 'seletor', 'id', document.querySelector('#id').value);
  navbar();
});