const videoElements = document.querySelectorAll("video");

videoElements.forEach((video) => {
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
