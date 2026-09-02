document.addEventListener("DOMContentLoaded", () => {
    const greetBtn = document.getElementById("greet-btn");
    const greetMsg = document.getElementById("greet-msg");

    const messages = [
        "Welcome to my portfolio! ✨",
        "Thanks for visiting! 🚀",
        "Let's build something great! 💡",
        "Connect with me on LinkedIn! 🤝"
    ];

    if (greetBtn && greetMsg) {
        greetBtn.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * messages.length);
            greetMsg.textContent = messages[randomIndex];
        });
    }
});