var style = document.creatElement('style');
var position = 'left';

style.innerHTML = '
@keyframes my-animation{
    0%{ ${position}:-${document.querySelector(".text").offsetWidth + 10}px'}
    100%{${position}: 100%}
}';

document.head.append(style);
