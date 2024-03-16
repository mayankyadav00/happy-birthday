// script.js
document.addEventListener('DOMContentLoaded', function () {
    const surpriseButton = document.getElementById('surpriseButton');

    // Array of surprise messages
    const surpriseMessages = [
        "Surprise 1: 🎁",
        "Surprise 2: 🎉",
        "Surprise 3: 🎈",
        // Add more surprise messages as needed
    ];

    surpriseButton.addEventListener('click', function () {
        // Pick a random surprise message
        const randomIndex = Math.floor(Math.random() * surpriseMessages.length);
        const randomSurprise = surpriseMessages[randomIndex];

        // Show the surprise message
        alert(randomSurprise);
    });
});
