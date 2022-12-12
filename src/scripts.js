function clickHandler(clickedButton) {

    // Get buttons list
    const buttonsList = document.querySelectorAll('.btn');

    // Get articles list
    const articlesList = document.querySelectorAll('article');

    // Highlight clicked button and make inactive the rest buttons
    buttonsList.forEach(button => {
        if (clickedButton === button.id) {
            button.classList.add("active");
        }
        if (clickedButton !== button.id) {
            button.classList.remove("active");
        }
    });

    // Show articles by clicked button
    articlesList.forEach(article => {

        if (clickedButton === "Alle") {

            // Remove all display: none
            article.classList.remove('hidden');
        } else {

            if (article.getAttribute('data-article') !== clickedButton) {

                // Hide inactive articles with display: none
                article.classList.add('hidden');

            } else {

                // Show previously hidden article
                article.classList.remove('hidden');
            }
        }
    })
}
