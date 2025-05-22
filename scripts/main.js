const playButton = document.getElementById('playButton');
const playFrame = document.getElementById('playFrame');

playButton.addEventListener('click', () => {
    playFrame.innerHTML = `
      <iframe
        class="w-full h-full"
        src="https://www.youtube.com/embed/YOUTUBE_ID?autoplay=1"
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
});