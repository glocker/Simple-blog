addEventListener('click', (event) => {

    // Getting button id
    const clickedButton = event.target.id;

    // Get buttons list and remove .active classes
    const buttonsList = document.querySelectorAll('.btn');
    buttonsList.forEach(button => {
        button.classList.remove('active');
    });

    // Next set class for clicked button
    const button = document.getElementById(clickedButton);
    button.classList.add('active');

    // Get articles list and hide others with display: none
    const articlesList = document.querySelectorAll('article');

    if (clickedButton === 'Alle') {
        // Remove all display: none
        articlesList.forEach(article => {
            if (article.className === 'hidden') {
                article.classList.remove('hidden');
            }
        })
    }

    if (clickedButton === 'Produkte') {
        articlesList.forEach(article => {
            if (article.getAttribute('data-article') !== clickedButton) {
                article.classList.add('hidden')
            }
        })
    }

    if (clickedButton === 'Messen') {
        articlesList.forEach(article => {
            if (article.getAttribute('data-article') !== clickedButton) {
                article.classList.add('hidden')
            }
        })
    }
})
