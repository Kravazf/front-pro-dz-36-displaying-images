const imgNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',]

const randomIndex = Math.floor(Math.random() * imgNames.length);

const randomImageName = imgNames[randomIndex];

const imagesElement = document.createElement('img');
imagesElement.setAttribute('src', `../images/${randomImageName}`);
imagesElement.setAttribute('alt', `${randomImageName}`);

document.body.appendChild(imagesElement);