export const sounds = [
    "../sounds/1.mp3",
    "../sounds/2.mp3",
    "../sounds/3.mp3",
    "../sounds/4.mp3"
  ];


function playSound(sounds) {
  const randomSound = Math.floor(Math.random() * sounds.length); // Pick a random sound 
  const audio = new Audio(sounds[randomSound]);
  audio.play(); // Play the sound
}