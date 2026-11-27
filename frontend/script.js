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
//READING PLAN ELEMENTS
const readingPlanForm = document.getElementById("reading-plan-form");

const selectedPlanMessage = document.getElementById(
    "selected-plan-message"
);


// READING PLAN SELECTION

readingPlanForm.addEventListener("change", function () {

    const selectedPlan = readingPlanForm.querySelector(
        'input[name="duration"]:checked'
    );

    
    if (selectedPlan) {

        const duration = selectedPlan.value;

        selectedPlanMessage.textContent =
            `You have selected the ${duration} Days Reading Plan.`;

    }

});

// =========================
// STEP 9 - SIGNUP FORM
// =========================


// SIGNUP ELEMENTS

const signupForm = document.getElementById("signup-form");

const signupMessage = document.getElementById("signup-message");


// SIGNUP FORM SUBMISSION

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // GET USER DETAILS

    const userName = document.getElementById("name").value.trim();

    const userEmail = document.getElementById("email").value.trim();

    const userPassword = document.getElementById("password").value;

    const termsAccepted = document.getElementById("terms").checked;


    // NAME VALIDATION

    if (userName.length < 3) {

        signupMessage.textContent =
            "Name must contain at least 3 characters.";

        return;

    }


    // EMAIL VALIDATION

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(userEmail)) {

        signupMessage.textContent =
            "Please enter a valid email address.";

        return;

    }


    // PASSWORD VALIDATION

    if (userPassword.length < 8) {

        signupMessage.textContent =
            "Password must contain at least 8 characters.";

        return;

    }


  //  TERMS VALIDATION

    if (!termsAccepted) {

        signupMessage.textContent =
            "Please accept Terms and Conditions.";

        return;

    }


    // SUCCESS MESSAGE

    signupMessage.textContent =
        `Welcome ${userName}! Your signup form has been submitted successfully.`;


    // RESET FORM

    signupForm.reset();

});

// =========================
// STEP 12
// FEEDBACK SUBMISSION
// =========================


// GET HTML ELEMENTS

const feedbackForm = document.querySelector(
    ".feedback-section form"
);

const feedbackInput = document.getElementById("feedback");

const feedbackMessage = document.getElementById("feedback-message");


// HANDLE FORM SUBMISSION

feedbackForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // GET USER FEEDBACK

    const userFeedback = feedbackInput.value.trim();


    // EMPTY FEEDBACK VALIDATION

    if (userFeedback === "") {

        feedbackMessage.textContent =
            "Please enter your feedback.";

        feedbackMessage.style.color = "red";

        return;

    }


    // SUCCESS MESSAGE

    feedbackMessage.textContent =
        "Thank you! Your feedback has been submitted successfully.";

    feedbackMessage.style.color = "green";


    // RESET FORM

    feedbackForm.reset();

});


// =========================
// STEP 13
// HELP BUTTON POPUP
// =========================


// GET HELP BUTTON

const helpButton = document.querySelector(".help-button");


// HANDLE BUTTON CLICK

helpButton.addEventListener("click", function () {

    alert(
        "Welcome to EduMatrix!\n\n" +
        "Need help?\n\n" +
        "1. Browse available books.\n" +
        "2. Select your reading plan.\n" +
        "3. Sign up to access our library.\n\n" +
        "Thank you for using EduMatrix!"
    );

});


// =========================
// STEP 14
// SMOOTH NAVIGATION
// =========================


// SELECT NAVIGATION LINKS

const navigationLinks = document.querySelectorAll(
    "nav a[href^='#']"
);


// HANDLE NAVIGATION CLICK

for (let i = 0; i < navigationLinks.length; i++) {

    navigationLinks[i].addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);


        // CHECK TARGET SECTION

        if (targetSection) {

            event.preventDefault();


            // SMOOTH SCROLL

            targetSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

}