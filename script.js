document.getElementById("submitButton").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const feature1 = Number(document.getElementById("feature1").value);
    const feature2 = Number(document.getElementById("feature2").value);
    const feature3 = Number(document.getElementById("feature3").value);
    const feature4 = Number(document.getElementById("feature4").value);
    const feature5 = Number(document.getElementById("feature5").value);

    // Validacija
    if (!validateEmail(email)) {
        alert("Klaida: El. pašto adresas neteisingas.");
        return;
    }

    if (!validatePhone(phone)) {
        alert("Klaida: Telefono numeris turi būti tik skaičiai.");
        return;
    }

    if (address.length < 5) {
        alert("Klaida: Adresas turi būti bent 5 simbolių.");
        return;
    }

    const contact = {
        vardas: name,
        pavarde: surname,
        elPastas: email,
        telefonas: phone,
        adresas: address,
        pozymiai: [feature1, feature2, feature3, feature4, feature5],
    };

    // Išvestis konsolėje
    console.log(contact);

    // Vidurkis
    const average = (
        (feature1 + feature2 + feature3 + feature4 + feature5) / 5
    ).toFixed(2);

    console.log(`Vidurkis: ${average}`);

    // Spalvos parinkimas pagal vidurkį
    const averageColor =
        average < 5 ? "red" : average < 7 ? "orange" : "green";

    console.log(
        `%cVardas: ${name}, Pavardė: ${surname}, Vidurkis: ${average}`,
        `color: ${averageColor}; font-weight: bold;`
    );
});

// Patikros funkcijos
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    return /^\d+$/.test(phone);
}
