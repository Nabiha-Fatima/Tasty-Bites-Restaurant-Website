// navbar--------start
let mainNav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    mainNav.classList.add("scrolled"); // scroll ke baad effect
  } else {
    mainNav.classList.remove("scrolled"); // top pe wapas
  }
});


// hero---fade---animation
document.addEventListener("DOMContentLoaded", function (){
   const hero = document.querySelector(".hero-content");
   if(hero){
   
    let animateHero = () =>{
     hero.classList.remove("visible");
     setTimeout(()=>{
            hero.classList.add("visible");

     },500);
     }
     animateHero();
    }   

    
// Bootstrap Navbar (top navbar) toggle
let bootstrapNavBtn = document.querySelector(".bootstrapCloseBtn i");
let bootstrapNavbar = document.querySelector("#navbarSupportedContent");
let bootstrapToggler = document.querySelector(".navbar-toggler");
bootstrapToggler.addEventListener("click", () =>{
     bootstrapNavbar.classList.add("slide-menu");
});
bootstrapNavBtn.addEventListener("click", () =>{
     bootstrapNavbar.classList.remove("slide-menu");
});



// dynamic menu cards

let menuData = [
  {
    title : "Bread Fruit Cheese Sandwich",
    img : "images/menu1.webp",
    des : "  A delightful blend of soft bread, fresh fruits, and creamy cheese. A perfect mix of sweet and savory flavors for a refreshing bite every time.",
    price : "$100"
  },
    {
    title : "Beef Cutlet with Spring Onion",
    img : "images/menu2.webp",
    des : "  A crispy, flavorful juicy beef cutlet infused with fresh spring onions and aromatic spices, served with tangy herb sauce and sautéed vegetables.",
    price : "$120"
  },
    {
    title : "Herb-Crusted Beef with Cream Sauce",
    img : "images/menu3.webp",
    des : " A tender, flavorful grilled beef fillet coated in aromatic herbs and spices, served with rich, velvety cream sauce and fresh seasonal veggies.",

    price : "$150"
  },

];


let menuItem = document.querySelector("#menu-items");
if(menuItem){
 menuData.forEach((item)=>{

 const data = `
        <div class="col-lg-4 col-md-6">
                   <div class="menu-card">
                      <div class="menu-wrapper">
                        <div class="menu-img " style = "background-image:url('${item.img}');" >
                         <div class="menu-overlay"></div>
                       </div>
                      </div>
                      <div class="menu-title">
                        <h4>${item.title}</h4>
                        <p>
                          ${
                            item.des
                          }
                        </p>
                        <h6>${item.price}</h6>
                     </div>
                   </div>
                 </div>

 `
 menuItem.innerHTML += data;
 });
}

// gallery--section--- carousel
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });
  });


  