(function readyJS(win, doc) {
    'use strict';

    // preventting Default 
    let prevent = (event) => { event.preventDefault(); console.log(event.target.textContent); }     
    let formBtn = doc.querySelector('#form-btn')
    formBtn.addEventListener('click', prevent, false)

    // getting attributes from HTML 
    let byQueryAll = doc.querySelectorAll('.btn')
    for (let index = 0; index < byQueryAll.length; index++) {
       let element = byQueryAll[index]
        element.addEventListener('click', ()=>{
            doc.querySelector('body').style.backgroundColor = element.getAttribute('data-color')
        })
    }
  
  })(window, document);