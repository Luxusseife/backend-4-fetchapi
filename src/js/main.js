"use strict";

// Funktionalitet för att registrera en användare, logga in som användare och få åtkomst till skyddad route.

// Villkor; kollar om formuläret finns på aktuell sida.
if (document.getElementById("register")) {
    document.getElementById("register").addEventListener("submit", checkInput);
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
        } else {
            const regErrors = document.getElementById("error-container");
            regErrors.innerHTML = "Registreringen misslyckades. Prova igen!";
        }
    } catch (error) {
        const regErrors = document.getElementById("error-container");
        regErrors.innerHTML = "Det uppstod ett fel vid registrering: " + error.message;
        console.error("Error vid registrering: ", error);
    }
}

// Kontrollering av input.
function checkInput(event) {

    // Hanterar default för submit vid formulär.
    event.preventDefault();

    // Hämtar in inputvärden.
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Felmeddelande i formuläret.
    const regErrors = document.getElementById("error-container");
    // Rensar tidigare felmeddelanden.
    regErrors.innerHTML = "";

    // Kontroll av input.
    if (username === "" || password === "") {
        // Visar ett felmeddelande till användaren om att input saknas.
        regErrors.innerHTML = "Användarnamn och lösenord måste anges!";
        // Koden exekveras inte vidare om input saknas.
        return;

    // Skickar med inputvärden till funktionen regUser.
    } else {
        regUser(username, password);
    }
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