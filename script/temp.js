document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date('2022-05-11T10:00:00'); // Data de início do relacionamento

    function updateTimer() {
        const now = new Date();
        let diff = Math.floor((now - startDate) / 1000); // diferença em segundos

        const years = Math.floor(diff / (365.25 * 24 * 60 * 60));
        diff -= years * 365.25 * 24 * 60 * 60;
        const months = Math.floor(diff / (30.44 * 24 * 60 * 60));
        diff -= months * 30.44 * 24 * 60 * 60;
        const days = Math.floor(diff / (24 * 60 * 60));
        diff -= days * 24 * 60 * 60;
        const hours = Math.floor(diff / (60 * 60));
        diff -= hours * 60 * 60;
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;

        document.getElementById('years').textContent = years;
        document.getElementById('months').textContent = months;
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateTimer, 1000); // Atualiza o temporizador a cada segundo
});
