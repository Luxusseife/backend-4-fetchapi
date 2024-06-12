"use strict";

// Funktionalitet för att registrera en användare, logga in som användare och få åtkomst till skyddad route.


// Kontroll om registrerings- eller inloggningsformuläret finns på aktuell sida.
const regForm = document.getElementById("register");
const loginForm = document.getElementById("login");

// Registreringsformulär.
if (regForm) {
    regForm.addEventListener("submit", (event) => checkInput(event, "register"));
}

// Inloggningsformulär.
if (loginForm) {
    loginForm.addEventListener("submit", (event) => checkInput(event, "login"));
}

// Funktion som registrerar en användare.
async function regUser(username, password) {

    // API-url.
    const regUrl = "http://127.0.0.1:3000/api/register";

    // AJAX-anrop med metoden POST.
    try {
        const response = await fetch(regUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        // Villkor, om registrering lyckas.
        if (response.ok) {
            // Rensar formulär på inputvärden.
            document.getElementById("register").reset();

            // Skickar en alert till användaren om lyckad registering.
            alert("Ditt användarkonto har registrerats! Du kan nu logga in.");

            // Dirigerar om till index.html.
            window.location.href = "index.html";

            // Felmeddelande om registrering misslyckas.
        } else {
            const formErrors = document.getElementById("error-container");
            formErrors.innerHTML = "Registreringen misslyckades. Prova igen!";
        }
        // Felmeddelande om fel vid registrering.
    } catch (error) {
        const formErrors = document.getElementById("error-container");
        formErrors.innerHTML = "Det uppstod ett fel vid registrering: " + error.message;
        console.error("Fel vid registrering: ", error);
    }
}

// Funktion som loggar in en användare.
async function loginUser(username, password) {

    // API-url.
    const logUrl = "http://127.0.0.1:3000/api/login";

    // AJAX-anrop med metoden POST.
    try {
        const response = await fetch(logUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        // Villkor, om inloggning lyckas.
        if (response.ok) {
            // Rensar formulär på inputvärden.
            document.getElementById("login").reset();

            // Dirigerar om till den skyddade sidan mypage.html.
            window.location.href = "mypage.html";

            // Felmeddelande om inloggning misslyckas.
        } else {
            const formErrors = document.getElementById("error-container");
            formErrors.innerHTML = "Inloggningen misslyckades. Prova igen!";
        }
        // Felmeddelande om fel vid inloggning.
    } catch (error) {
        const formErrors = document.getElementById("error-container");
        formErrors.innerHTML = "Det uppstod ett fel vid inloggningen: " + error.message;
        console.error("Fel vid inloggning: ", error);
    }
}

// Kontrollering av input.
function checkInput(event, formType) {

    // Hanterar default för submit vid formulär.
    event.preventDefault();

    // Hämtar in inputvärden.
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Felmeddelande i formuläret.
    const formErrors = document.getElementById("error-container");
    // Rensar tidigare felmeddelanden.
    formErrors.innerHTML = "";

    // Kontroll av input.
    if (username === "" || password === "") {
        // Visar ett felmeddelande till användaren om att input saknas.
        formErrors.innerHTML = "Användarnamn och lösenord måste anges!";
        // Koden exekveras inte vidare om input saknas.
        return;
    }

    // Skickar med inputvärden, antingen till regUser eller loginUser.
    if (formType === "register") {
        regUser(username, password);
    } else if (formType === "login")
        loginUser(username, password);
}

// Lägger till händelselyssnare för synligt/osynligt lösenord när registrerings-sidan laddas.
document.addEventListener("DOMContentLoaded", () => {
    const passwordCheckbox = document.getElementById("show-password");
    const passwordInput = document.getElementById("password");

    // Villkor.
    if (passwordCheckbox) {
        passwordCheckbox.addEventListener("change", () => {
            // Visar text om i-bockad.
            if (passwordCheckbox.checked) {
                passwordInput.type = "text";
                // Osynligt lösenord om inte i-bockad (prickar). 
            } else {
                passwordInput.type = "password";
            }
        });
    }
});