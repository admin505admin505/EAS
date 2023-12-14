var style = document.creatElement('style');
var position = 'left';

style.innerHTML = '
@keyframes my-animation{
    0%{ ${position}:-${document.querySelector(".text").offsetWidth + 10}px'}
    100%{${position}: 100%}
}';

document.head.append(style);



var msg = new SpeechSynthesisUtterance('THIS IS THIS IS ISSUED BY THE CDC A UNKNOWN VIRUS IS RELEASED PLEASE REMAIN INSIDE DO NOT LOOK OR TALK TO ANYBODY OR OPEN THE DOOR AND WAIT FOR FURTHER INSTRUCTION.');
window.speechSynthesis.speak(msg);

var delayInMilliseconds = 21;

setTimeout(function() {
  var msg = new SpeechSynthesisUtterance('THIS IS THIS IS ISSUED BY THE CDC A UNKNOWN VIRUS IS RELEASED PLEASE REMAIN INSIDE DO NOT LOOK OR TALK TO ANYBODY OR OPEN THE DOOR AND WAIT FOR FURTHER INSTRUCTION');
  window.speechSynthesis.speak(msg);
}, delayInMilliseconds);
