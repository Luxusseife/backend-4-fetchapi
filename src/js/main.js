"use strict";

// Funktionalitet för att registrera en användare, logga in som användare och få åtkomst till skyddad route.

// Funktion som kör vid sidladdning efter koll om registrerings-element finns.
window.onload = () => {
    if (document.getElementById("register")) {
        regUser();
    }
}

// Funktion som registrerar en användare.
async function regUser() {

    // Hämtar in element.
    const regForm = document.getElementById('register');

    // Förhindrar default-beteende.
    regForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Hämtar in inputvärden.
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

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
                window.location.href = 'index.html';

            // Felmeddelande vid misslyckad registrering.
            } else {
                const regErrors = document.getElementById("error-container");
                regErrors.textContent = "Registreringen misslyckades. Prova igen!";
            }
        // Felmeddelande om fel vid anropet. 
        } catch (error) {
            const regErrors = document.getElementById("error-container");
            regErrors.textContent = "Det uppstod ett fel vid registrering: " + error.message;
            console.error("Error vid registrering: ", error);
        }
    })
};