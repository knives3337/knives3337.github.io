// Elementų paėmimas
const powerButton = document.getElementById("powerButton");
const voltageMode = document.getElementById("voltageMode");
const currentMode = document.getElementById("currentMode");
const resistanceMode = document.getElementById("resistanceMode");
const settingsSection = document.getElementById("settingsSection");
const modeTitle = document.getElementById("modeTitle");
const settingsDiv = document.getElementById("settings");
const outputValue = document.getElementById("outputValue");

let powerOn = false; // Multimetro būsena

// Įjungimo/Išjungimo mygtukas
powerButton.addEventListener("click", () => {
    powerOn = !powerOn;
    if (powerOn) {
        powerButton.textContent = "Išjungti";
        powerButton.classList.add("active");
        enableModes(true);
    } else {
        powerButton.textContent = "Įjungti";
        powerButton.classList.remove("active");
        enableModes(false);
        resetMultimeter();
    }
});

// Funkcija įjungti/išjungti režimus
function enableModes(state) {
    voltageMode.disabled = !state;
    currentMode.disabled = !state;
    resistanceMode.disabled = !state;
}

// Funkcija atstatyti multimetro būseną
function resetMultimeter() {
    settingsSection.classList.add("hidden");
    settingsDiv.innerHTML = "";
    outputValue.textContent = "---";
}

// Režimų nustatymas
voltageMode.addEventListener("click", () => setupMode("voltage"));
currentMode.addEventListener("click", () => setupMode("current"));
resistanceMode.addEventListener("click", () => setupMode("resistance"));

// Režimo valdymas
function setupMode(mode) {
    settingsSection.classList.remove("hidden");
    settingsDiv.innerHTML = ""; // Išvalyti ankstesnius nustatymus

    if (mode === "voltage") {
        modeTitle.textContent = "Įtampos matavimo režimas";
        createDropdown("Pasirinkite intervalą:", [
            { value: "0.1-1", label: "0.1-1 V" },
            { value: "1-20", label: "1-20 V" },
            { value: "20-200", label: "20-200 V" },
            { value: "50-200", label: "50-200 V (AC)" },
            { value: "200-1000", label: "200-1000 V (AC)" }
        ]);
    } else if (mode === "current") {
        modeTitle.textContent = "Srovės matavimo režimas";
        createDropdown("Pasirinkite intervalą:", [
            { value: "0-100", label: "0-100 mA" },
            { value: "100-500", label: "100-500 mA" },
            { value: "500-1000", label: "500-1000 mA" },
            { value: "1-10", label: "1-10 A" }
        ]);
    } else if (mode === "resistance") {
        modeTitle.textContent = "Varžos matavimo režimas";
        createDropdown("Pasirinkite intervalą:", [
            { value: "0-10", label: "0-10 Ω" },
            { value: "10-100", label: "10-100 Ω" },
            { value: "100-1000", label: "100-1000 Ω" },
            { value: "1k-100k", label: "1 kΩ - 100 kΩ" }
        ]);
    }
}

// Sukurti pasirinkimo lauką (dropdown)
function createDropdown(labelText, options) {
    const label = document.createElement("label");
    label.textContent = labelText;

    const select = document.createElement("select");
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.label;
        select.appendChild(opt);
    });

    settingsDiv.appendChild(label);
    settingsDiv.appendChild(select);

    select.addEventListener("change", () => {
        const range = select.value.split("-").map(Number);
        updateRandomValue(range[0], range[1]);
    });
}

// Atsitiktinės reikšmės generavimas
function updateRandomValue(min, max) {
    const randomValue = (Math.random() * (max - min) + min).toFixed(2);
    outputValue.textContent = `${randomValue}`;
}
