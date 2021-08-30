// Toggle For Navigation
let btn = document.getElementById('btn');
let nav = document.getElementById('nav');

btn.onclick = function () {
    nav.classList.toggle('show')
}

// Change Img In Products

let img = document.getElementById('img');
let imgs =
    [
        'images/plate-1.png',
        'images/plate-2.png',
        'images/plate-3.png',
    ]
function changeImgs(img, imgs) {
    setInterval(function () {
        let randomImgs = Math.floor(Math.random() * imgs.length);
        img.src = imgs[randomImgs];
    }, 1500);
};
changeImgs(img, imgs);


// Servises flip
let btnOne = document.getElementById('btnOne');
let btnTow = document.getElementById('btnTow');
let btnThree = document.getElementById('btnThree');

let flip1 = document.getElementById('flip1');
let flip2 = document.getElementById('flip2');
let flip3 = document.getElementById('flip3');

btnOne.onclick = function () {
    flip1.classList.toggle('flip')
}

btnTow.onclick = function () {
    flip2.classList.toggle('flip')
}
btnThree.onclick = function () {
    flip3.classList.toggle('flip')
}

// Create Oclock
let digitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm = hours >= 12 ? 'pm' : 'am';
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amorpm;
    setTimeout(digitalClock, 500);
}
digitalClock();
