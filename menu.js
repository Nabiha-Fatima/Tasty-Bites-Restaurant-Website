let filterBtns = document.querySelectorAll("#filterable_btns button");
let cards = document.querySelectorAll(".filterCardContainer");

let filterCards = (e) =>{
 document.querySelector(".menu-active").classList.remove("menu-active");
    e.target.classList.add('menu-active'); 

    cards.forEach((card)=>{
      card.classList.add("hide");
      if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
       card.classList.remove("hide");
      }
    })
}
 

filterBtns.forEach((button)=>{
 button.addEventListener("click", filterCards);
});