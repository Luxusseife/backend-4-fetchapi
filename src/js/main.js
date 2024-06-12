"use strict";
/*
// Funktionalitet för att hämta, radera och skapa jobb.

// Funktion som kör vid sidladdning efter koll om element finns.
window.onload = () => {
    if (document.getElementById("jobList")) {
        getJobs();
    }
}

// Funktion som hämtar lagrade jobb.
async function getJobs() {

    // API-URL.
    const getUrl = "http://127.0.0.1:3000/api";

    // AJAX-anrop, loopar genom data och skriver ut till skärm.
    try {
        const response = await fetch(getUrl);
        const data = await response.json();

        // Hämtar ul-elementet vari datan ska skrivas ut.
        let jobListEl = document.getElementById("jobList");
        // Rensar listan innan ny data läggs till.
        jobListEl.innerHTML = ""; 

        // Loopar genom objekt-array och skriver ut jobb-poster.
        data.forEach((job) => {
            // Skapar ett listelement för varje jobb.
            const jobItem = document.createElement("li");
            jobItem.innerHTML = `
                <h3>${job.companyname}</h3>
                <p><strong>Ort:</strong> ${job.location}</p>
                <p><strong>Befattning:</strong> ${job.jobtitle}</p>
                <p><strong>Startdatum:</strong> ${job.startdate}</p>
                <p><strong>Slutdatum:</strong> ${job.enddate}</p>
                <form class="eraseButton" data-workid="${job._id}">
                    <input type="hidden" name="jobId" value="${job._id}">
                    <input type="submit" value="Radera" class="deleteJob">
                </form>
            `;
    
            // Lägger till listelementet i containern.
            jobListEl.appendChild(jobItem);

            // Lägger till händelselyssnare för "radera"-knappen.
            const eraseButton = jobItem.querySelector(".eraseButton");
            eraseButton.addEventListener("submit", deleteJob);
        });

    // Felmeddelande.
    } catch (error) {
        console.log("Fetch failed. This message was created:", error);
    }
}

// Funktion som raderar ett jobb vid klick på "radera"-knappen.
async function deleteJob(event) {

    // Hanterar default för submit vid formulär.
    event.preventDefault();

    // Hämtar id for jobb och deklarerar URL.
    const jobid = event.currentTarget.getAttribute("data-workid");
    const deleteUrl = `http://127.0.0.1:3000/job/${jobid}`;

    // AJAX-anrop med metoden DELETE.
    try {
        const response = await fetch(deleteUrl, {
            method: "DELETE"
        });

        // Villkor.
        if (response.ok) {
            // Raderar specifika jobb-posten från DOM.
            event.target.parentElement.remove();

            // Skickar en alert till användaren om lyckad radering.
            alert("Lyckad radering. Arbetet är nu borttaget från databasen!");
        
        // Felmeddelande vid specifik radering.
        } else {
            // Skickar en alert till användaren om misslyckad radering.
            alert("Raderingen misslyckades. Prova igen!");
        }
    // Felmeddelande.
    } catch (error) {
        console.error("Error deleting job:", error);
    }
}

// Lägger till en händelselyssnare för formuläret och knappen "lägg till" om villkor uppfylls.
// Villkor; kollar om formuläret finns på aktuell sida.
if (document.getElementById("jobForm")) {
    document.getElementById("jobForm").addEventListener("submit", checkInput);
}

// Kontrollering av input.
function checkInput(event) {
    // Hanterar default för submit vid formulär.
    event.preventDefault();

    // Hämtar inputvärden för de olika formulärfälten.
    const companyname = document.getElementById("companyname").value;
    const jobtitle = document.getElementById("jobtitle").value;
    const location = document.getElementById("location").value;
    const startdate = document.getElementById("startdate").value;
    const enddate = document.getElementById("enddate").value;

    // Felmeddelande i formuläret.
    const formErrors = document.getElementById("error-container");
     // Rensar tidigare felmeddelanden.
    formErrors.innerHTML = "";

    // Kontroll av input.
    if(companyname === "" || jobtitle === "" || location === "" || startdate === "") {
        // Visar ett felmeddelande till användaren om att input saknas.
        formErrors.innerHTML = "Alla fält förutom slutdatum behöver fyllas i!";
        // Koden exekveras inte vidare om input saknas.
        return;

    // Skickar med inputvärden till funktionen addJob.
    } else {
        addJob(companyname, jobtitle, location, startdate, enddate);
    }
}

// Funktion som lägger till ett jobb.
async function addJob(companyname, jobtitle, location, startdate, enddate) {
    
    // Skapar ett nytt objekt med input-värden.
    const newJob = {
        companyname: companyname,
        jobtitle: jobtitle,
        location: location,
        startdate: startdate,
        enddate: enddate || "pågående"
    };

    // Deklarerar URL.
    const addUrl = "http://127.0.0.1:3000/job";

    // AJAX-anrop med metoden POST.
    try {
        const response = await fetch(addUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJob)
        });

        // Villkor.
        if (response.ok) {
            // Laddar om/uppdaterar jobblistan.
            getJobs();

            // Rensar formuläret.
            document.getElementById("jobForm").reset();
            
            // Skickar en alert till användaren om lyckad lagring.
            alert("Lyckad lagring! Arbetet finns nu i databasen!");

            // Dirigerar om till index.html efter lyckad lagring.
    	    window.location.href = 'index.html';

        // Felmeddelande vid lagring av jobb.
        } else {
            // Visar ett meddelande till användaren om misslyckad lagring.
            const formErrors = document.getElementById("error-container");
            formErrors.innerHTML = "Misslyckad lagring. Prova igen!";
        }
    // Felmeddelande.
    } catch (error) {
        const formErrors = document.getElementById("error-container");
        formErrors.innerHTML = "Error adding job: " + error.message;
        console.error("Error adding job:", error);
    }
}*/