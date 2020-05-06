(function readyJS(win, doc) {
  'use strict';

  let buttons = doc.querySelectorAll('.btn');
  const changeColor = event => {
    doc.querySelector('body').style.backgroundColor = event.target.textContent
  }
  buttons.forEach(el => {
    el.addEventListener('click', changeColor,false)
  });
 

})(window, document);