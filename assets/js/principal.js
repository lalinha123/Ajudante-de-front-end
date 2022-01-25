
function background(){
  const div = document.createElement('div');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const body = document.querySelector('body');


  div.id = 'cont-back';

  span1.id = 'span-back-1';
  span2.id = 'span-back-2';
  span3.id = 'span-back-3';

  div.appendChild(span1);
  div.appendChild(span2);
  div.appendChild(span3);

  body.appendChild(div);
}

window.addEventListener('load', function(e){
  //background();
});