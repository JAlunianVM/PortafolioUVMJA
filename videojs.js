const video = document.getElementById('miVideo');
const btn = document.getElementById('playPauseBtn');

btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        btn.textContent = 'Pause';
    } else {
        video.pause();
        btn.textContent = 'Play';
    }
});
