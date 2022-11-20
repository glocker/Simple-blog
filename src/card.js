let url = document.location.href;
let params = (new URL(url)).searchParams;
let articleName = params.get("name");
let articleDate = params.get("date");

const cardTitle = document.getElementById('cardTitle');
const cardBreadcrumbs = document.getElementById('breadcrumbs');

// Set clicked article name to title of new card
cardTitle.innerHTML = articleName;

cardBreadcrumbs.innerHTML = articleName + " (" + articleDate + ")";