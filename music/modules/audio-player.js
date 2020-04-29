/* jshint esversion: 6 */

import { stopOtherAudio } from "./audio-helpers.js";
import { allPlayersArray } from "../index.js";

class AudioPlayer {
  constructor(playerNumber) {
    this.playerColumn = document.querySelector(".player-column");
    this.infoDisplay = document.querySelector(".display-image");
    this.allPlayers = this.playerColumn.querySelectorAll(".audio-player");
    this.player = this.playerColumn.querySelector(`.${playerNumber}`);
    this.playerNumber = playerNumber;
    this.buttons = this.player.querySelector(".audio-buttons");
    this.progressButton = this.player.querySelector(".audio-progress-button");
    this.progressBar = this.player.querySelector(".audio-progress");
    this.audio = this.player.querySelector(".audio-file");
    this.currentPosition = this.player.querySelector(
      ".audio-current-position p"
    );
    this.timeRemaining = this.player.querySelector(".time-remaining-text");
    this.volume = this.player.querySelector(".audio-volume");
    this.volumeBar = this.player.querySelector(".audio-volumeBar");
    this.autoPlay = document.querySelector(".pane-1");
    this.mediaTitle = this.player.classList[1];
    this.progContainer = this.player.querySelector(".prog-button-container");
  }

  /* Gets time info from audio object and translates it to timeRemaining text*/
  getDuration() {
    let time =
      Math.floor(this.audio.duration.toFixed(0)) -
      Math.floor(this.audio.currentTime.toFixed(0));
    let timeRemaining =
      Math.floor(time / 60) +
      ":" +
      (time < 10
        ? `0${time}`
        : time % 60 < 10
        ? `0${time % 60}`
        : time % 60
        ? time % 60
        : "00");
    this.timeRemaining.innerHTML = timeRemaining;
    if (this.audio.duration - this.audio.currentTime === 0) {
      this.buttons.src = "images/audio-player/playbutton.svg";
      this.audio.currentTime = 0;
      this.audio.pause();
    }
  }

  /* Gets time info from audio object, calls getDuration to continuously update, 
    and updates progress bar value and progress button position*/
  getTime() {
    let progressWidth = this.progressBar.clientWidth / 100;
    this.currentPosition.innerHTML =
      Math.floor(this.audio.currentTime.toFixed(0) / 60) +
      ":" +
      (this.audio.currentTime.toFixed(0) < 10
        ? `0${this.audio.currentTime.toFixed(0)}`
        : this.audio.currentTime.toFixed(0) % 60 < 10
        ? `0${this.audio.currentTime.toFixed(0) % 60}`
        : this.audio.currentTime.toFixed(0) % 60
        ? this.audio.currentTime.toFixed(0) % 60
        : "00");
    this.getDuration();
    this.progressBar.value =
      (this.audio.currentTime / this.audio.duration) * 100;
    this.progressButton.style.left = `${
      this.progressBar.value * progressWidth - 4
    }px`;
  }

  /* When user clicks mouse on progress bar, this skips music and object positions to event location*/
  changeLocation(event) {
    let progressWidth = this.progressBar.clientWidth;
    let percent = event.offsetX / event.target.offsetWidth;
    this.progressButton.style.left = `${percent * progressWidth - 4}px`;
    event.target.value = percent * 100;
    this.audio.currentTime = this.audio.duration * percent;
  }

  /* Handles the play/pause button logic*/
  buttonClickHandle(event) {
    let play = "images/audio-player/playbutton.svg";
    let pause = "images/audio-player/pausebutton.svg";

    if (event.target.src.includes(play)) {
      stopOtherAudio(event);
      event.target.src = pause;
      this.audio.play();
      this.infoDisplay.setAttribute(
        "src",
        `images/media-music-display/${this.mediaTitle}.png`
      );
    } else {
      event.target.src = play;
      this.audio.pause();
    }
  }

  /* handles the volume icons and controls*/
  muteVolume(event) {
    let mute = "images/audio-player/volumeMute.svg";
    let volumeIcon = "images/audio-player/volumeIcon.svg";

    if (event.target.src.includes(volumeIcon)) {
      event.target.src = mute;
      this.audio.muted = true;
    } else {
      event.target.src = volumeIcon;
      this.audio.muted = false;
    }
  }

  /* makes the volume bar visible*/

  /* handles the logic to change the volume when moving slider*/
  volumeChange(event) {
    this.audio.volume = event.target.value;
  }

  /* hides the volume bar when leaving the slider area or after 3 seconds */

  handleInfoDisplay(event) {
    this.infoDisplay.setAttribute(
      "src",
      `images/media-music-display/${this.mediaTitle}.png`
    );
  }
  nextPlayer(event) {
    const audioPlayers = document.querySelectorAll(".audio-player");
    const playerNames = [...audioPlayers].map((player) => player.classList[1]);
    let nextIndex = playerNames.indexOf(this.playerNumber) + 1;

    //need a next player variable that increments by 1
    if (this.player.classList[1] === playerNames[playerNames.length - 1]) {
      allPlayersArray.playersArray[0].play();
    } else if (this.player.classList[1].includes(playerNames[0])) {
      setTimeout(function () {
        allPlayersArray.playersArray[1].play();
      }, 1000);

      //Not sure why I need this extra setTimeout. But it doesn't wor without it. Maybe it's loading too fast or something?
    } else {
      allPlayersArray.playersArray[nextIndex].play();
    }
  }
  play() {
    this.buttons.click();
    this.infoDisplay.setAttribute(
      "src",
      `images/media-music-display/${this.mediaTitle}.png`
    );
  }

  playFirstTrack() {
    allPlayersArray.playersArray[0].play();
  }

  initEventHandlers() {
    this.audio.ontimeupdate = () => this.getTime(event);
    this.audio.ondurationchange = () => this.getDuration(event);
    this.buttons.onclick = () => this.buttonClickHandle(event);
    this.progContainer.onclick = () => this.changeLocation(event);
    this.volume.onclick = () => this.muteVolume(event);
    this.volumeBar.oninput = () => this.volumeChange(event);
    this.player.onmouseenter = () => this.handleInfoDisplay(event);
    this.audio.onended = () => this.nextPlayer();
    this.autoPlay.onclick = () => this.playFirstTrack(event);
    // fixes the durations not showing on init issue. Maybe not a permenant fix.
    this.getDuration();
  }
}

export const createAudioPlayers = () => {
  // Large Audio Players

  const audioPlayers = document.querySelectorAll(".audio-player");
  const playerNames = [...audioPlayers].map((player) => player.classList[1]);

  playerNames.forEach((name) => {
    let playerSpace = {};
    let player = `player${playerNames.indexOf(name) + 1}`;
    playerSpace[player] = new AudioPlayer(name);
    playerSpace[player].initEventHandlers();
    allPlayersArray.playersArray.push(playerSpace[player]);
  });
};
