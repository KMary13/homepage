document.addEventListener("DOMContentLoaded", () => {
    const mixerButtons = document.querySelectorAll(".mixer-btn");
    const focusBar = document.getElementById("focus-bar");
    const syntaxBar = document.getElementById("syntax-bar");
    const mixerOutput = document.getElementById("mixer-output-text");
    const hobbyModule = document.getElementById("hobby-mixer-module");
    const hiddenBug = document.getElementById("hidden-bug");

    mixerButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const activity = e.target.getAttribute("data-activity");

            hobbyModule.classList.remove("shake-animation", "fast-bg");

            if (activity === "hike") {

                hobbyModule.classList.add("shake-animation");
                focusBar.style.width = "90%";
                syntaxBar.style.width = "70%";
                mixerOutput.innerText = 'Endurance +40%. Debugging Patience +50%.\n"Ready to spend 4 hours tracking down a ghost bug without losing my mind."';
            }
            else if (activity === "bike") {
                hobbyModule.classList.add("fast-bg");
                focusBar.style.width = "80%";
                syntaxBar.style.width = "50%";
                mixerOutput.innerText = 'Processing Speed +30%. Adrenaline Loop: Active.\n"Brain cleared. Ready to refactor bulky code into sleek, fast functions."';
            }
            else if (activity === "shroom") {
                focusBar.style.width = "100%";
                syntaxBar.style.width = "100%";
                mixerOutput.innerText = 'Syntax Vision: 100%. Missing Commas Spotted: Instantly.\n"If I can find a porcini hidden under five layers of moss, your codebase bugs stand zero chance."';

                hiddenBug.style.display = "block";
                hiddenBug.style.top = Math.random() * 80 + 10 + "%";
                hiddenBug.style.left = Math.random() * 80 + 10 + "%";
            }
        });
    });

    hiddenBug.addEventListener("click", () => {
        hiddenBug.style.display = "none";
        alert("🐛 Bug caught and fixed! You have excellent attention to detail. Check the console! 😉");
        console.log("%c 🍄 SECRET UNLOCKED: You found the Golden Mushroom! Dev status: Legendary Expert.", "color: #4caf50; font-size: 16px; font-weight: bold;");
    });
});