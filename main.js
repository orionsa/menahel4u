let textComputedStyle = getComputedStyle(document.querySelector('.text'),null).fontSize;
let textFontSize = parseInt(textComputedStyle,10);
let titleComputedStyle = getComputedStyle(document.querySelector('.title'),null).fontSize;
let titleFontSize = parseInt(titleComputedStyle,10);

$(document).ready(function(){
    $('.slider').bxSlider();
  });

function enlarge(){
    textFontSize += 1.5;
    titleFontSize += 1.5;
    for(let i = 0; i<document.querySelectorAll('.text').length; i++){
        document.querySelectorAll('.text')[i].style.fontSize = textFontSize + 'px';
        document.querySelectorAll('.title')[i].style.fontSize = titleFontSize + 'px';
    }
}

function shrink(){
    textFontSize -= 1.5;
    titleFontSize -= 1.5;
    for(let i = 0; i<document.querySelectorAll('.text').length; i++){
        document.querySelectorAll('.text')[i].style.fontSize = textFontSize + 'px';
        document.querySelectorAll('.title')[i].style.fontSize = titleFontSize + 'px';
    }
}

document.querySelector('.enlarge').addEventListener('click', ()=>enlarge());
document.querySelector('.shrink').addEventListener('click', ()=>shrink())