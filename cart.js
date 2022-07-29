(function(){
    const cartBtn = document.querySelectorAll('.item__button');
  
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
            // console.log(finalPrice);
            // console.log(name);

            // console.log(item);

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            
            cartItem.innerHTML =  `
            <div class="cart-item">
                    <tr>
                    <td><img src="${item.img}" alt=""></td>
                    <td><div class="cart__name"><strong>Məhsul adı: </strong> ${item.name}</div></td>
                    <td><div class="cart__price"><strong>Qiymət: </strong> ${item.price}</div></td> 
                    </tr>
                </div> <hr>
        `  ;
        // select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('confirm');

        cart.insertBefore(cartItem, total);
        alert("Məhsul səbətə əlavə edildi.");
        showTotals();
        }
      });
    });

    // // Show totals 
    //   function showTotals(){
    //     const total = [];
    //     const items = document.querySelectorAll(".item__price");

    //     items.forEach(function(item){
    //         total.push(parseFloat(item.textContent));
    //     })
    //     // console.log(total);

    //     const totalMoney = total.reduce(function(total, item){
    //       total += item;
    //       return total;
    //     }, 0);
    //     const finalMoney = totalMoney.toFixed(1);
       
    //     document.getElementById('common__price').textContent = finalMoney;
    //     // document.querySelector('common__price').textContent = finalMoney;
    //   }
    
  })();



  // Top Function  
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
