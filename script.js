// Script base per il form
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Messaggio inviato! (Simulato)');
});

// Funzione per ottenere il meteo senza chiave API (usando un'API gratuita)
async function getWeather() {
    const city = prompt("Inserisci una città per il meteo:");
    const url = `https://wttr.in/${city}?format=%C+%t`;

    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById("meteo-info").innerText = `Meteo in ${city}: ${data}`;
    } catch (error) {
        document.getElementById("meteo-info").innerText = "Errore nel recuperare i dati meteo.";
    }
}

// Funzione per ottenere l'età basata sul nome (usando l'API Agify)
async function getAge() {
    const name = prompt("Inserisci il tuo nome:");

    // Costruisci l'URL dell'API Agify
    const url = `https://api.agify.io?name=${name}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("citazione-info").innerText = `L'età media di ${name} è: ${data.age} anni.`;
    } catch (error) {
        document.getElementById("citazione-info").innerText = "Errore nel recuperare l'età.";
    }
}

// Funzione per ottenere un errore HTTP casuale
function getRandomError() {
    // Array di codici di errore HTTP comuni
    const errorCodes = [
        400, 401, 403, 404, 500, 502, 503, 504, 408, 413, 429
    ];

    // Genera un numero casuale tra 0 e la lunghezza dell'array errorCodes
    const randomIndex = Math.floor(Math.random() * errorCodes.length);

    // Ottieni il codice di errore casuale
    const randomErrorCode = errorCodes[randomIndex];

    // Crea l'URL con il codice di errore
    const errorURL = `https://status.pizza/${randomErrorCode}`;

    // Reindirizza direttamente alla URL dell'errore
    window.location.href = errorURL;
}
