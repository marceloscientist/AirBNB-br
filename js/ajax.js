(function readyJS(win, doc) {
  'use strict';

  /* 
    pagination settings
  */

  const app = document.getElementById('root');
  const source = "../assets/img/@home.jpg";
  const logo = document.createElement('img');
  logo.source;

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(logo);
  app.appendChild(container);


  /* 
    pagination settings
  */

  const first = document.querySelector(".first");
  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");
  const last = document.querySelector(".last");



  
 
var request = new XMLHttpRequest()
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true)
request.onload = function() {
  // Begin accessing JSON data here
  var houses = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) { 


    /* CREATING THE CARDS */
    let page = 0;
    let cards = []

    for (let index = 0; index < houses.length; index++) {
      let house = houses[index]
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const img = document.createElement('img')
      img.src = house.photo

      const h1 = document.createElement('h1')
      h1.textContent = house.property_type

      const p = document.createElement('p')
      house.name = house.name.substring(0, 300)
      p.textContent = `${house.name}...`

      container.appendChild(card)
      card.appendChild(img)
      card.appendChild(h1)
      card.appendChild(p)
      card.style.display = 'none';
      cards.push(card);
    }

    for (let index = 0; index < page+3; index++) {
      cards[index].style.display = 'block'
      container.appendChild(cards[index]);
    }

    first.addEventListener('click', ()=>{
      page = 0;
      container.innerHTML = "";
      for (let index = page; index < page+3; index++) {
        cards[index].style.display = 'block'
        container.appendChild(cards[index]);
      }
    })
  
    last.addEventListener('click', ()=>{
      page = cards.length - 3;
      container.innerHTML = "";
      for (let index = page; index < page+3; index++) {
        cards[index].style.display = 'block'
        container.appendChild(cards[index]);
      }
    })
  
    next.addEventListener('click', ()=>{
      page == cards.length - 3? (page = 0) : (page += 3);
      container.innerHTML = "";
      for (let index = page; index < page+3; index++) {
        cards[index].style.display = 'block'
        container.appendChild(cards[index]);
      }
    })
  
    previous.addEventListener('click', ()=>{
      page == 0 ? (page = cards.length - 3) : (page -= 3);
      container.innerHTML = "";
      for (let index = page; index < page+3; index++) {
        cards[index].style.display = 'block'
        container.appendChild(cards[index]);
      }
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

})(window, document);
