let textComputedStyle = getComputedStyle(document.querySelector('.text'),null).fontSize;
let textFontSize = parseInt(textComputedStyle,10);
let titleComputedStyle = getComputedStyle(document.querySelector('.title'),null).fontSize;
let titleFontSize = parseInt(titleComputedStyle,10);

function enlarge(){
    textFontSize += 3;
    titleFontSize += 3;
    for(let i = 0; i<document.querySelectorAll('.text').length; i++){
        document.querySelectorAll('.text')[i].style.fontSize = textFontSize + 'px';
        document.querySelectorAll('.title')[i].style.fontSize = titleFontSize + 'px';
    }
}

function shrink(){
    textFontSize -= 3;
    titleFontSize -= 3;
    for(let i = 0; i<document.querySelectorAll('.text').length; i++){
        document.querySelectorAll('.text')[i].style.fontSize = textFontSize + 'px';
        document.querySelectorAll('.title')[i].style.fontSize = titleFontSize + 'px';
    }
}

document.querySelector('.enlarge').addEventListener('click', ()=>enlarge());
document.querySelector('.shrink').addEventListener('click', ()=>shrink())