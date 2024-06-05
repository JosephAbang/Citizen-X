document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav ul li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.querySelector('span').style.opacity = '1';
        });
        link.addEventListener('mouseleave', () => {
            link.querySelector('span').style.opacity = '0';
        });
    });

    const electionDate = new Date('June 1, 2026').getTime();
    const countdownTimer = document.getElementById('countdown-timer');

    setInterval(() => {
        const now = new Date().getTime();
        const distance = electionDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownTimer);
            countdownTimer.innerHTML = "Election Day!";
        }
    }, 1000);
});
