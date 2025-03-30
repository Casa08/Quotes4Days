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


  const sounds = [
  "../sounds/1.mp3",
  "../sounds/2.mp3",
  "../sounds/3.mp3",
  "../sounds/4.mp3"
];


document.querySelectorAll(".js-ent-button")
.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent instant navigation
    document.body.style.opacity = "0"; // Fade out

    // Pick a random sound 
    const randomSound = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    randomSound.play(); // Play the sound

    setTimeout(() => {
      window.location.href = event.target.closest("a").href;
    }, 500); // Delay transition
  });
});
  
  