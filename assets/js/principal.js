const body = document.querySelector('body');

function background(){
  const div = document.createElement('div');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');


  div.id = 'cont-back';

  span1.id = 'span-back-1';
  span2.id = 'span-back-2';
  span3.id = 'span-back-3';

  div.appendChild(span1);
  div.appendChild(span2);
  div.appendChild(span3);

  body.appendChild(div);
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
  //background();
  navbar();
});