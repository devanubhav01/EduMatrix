// =========================
// STEP 2, 3, 4
// BOOK SEARCH SYSTEM
// =========================


// SEARCH ELEMENTS

const searchForm = document.getElementById("search-form");

const searchInput = document.getElementById("search-input");


// BOOK CATALOG ROWS

const bookRows = document.querySelectorAll(
    ".book-catalog-section tbody tr"
);


// BOOK SEARCH FUNCTION

function searchBooks() {

    const searchValue = searchInput.value.toLowerCase().trim();

    for (let i = 0; i < bookRows.length; i++) {

        const bookDetails = bookRows[i].textContent.toLowerCase();

        if (bookDetails.includes(searchValue)) {

            bookRows[i].style.display = "";

        }

        else {

            bookRows[i].style.display = "none";

        }

    }

}


// SEARCH BUTTON

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    searchBooks();

});


// LIVE SEARCH

searchInput.addEventListener("input", function () {

    searchBooks();

});