document.addEventListener("DOMContentLoaded", function () {
  (function initPlayVideo() {
    var videoCover = document.querySelector(".how-its-made__video-image");
    var videoPlayerIframe = document.querySelector(
      ".how-its-made__video-player iframe"
    );

    videoCover.addEventListener("click", function () {
      videoCover.style.display = "none";
      videoPlayerIframe.src += "&autoplay=1";
    });
  })();
});
