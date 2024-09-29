let iconCart = document.querySelector('.icon-cart');
let Closecart = document.querySelector('close');
let body = document.querySelector('body');
let ListProductHTML = document.querySelector ('.listProduct');
 
let listProducts = [];


iconCart.addEventListener('click', () => {
  body.classList.toggle('showcart')
})
Closecart.addEventListener('click' ,() =>{
  
})

const initApp = () => {
  //fetch data from json
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
    listProducts = data;
    console.log(listProducts)
  })
}
initApp();