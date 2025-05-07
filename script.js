document.addEventListener('DOMContentLoaded', function() {
    const reportButton = document.querySelector('.report-button');
    const deportButton = document.querySelector('.deport-button');
    const hotNumber = document.querySelector('.hot-number');
    const visionNumber = document.querySelector('.vision-number');
    const profileCard = document.querySelector('.profile-card');
    const toggleButton = document.querySelector('.toggle-button');

    let hotCount = 47000;
    let visionCount = 20.5;

    reportButton.addEventListener('click', function() {
        hotCount += 1000;
        hotNumber.textContent = `${(hotCount / 1000).toFixed(1)}k`;
    });

    deportButton.addEventListener('click', function() {
        visionCount += 0.1;
        visionNumber.textContent = `${visionCount.toFixed(1)}%`;
    });

    toggleButton.addEventListener('click', function() {
        profileCard.classList.toggle('profile-card-alt');
    });
});
