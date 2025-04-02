import { contents } from "./quote_figures.js";
import { sounds, playSound } from "./sounds.js";

let contentsHTML = '';

contents.forEach((content) => {
  contentsHTML += `
   <section class="wrapper">

    <div class="content">
      <div class="img-cont">
        <img class="img" src="${content.image}">
      </div>
    
      <div class="name"> ${content.name} </div>
      <div class="quote"> Quotes </div>
    </div>
    
    <div class="btn">
      <a href="${content.link}">
        <button class="ent js-ent-button"> ENTER </button>
      </a>
    </div>
  
    </section>
  `;

});

document.querySelector('.js-container')
  .innerHTML = contentsHTML;


document.querySelectorAll(".js-ent-button")
.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents instant navigation
    document.body.style.opacity = "0"; // Fade out

    playSound(sounds);    

    setTimeout(() => {
      window.location.href = event.target.closest("a").href;
    }, 500); // Delay transition
  });
});
  
  