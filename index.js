var i = 0;
var images = [];
var time = 4000;


images[0] = '/images/cos1.jpg';
images[1] = '/images/cos2.jpg';
images[2] = '/images/cos3.jpg';
images[3] = '/images/cos4.jpg';
images[4] = '/images/cos5.jpg';

function changeImg() {
    document.sliding.src = images[i];


    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


// document.body.style.backgroundColor = "green"


// signup