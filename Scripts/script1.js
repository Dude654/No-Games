let Btn = document.querySelector('.button');
let Frame = document.querySelector('.game');

Btn.addEventListener("click", () => {
    Frame.requestFullscreen()
})