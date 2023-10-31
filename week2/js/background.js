const images = ["0.png", "1.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//이게 js로 html에 추가해주는 것이다.
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);