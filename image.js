var div = document.createElement("div");
div.setAttribute("class", "header container");
div.setAttribute("id","header");
document.body.append(div);


var h1 = document.createElement("h1");
h1.innerText="India's Special";
div.appendChild(h1);


var div1 = document.createElement("div");
div1.setAttribute("class","image-container p-2");
div1.setAttribute("id","image-container");
document.body.append(div1)
const imageContainer = document.getElementById('image-container');
let ready = false;
let totalImages = 0;
let photosArray = [];
var apiUrl = `https://api.unsplash.com/photos/random/?client_id=rb3PQGujn9e5YFwSo5KA6WMEryNhyEj94h5ltTGlo5o&count=100&query=india&orientation=squarish;`

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {

  totalImages = photosArray.length;
  
  photosArray.forEach((photo) => {
  
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
    
    });
    
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
   e
  }
}
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
});

getPhotos();