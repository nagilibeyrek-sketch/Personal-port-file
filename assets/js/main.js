// ----------------------------
// Highlight Active Navigation
// ----------------------------
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// ----------------------------
// Smooth Scroll for internal # links
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ----------------------------
// Simple Alert Button
// ----------------------------
function showMessage(message) {
    alert(message || "Hello! Thanks for clicking.");
}

// ----------------------------
// Dark Mode Toggle
// ----------------------------
const darkBtn = document.querySelector("#darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Save preference
        const mode = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", mode);
    });
}

// Load user theme on start
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// ----------------------------
// Fade-in Animation on Page Load
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});
