var scroll = document.getElementsByClassName("costumer__button");
var house = document.getElementsByClassName ("costumer__reviewselector")[0];
var slide = document.getElementById("slider");
var selectedSlide = 0;

scroll[0].onclick = function () {
  selectedSlide = 0;
  slide.style.transform = "translateX(0%)";
  house.children[selectedSlide].querySelector("use").setAttribute("href", "./images/SVG/sprite.svg#house");
  resetIcons(selectedSlide);
};

scroll[1].onclick = function () {
  selectedSlide = 1;
  slide.style.transform = "translateX(-32.18%)";
  house.children[selectedSlide].querySelector("use").setAttribute("href", "./images/SVG/sprite.svg#house");
  resetIcons(selectedSlide);
};

scroll[2].onclick = function () {
  selectedSlide = 2;
  slide.style.transform = "translateX(-64.37%)";
  house.children[selectedSlide].querySelector("use").setAttribute("href", "./images/SVG/sprite.svg#house");
  resetIcons(selectedSlide);
};

function resetIcons(selectedSlide) {
  for (var i = 0; i < scroll.length; i++) {
    if (i !== selectedSlide) {
      house.children[i].querySelector("use").setAttribute("href", "./images/SVG/sprite.svg#circle");
    }
  }
}