// JavaScript Code for Siddhi Lugade's Portfolio

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // Interactive button functionality
    const greetBtn = document.getElementById("greet-btn");
    const greetMsg = document.getElementById("greet-msg");

    const messages = [
        "Welcome to my portfolio! Have a great day! ✨",
        "Thanks for stopping by! Feel free to check out my projects. 🚀",
        "Let's build something amazing together! 💡",
        "Connect with me on LinkedIn or GitHub! 🤝"
    ];

    greetBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        greetMsg.textContent = messages[randomIndex];
    });

    // Add a simple fade-in effect to the project cards on load
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100);
    });
});