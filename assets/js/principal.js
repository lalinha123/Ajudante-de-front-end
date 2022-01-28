const body = document.querySelector('body');
let num_linhas_css = 0;
let num_linhas_html = 0;

function addLinhaCode(tipo_ling, codigo){
  const tag_code = document.createElement('code');
  const tag_p = document.createElement('p');
  let div_num;
  let div_code;

  switch (tipo_ling) {
    case 'css':
      ++num_linhas_css;
      tag_p.innerHTML = num_linhas_css;
      div_num = document.querySelector('#div-num-code-css');
      div_code = document.querySelector('#div-tag-code-css');
      break;
  
    case 'html':
      ++num_linhas_html;
      tag_p.innerHTML = num_linhas_html;
      div_num = document.querySelector('#div-num-code-html');
      div_code = document.querySelector('#div-tag-code-html');
      break;
  }

  tag_code.innerHTML = codigo;

  div_num.appendChild(tag_p);
  div_code.appendChild(tag_code);
}

addLinhaCode('html', 'oi');

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
  navbar();
});