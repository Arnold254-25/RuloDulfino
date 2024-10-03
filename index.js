let iconCart = document.querySelector('.icon-cart');
let Closecart = document.querySelector('.close');
let body = document.querySelector('body');
let ListProductHTML = document.querySelector ('.listProduct');
 let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProducts = [];
let carts = [];

iconCart.addEventListener('click', () => {
  body.classList.toggle('showcart')
})
Closecart.addEventListener('click', () => {
  body.classList.toggle('showcart')
  
})

const addDataToHTML = () => {
  ListProductHTML.innerHTML = '';
  if(listProducts.length > 0){
    listProducts.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('item');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
      

      <img src="${product.image}" alt="">
  <div class="card-body">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-half-full"></i>
    <h5 class="card-title">$${product.name}</h5>
   
    <h4>${product.price}</sup></h4>
    <p class="card-text">QUERCIABELLA</p>
    <p>2008</p>
    <button>add to cart</button>
    </div>
      `;
      ListProductHTML.appendChild(newProduct);
    })
  }
}
ListProductHTML.addEventListener('click', (event) =>{
  let positionClick = event.target;
  if(positionClick.classList.contains('addCart')){
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
})

const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex((value)=> value.product_id == product_id);
  if (carts.length < 0){
    carts = [{
      products_id: product_id,
      quantity:1
    }]

   } else if(positionThisProductInCart < 0 ){
carts.push({
  product_id: product_id,
  quantity:1 
});
carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;


  }
}
const initApp = () => {
  //fetch data from json
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
    listProducts = data;
    addDataToHTML();
  })
}
initApp();