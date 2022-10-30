// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const selectHorn = document.getElementById("horn-select");
  const currImage = document.querySelector("img");
  const playButton = document.querySelector("button");
  const currAudio = document.querySelector("audio");

  function changeImage() {
    if (selectHorn.value == "air-horn") {
      currImage.src = "assets/images/air-horn.svg";
    }
    if (selectHorn.value == "car-horn") {
      currImage.src = "assets/images/car-horn.svg"
    }
    if (selectHorn.value == "party-horn") {
      currImage.src = "assets/images/party-horn.svg"
    }
  }

  function changeAudio() {
    if (selectHorn.value == "air-horn") {
      currAudio.src = "assets/audio/air-horn.mp3";
    }
    if (selectHorn.value == "car-horn") {
      currAudio.src = "assets/audio/car-horn.mp3"
    }
    if (selectHorn.value == "party-horn") {
      currAudio.src = "assets/audio/party-horn.mp3"
    }
    currAudio.play();
  }

  selectHorn.addEventListener('change', changeImage);
  playButton.addEventListener('click', changeAudio);


  const volume = document.getElementById("volume");
  const volImg = document.querySelector("div > img");

  function volumeControl() {
    const currVol = volume.value;

    if (currVol == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    }
    if (currVol > 0 && currVol < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    if (currVol >= 33 && currVol < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    if (currVol >= 67) {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
  }
  volume.addEventListener('input', volumeControl);

  function confetti() {
    const jsConfetti = new JSConfetti();
    if (selectHorn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  }
  playButton.addEventListener('click', confetti);

  
}
