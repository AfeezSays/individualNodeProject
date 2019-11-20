var url = new URL(window.location.href);

var query_string = new URLSearchParams(url.search);

var search_params = new URLSearchParams(query_string);
var sum = 0;
var uID = search_params.get('id');
var uTitle = search_params.get('title');
var uPrice = search_params.get('price');
var uImage = search_params.get('img');
var price = 0;
var innerTotal = 0;
const cartItem = document.createElement('div');
cartItem.setAttribute('class', 'mainCart');
cartItem.style.marginLeft = "10%";
cartItem.style.marginRight = "10%"
const ul = document.createElement('ul');
ul.className = "cartWrap";
var arrayOfBooks = [];
var li;

const cart = document.getElementById('cart');
const total = document.getElementById('totals');
total.style.cssFloat = "none";
total.style.marginLeft = "55%";

function loadin() {
  //   // Loading
  console.log('starting....');
  const user = {
    id: uID,
    title: uTitle,
    price: uPrice,
    image: uImage
  }
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  arrayOfBooks = users;
  if ((users.length) >= 1 && arrayOfBooks.length >= 1) {
    if ((arrayOfBooks[(users.length) - 1].id) != uID) {
      if(uID !=null && uID>0){
        arrayOfBooks.push(user);
        localStorage.setItem("users", JSON.stringify(arrayOfBooks));
 
     }
    }
  } else {
    if(uID !=null && uID>0){
       arrayOfBooks.push(user);
       localStorage.setItem("users", JSON.stringify(arrayOfBooks));

    }
   
  }






  console.log("# of users: " + arrayOfBooks.length);
  arrayOfBooks.forEach(function (book) {
    li = document.createElement('li');
    li.className = "items";

    li.innerHTML =
      `<div class="infoWrap"> 
    <div class="cartSection">
      <img src="images/${book.image}.jpg" alt="" class="itemImg" />
      <h3>${book.title}</h3>
      <input type="text" value="1" class="qty" disabled placeholder="3"/>
      <p class="itemCartPrice">  x $${book.price}.00</p>
  
    </div>  
  
  
    <div class="prodTotal cartSection">
      $${innerTotal}
      </div>
    <div class="cartSection removeWrap">
     <a href="#" id="removerecord" class="remove">x</a>
   </div>
  </div>`;
    sum += parseFloat(book.price);
    ul.appendChild(li);
    price = book.price;
    update();
    document.getElementsByClassName('finalTotalValue')[0].innerText = '$' + sum

  });
  // localStorage.clear();

  // array.splice(index, 1);
  console.log(JSON.stringify((arrayOfBooks)));

}
loadin();
/////////////////////////////////
function update() {

  quantity = li.getElementsByClassName('qty')[0].value;

  innerTotal = price * quantity;
  li.getElementsByClassName('prodTotal')[0].innerHTML = innerTotal;


};
/////////////////////////////////
function ready() {
  uarray.forEach(function (book) {


  });

}





update();




cartItem.appendChild(ul);
cart.insertBefore(cartItem, total);

//////////////////////////////////////////////


  var tempArray = [];
  var tempUsers = JSON.parse(localStorage.getItem("users") || "[]");
  tempArray = tempUsers;
  var removeCartItemButtons = document.getElementsByClassName('remove');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function removeCartItem(event) {
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      // tempArray.splice(i,1);
      localStorage.setItem("users", JSON.stringify(tempArray));
      updateCartTotal()
    });
  }
var totaler=0;
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('mainCart')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cartWrap')
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('itemCartPrice')[0]
      var quantityElement = cartRow.getElementsByClassName('qty')[0]
      var price = parseFloat(priceElement.innerText.replace('x $', ''))
      var quantity = quantityElement.value
      totaler = totaler + (price * quantity)
    }
    totaler = Math.round(totaler * 100) / 100
    document.getElementsByClassName('finalTotalValue')[0].innerText = '$' + totaler
    
  }

 function postQuery(){
  localStorage.clear();
 }