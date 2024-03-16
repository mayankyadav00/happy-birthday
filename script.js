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

        // Additional surprises
        // Example: Confetti animation
        playConfettiAnimation();
        // Example: Hidden audio playback
        playHiddenAudio();
    });

    function playConfettiAnimation() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.background = getRandomColor();
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confettiContainer.appendChild(confetti);
        }
        document.body.appendChild(confettiContainer);
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function playHiddenAudio() {
        const audio = new Audio('happy_birthday_song.mp3');
        audio.play();
    }
});
