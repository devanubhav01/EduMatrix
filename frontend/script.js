console.log("EduMatrix JavaScript Connected Successfully!");

// =========================
// STEP 2 - BOOK SEARCH
// =========================

const searchForm = document.getElementById("search-form");

const searchInput = document.getElementById("search-input");

const bookRows = document.querySelectorAll(
    ".book-catalog-section tbody tr"
);

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchValue = searchInput.value.toLowerCase().trim();

    for (let i = 0; i < bookRows.length; i++) {

        const bookDetails = bookRows[i].textContent.toLowerCase();


        // MATCH SEARCH TEXT

        if (bookDetails.includes(searchValue)) {

            bookRows[i].style.display = "";

        }

        else {

            bookRows[i].style.display = "none";

        }

    }


});