const body = document.querySelector('body');

function mudaCode(tipo_btn, id_btn){
  const div_css = document.querySelector('#div-ling-conteudo-css');
  const div_html = document.querySelector('#div-ling-conteudo-html');
  const btn_css = document.querySelector('#btn-nav-css');
  const btn_html = document.querySelector('#btn-nav-html');
  const div = document.getElementById(`div-ling-conteudo-${tipo_btn}`);
  const btn = document.getElementById(id_btn);

  div_css.classList.remove('aberto');
  div_html.classList.remove('aberto');
  btn_css.classList.remove('aberto');
  btn_html.classList.remove('aberto');

  div.classList.add('aberto');
  btn.classList.add('aberto');
}



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