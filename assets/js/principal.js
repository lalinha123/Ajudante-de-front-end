const body = document.querySelector('body');

function navbar(){
  const nav = document.createElement('nav');
  const link_logo = document.createElement('a');
  //const link_sobre = document.createElement('a');
  const div_right = document.createElement('div');

  link_logo.id = 'logo';
  link_logo.href = 'index.html';
  link_logo.innerHTML = 'AF';

  //link_sobre.innerHTML = 'Sobre';

  div_right.classList.add('float-right');
  //div_right.appendChild(link_sobre);

  nav.appendChild(link_logo);
  nav.appendChild(div_right);

  body.appendChild(nav);
}

window.addEventListener('load', function(e){
  navbar();
});