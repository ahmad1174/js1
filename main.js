
// window.addEventListener("keydown", function(e){
//     const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key=document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     if(!audio) return;
//     audio.currentTime=0;
//     audio.play();
//     key.classList.add('playing');
// });
// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
// }
//
window.addEventListener('keydown', playSound);

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
//  }
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(function(){key.classList.remove('playing');},150);
}

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
