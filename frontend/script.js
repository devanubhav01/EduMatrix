// =========================
// STEP 2-5
// COMPLETE BOOK SEARCH SYSTEM
// =========================


// SEARCH ELEMENTS

const searchForm = document.getElementById("search-form");

const searchInput = document.getElementById("search-input");


// BOOK CATALOG

const bookRows = document.querySelectorAll(
    ".book-catalog-section tbody tr"
);


// NO RESULTS MESSAGE

const noResults = document.getElementById("no-results");


// BOOK SEARCH FUNCTION

function searchBooks() {

    const searchValue = searchInput.value.toLowerCase().trim();

    let foundBooks = 0;


    for (let i = 0; i < bookRows.length; i++) {

        const bookDetails = bookRows[i].textContent.toLowerCase();


        if (bookDetails.includes(searchValue)) {

            bookRows[i].style.display = "";

            foundBooks++;

        }

        else {

            bookRows[i].style.display = "none";

        }

    }


    // NO RESULTS MESSAGE

    if (foundBooks === 0) {

        noResults.style.display = "block";

    }

    else {

        noResults.style.display = "none";

    }

}


// SEARCH BUTTON

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();
console.log(event)
    searchBooks();

});


// LIVE SEARCH

searchInput.addEventListener("input", function () {

    searchBooks();

});
// READING PLAN ELEMENTS
// const readingPlanForm = document.getElementById("reading-plan-form");

// const selectedPlanMessage = document.getElementById(
//     "selected-plan-message"
// );


// // READING PLAN SELECTION

// readingPlanForm.addEventListener("change", function () {

//     const selectedPlan = readingPlanForm.querySelector(
//         'input[name="duration"]:checked'
//     );

//     if (selectedPlan) {

//         const duration = selectedPlan.value;

//         selectedPlanMessage.textContent =
//             `You have selected the ${duration} Days Reading Plan.`;

//     }

// });
