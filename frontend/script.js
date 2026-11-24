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

    console.log("Searching for:", searchValue);

});