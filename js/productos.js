// Codigo de carrito de compras

//variables
let allContainerCart = document.querySelector('.flex-container');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total');
let buyThings = [];
let totalCard = 0;

//funciones
loadEventListeners();
function loadEventListeners(){
  allContainerCart.addEventListener('click', addProduct);

  containerBuyCart.addEventListener('click', deleteProduct);
}

function deleteProduct(e){
  if(e.target.classList.contains('delete-product')){
    const deleteId = e.target.getAttribute('data-id');

    buyThings.forEach(value => {
      if(value.id == deleteId){
        let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
        totalCard = totalCard - priceReduce; 
        totalCard = totalCard.toFixed(2);
      }
    });
    buyThings = buyThings.filter(product => product.id !== deleteId);
  }
  loadHtml();
}

function addProduct(e){
  e.preventDefault();
  if(e.target.classList.contains('flex-content-button-link')){
    const selectProduct = e.target.parentElement.parentElement;
    readTheContent(selectProduct);
  }
}

function readTheContent(product){
  const infoProduct = {
    image: product.querySelector('.flex-content-image img').src,
    title: product.querySelector('.flex-content-title').textContent,
    price: product.querySelector('.flex-content-price').textContent,
    id: product.querySelector('.flex-content-button a').getAttribute('data-id'),
    amount: 1
  }

  totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
  totalCard = totalCard.toFixed(2);

  const exist = buyThings.some(product => product.id === infoProduct.id);
  if(exist){
    const pro = buyThings.map(product => {
      if(product.id === infoProduct.id){
        product.amount++;
        return product;
      } else {
        return product;
      }
    });
    buyThings = [...pro];
  } else{
    buyThings = [...buyThings, infoProduct];
  }

  loadHtml();  
  console.log(infoProduct);
}

function loadHtml(){
  clearHtml();
  buyThings.forEach(product =>{
    const {image, title, price, id, amount} = product;
    const row = document.createElement('div');
    row.classList.add('item');
    row.innerHTML = `
        <img src="${image}" alt="img">
      <div class="item-content">
        <h5>${title}</h5>
        <h5 class="cart-price">$${price}</h5>
        <h6>Cantidad:${amount}</h6>
      </div>
      <span class="delete-product" data-id="${id}">X</span>
    `;

    containerBuyCart.appendChild(row);

    priceTotal.innerHTML = totalCard;
  });
}

function clearHtml(){
  containerBuyCart.innerHTML = '';
}

function showCart(x){
  document.getElementById("products-id").style.display = "block";
}
function closeBtn(){
  document.getElementById("products-id").style.display = "none";
}

function showMenu(x){
  document.getElementById("menu-id").style.display = "block";
}
function menuCloseBtn(){
  document.getElementById("menu-id").style.display = "none";
}
