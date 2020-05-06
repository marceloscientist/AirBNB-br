(function readyJS(win, doc) {
  'use strict';

  let text = "pela@sbs"
  let regex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?(\.[a-z]+)?$/gi
  if(text.match(regex)) {
    console.log("burst")
  } else {
    console.log("error")
  }

})(window, document);