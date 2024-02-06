document.addEventListener("DOMContentLoaded", function () {
    const fireworks = document.querySelector('.fireworks');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        fireworks.appendChild(particle);

        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        const x = Math.random() * innerWidth - innerWidth / 2;
        const y = Math.random() * innerHeight - innerHeight / 2;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const duration = Math.random() * 1 + 1;
        particle.style.animation = `fireworksAnimation ${duration}s ease-out forwards`;
        particle.style.backgroundColor = getRandomColor();

        particle.addEventListener('animationend', () => {
            fireworks.removeChild(particle);
            setTimeout(createParticle, Math.random() * 1500); // Ajoutez une nouvelle particule après un délai aléatoire
        });
    }

    function launchFirework() {
        const count = Math.random() * 50 + 50;
        for (let i = 0; i < count; i++) {
            createParticle(); // Lancez des particules sans délai initial
        }
    }

    launchFirework();
});
