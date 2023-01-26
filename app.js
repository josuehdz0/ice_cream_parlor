const iceCreams = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

let cart =[]

function drawToppings(){
  let toppingsElem = document.getElementById('topping-cards')
  let template = ''
  for (let i = 0; i < toppings.length; i++) {
    const topping = toppings[i];
    template += `
    <div class="col-4">
    <div class="card">
      <img src="${topping.image}" alt="${topping.name}">
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center">
          <p> <b>${topping.name}</b> $${topping.price}</p>
        </div>
        <button class="btn ntn-outline-secondary" title="Add to Cart" onclick="addItemToCart('${topping.name}')">
          <i class="mdi mdi-cart"></i>
          <small>ADD</small>
        </button>
      </div>
    </div>
  </div>
    `
  }


  toppingsElem.innerHTML = template
}

function drawContainers(){
  let containersElem = document.getElementById('vessel-cards')
  let template = ''
  containers.forEach(vessel => {
    template += `
    <div class="col-4">
    <div class="card">
      <img src="${vessel.image}" alt="${vessel.name}">
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center">
          <p> <b>${vessel.name}</b> $${vessel.price}</p>
        </div>
        <button class="btn ntn-outline-secondary" title="Add to Cart" onclick="addItemToCart('${vessel.name}')">
          <i class="mdi mdi-cart"></i>
          <small>ADD</small>
        </button>
      </div>
    </div>
  </div>
    `
    
  })
  
containersElem.innerHTML = template
}


function drawIceCream(){

  let iceCreamElem = document.getElementById('icecream-cards')
  let template = ''
  iceCreams.forEach(icecream => {
    template += `
    <div class="col-4">
    <div class="card">
      <img src="${icecream.image}" alt="${icecream.name}">
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center">
          <p> <b>${icecream.name}</b> $${icecream.price}</p>
        </div>
        <button class="btn ntn-outline-secondary" title="Add to Cart"  onclick="addItemToCart('${icecream.name}')" >
          <i class="mdi mdi-cart"></i>
          <small>ADD</small>
        </button>
      </div>
    </div>
  </div>
    `
    
  })
  
iceCreamElem.innerHTML = template
  

}

function addItemToCart(name){

  let itemToAdd = iceCreams.find(p=>p.name==name)
  || containers.find(p=>p.name==name)
  || toppings.find(p=>p.name==name)

  let productFoundInCart = cart.find(p => p.name ==name)

  if(productFoundInCart){
    productFoundInCart.quantity++
  }else {
    cart.push({
      name:itemToAdd.name,
      price: itemToAdd.price,
      quantity:1 
    
    })
  }

drawCart()

}

function drawCart(){

  let cartElem = document.getElementById('cart')
  let cartTotalElem = document.getElementById('cart-total')
  let template = ''

  cart.forEach(item =>{
    template +=`
              <div class="col-6">${item.name}</div>
              <div class="col-2">${item.quantity}</div>
              <div class="col-2">$${item.price}</div>
              <div class="col-2">$${item.price * item.quantity}</div>
    
    `
  })

  // let total = calculateCartTotal()

  cartElem.innerHTML = template
  // cartTotalElem.innerHTML = total.toFixed(2)
}

function calculateCartTotal(){

}

function pay(){
  // cannot pay unless has object from each array category
}

drawContainers()
drawToppings()
drawIceCream()
