document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";

    // Inicializuojame temą
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Perjungimo funkcija
    themeToggleButton.addEventListener("click", () => {
        const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});
