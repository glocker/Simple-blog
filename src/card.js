// URL data
const url = document.location.href;
const params = (new URL(url)).searchParams;
const articleName = params.get("name");
const articleDate = params.get("date");

// DOM elements
const cardTitle = document.getElementById('cardTitle');
const cardBreadcrumbs = document.getElementById('breadcrumbs');
const cardImage = document.getElementById('image');

// Set clicked article name to title of new card
cardTitle.innerHTML = articleName;
cardBreadcrumbs.innerHTML = articleName + " (" + articleDate + ")";

const imageWidth = 500;
const imageHeight = 400;

function getImage(id) {
    return `https://picsum.photos/id/${id}/${imageWidth}/${imageHeight}`
}

const imagesList = {
    "Der nächste Schritt ist getan: Wir sind klimaneutral": getImage(10),
    "Endlich wieder INTERSCHUTZ": getImage(12),
    "Die LPS II im Freizeitgebrauch": getImage(11),
}

// Set clicked article image in new card
cardImage.src = imagesList[articleName];
