var hex1 = 239;
var hex2 = 194;
var hex3 = 224;
var headerText = document.getElementsByClassName('header')[0].getElementsByTagName('h1')[0];
headerText.style.textShadow = "1px 1px 1px #391326";
headerText.setAttribute('style', 'animation:pop 1s ease-in-out;');

function fadetext() {
    if (hex1 > 182) { //If color is not black yet
        hex1 -= 5; // increase color darkness
        hex2 -= 20;
        hex3 -= 11;
        headerText.style.color = "rgb(" + hex1 + "," + hex2 + "," + hex3 + ")";
        setTimeout("fadetext()", 80);
    } else {
        hex1 = 224;
        hex2 = 133;
        hex3 = 194;
    }
};

// set a random image as header image 
document.getElementsByClassName('header')[0].setAttribute('id', 'header');
var header = document.getElementById('header');
var pictures = new Array('https://i.pinimg.com/originals/8b/61/c1/8b61c154e7f44146727a32c05a7539d9.gif',
    'https://i.pinimg.com/originals/4c/8e/26/4c8e267ee4446e733bb17564337083f7.jpg',
    'https://i0.wp.com/windowscustomization.com/wp-content/uploads/2018/10/cyberpunk-night-city.gif?fit=750%2C364&quality=80&strip=all&ssl=1',
    'http://s13.favim.com/orig/160531/anime-scenery-gif-anime-gifs-Favim.com-4364443.gif',
    'https://i.pinimg.com/originals/76/90/8b/76908b09072332bd62e7cf92b3042dd2.gif',
    'https://data.whicdn.com/images/319359512/original.gif',
    'https://i.pinimg.com/originals/05/59/3e/05593e925e651314820bbb215b223a5f.jpg'
)
var numPics = pictures.length;
if (document.images) {
    var chosenPic = Math.floor((Math.random() * numPics));
    header.style.backgroundSize = 'cover';
    header.style.backgroundRepeat = 'no-repeat';
    header.style.backgroundPosition = 'center center';
    header.style.backgroundImage = 'url(' + pictures[chosenPic] + ')';
}
var div = document.createElement('div');
div.setAttribute('class', 'popText');
header.appendChild(div);
div.setAttribute('style', 'animation:pop 1s ease-in-out; animation-delay:0.2s;');
div.style.textShadow = "5px 5px 1px #9900ff, 10px 10px 1px #ff4d94";
div.appendChild(document.getElementsByTagName('p')[0]);
fadetext();