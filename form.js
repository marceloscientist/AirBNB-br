(function readyJS(win, doc) {
  'use strict';

  let name = doc.querySelector('#name')
  let password = doc.querySelector('#password')

  let labelName = doc.querySelector('#labelName')
  labelName.style.visibility = "hidden";

  let labelPassword = doc.querySelector('#labelPassword')
  labelPassword.style.visibility = "hidden";

  
  let nameValidation = (event) => {
    if (event.target.value == "") {
      labelName.style.visibility = "visible";     
      name.focus()
    } else {
      labelName.style.visibility = "hidden";
    }
  }
  
  let passwordValidation = (event) => {
    if (event.target.value == "") {
      labelPassword.style.visibility = "visible";     
      password.focus()
    } else {
      labelPassword.style.visibility = "hidden";
    }
  }

  name.addEventListener('blur', nameValidation, false)
  password.addEventListener('blur', passwordValidation, false)



})(window, document);