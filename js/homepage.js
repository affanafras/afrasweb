
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}


Window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    navbar.classList.remove('active');
}


const signout=document.getElementById('logout-btn');

  signout.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signout(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });



  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });



  // Get a reference to the Firestore service
  const db = firebase.firestore();
  
  window.onload = function() {
      fetchproducts();
  };
  
  function fetchproducts() {
      db.collection("products").get().then((querySnapshot) => {
          const productsContainer = document.getElementById('products');
          querySnapshot.forEach((doc) => {
              const itemData = doc.data();
              const itemElement = document.createElement('div');
              itemElement.classList.add('item');
              itemElement.innerHTML = `
                  <h1>${itemData.name}</h1>
                  <p>${itemData.description}</p>
                  <p>Price: $${itemData.price}</p>
              `;
              productsContainer.appendChild(itemElement);
          });
      }).catch((error) => {
          console.error("Error fetching products: ", error);
      });
  }
  


 