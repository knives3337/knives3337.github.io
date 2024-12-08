// Funkcija, kuri gauna dabartinį laiką ir paverčia jį į skaitymo formatą
function updateClock() {
    const now = new Date(); // Gauti dabartinį laiką
    const hours = String(now.getHours()).padStart(2, '0'); // Valandos (00–23)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutės (00–59)
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Sekundės (00–59)

    // Formatuotas laikas
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Atvaizduoti laiką HTML elemente
    document.getElementById('clock').textContent = formattedTime;
}

// Paleisti funkciją kas sekundę
setInterval(updateClock, 1000);

// Nedelsiant parodyti laiką kai tik puslapis užsikrauna
updateClock();
