let url = document.location.href;
let params = (new URL(url)).searchParams;
let articleName = params.get("name");
let articleDate = params.get("date");

// DOM elements
const cardTitle = document.getElementById('cardTitle');
const cardBreadcrumbs = document.getElementById('breadcrumbs');

const cardImage = document.getElementById('image');

// Set clicked article name to title of new card
cardTitle.innerHTML = articleName;

cardBreadcrumbs.innerHTML = articleName + " (" + articleDate + ")";

// TODO: grab image from imagesList by imageMask only through photoId
const imageMask = 'https://picsum.photos/id/10/200/150';

const imagesList = {
    "Der nächste Schritt ist getan: Wir sind klimaneutral": "https://picsum.photos/id/10/200/150",
    "Endlich wieder INTERSCHUTZ": "https://picsum.photos/id/12/200/150",
    "Die LPS II im Freizeitgebrauch": "https://picsum.photos/id/11/200/150",
}

// Set clicked article image in new card
cardImage.src = imagesList[articleName];
