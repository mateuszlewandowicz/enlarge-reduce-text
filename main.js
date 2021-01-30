let bigger = document.querySelector('.sizeUp');
let smaller = document.querySelector('.sizeDown');
let color = document.querySelector('.color');
const p = document.querySelector('p');
let note= prompt('Podaj swój tekst:');
let i = 36;
p.innerText = note;

bigger.addEventListener('click', function(){
    i +=5;
    p.style.fontSize = i + 'px'
    console.log(note);
});

smaller.addEventListener('click', function(){
    i -=5;
    p.style.fontSize = i + 'px'
});

color.addEventListener('click', function(){
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);

    p.style.color = `rgb(${r},${g},${b})`;
});