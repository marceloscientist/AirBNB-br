(function readyJS(win, doc) {
  'use strict';

  const app = document.getElementById('root')
  const source = "../assets/img/@home.jpg"
const logo = document.createElement('img')
logo.source

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(house => {
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
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

})(window, document);







  /*
  let houses = []

  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true)
  request.onload = function () {

    let data = JSON.parse(this.response)
    
    data.forEach(house => {
      houses.push(house)
    })
  }
  console.log(houses)
  request.send()

  */
