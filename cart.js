(function(){
 
    const cartBtn = document.querySelectorAll('.item__button');
    var sebet = document.getElementById("sebet__confirm");
    cartBtn.forEach(function(btn){
      btn.addEventListener('click', function(event){  
        // console.log(event.target);

        if(event.target.parentElement.classList.contains('item__button')){
            let fullPath =
            event.target.parentElement.previousElementSibling.src;
            let pos = fullPath.indexOf("img") + 38;
            let partPath = fullPath.slice(pos);

            const item = {};
            item.img = `public/Products${partPath}`;
            let name =  event.target.parentElement.parentElement.nextElementSibling.children[0].textContent;
            item.name = name;

            let price =  event.target.parentElement.parentElement.nextElementSibling.children[1].textContent;

            let finalPrice = price.slice(0).trim();

            item.price = finalPrice;
            
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            
            cartItem.innerHTML =  `
            <div class="cart-item">
                    <tr>
                    <td><img src="${item.img}" alt=""></td>
                    <td><div class="cart__name"><strong>Məhsul adı: </strong> ${item.name}</div></td>
                    <td>
                            <span class="product__buy">
                            <strong>Say:</strong>
                            <div class="counter">
                            <button class="down" onClick='decreaseCount(event, this)'>-</button>
                            <input type="text" value="1" class="increment__input">
                            <button class="quantityplus" onClick='increaseCount(event, this)'>+</button>
                            </div>
                        </span>  
                    </td>
                    <td><div class="cart__price"><strong>Qiymət: </strong> ${item.price}
                    <button onclick="remove(this)" class="large__confirm__button" style="background-color: rgb(200, 35, 51); color: #FFFF; border: none;">X</button>
                    <button onclick="remove(this)" class="hidden__info small__confirm__button">Sil</button>
                    </div></td> 
                    </tr>
                    </div> <hr>
        `  ;

        
        // select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('confirm');

        cart.insertBefore(cartItem, total);
        alert("Məhsul səbətə əlavə edildi.");
        sebet.style.display = "block";
      }   
      });
    });
  })();
  // All item remove function
  function  removeFunction() {
    const element = document.getElementById("cart");
    element.remove();
  }
// End of All item remove function

  // Top Function  
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End of Top Function
/* Favourite Icon */
$(document).ready(function(){
  $(".like").click(function(){
    $(this).toggleClass("heart");
  });
});

// Each element remove
function remove(el) {
  var element = el;
  element.parentElement.parentElement.parentElement.remove();
}
// Each element remove
// Mobile Nav Toggle
function navFunction(x) {
  x.classList.toggle("change");
}
// Mobile Nav Toggle


// Increment and decrement
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
// Increment and decrement

$(function() {
   $('.quantityplus').click(function(e){
      e.preventDefault();
      fieldName = $(this).attr('field');

      //Fetch qty in the current elements context and since you have used class selector use it.
      var qty = $(this).closest('.cart_item').find('.quantity');
      //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

      var currentVal = parseInt(qty.val());
      if (!isNaN(currentVal)) {
          qty.val(currentVal + 1);
      } else {
          qty.val(0);
      }
 
      //Trigger change event
      qty.trigger('change');
  });

  $(".quantityminus").click(function(e) {
      e.preventDefault();
      fieldName = $(this).attr('field');

      //Fetch qty in the current elements context and since you have used class selector use it.
      var qty = $(this).closest('.cart_item').find('.quantity');
      //var qty = $(this).closest('tr').find('input[name='+fieldName+']');

      var currentVal = parseInt(qty.val());
      if (!isNaN(currentVal) && currentVal > 0) {
          qty.val(currentVal - 1);
      } else {
          qty.val(0);
      }

      //Trigger change event
      qty.trigger('change');
  });     

  //Bind the change event
  $(".quantity").change(function() {
      var sum = 0;
      var total = 0;
      $('.actual_price').each(function () {
          var price = $(this);
          var count = price.closest('.cart_item').find('.quantity');
          sum = (price.html() * count.val());
          total = total + sum;
          price.closest('.cart_item').find('.item_price').html(sum + "₼");
      });
      $('.total_price').html("<h3>₼" + total + "</h3>");

  }).change(); //trigger change event on page load
});