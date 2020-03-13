 /* jshint esversion: 6 */

import {nextTrack, stopOtherAudio} from './audio-helpers.js';

export class AudioPlayer {
    constructor(playerNumber) {
      this.playerColumn = document.querySelector('.player-column');
      this.infoDisplay = document.querySelector('.display-window');
      this.allPlayers = this.playerColumn.querySelectorAll('.audio-player');
      this.player = this.playerColumn.querySelector(`.${playerNumber}`);
      
      
      this.buttons = this.player.querySelector('.audio-buttons');
      this.progressButton = this.player.querySelector('.audio-progress-button');
      this.progressBar = this.player.querySelector('.audio-progress');
      this.audio = this.player.querySelector('.audio-file');
      this.currentPosition = this.player.querySelector('.audio-current-position p');
      this.timeRemaining = this.player.querySelector('.audio-time-remaining p');
      this.volume = this.player.querySelector('.audio-volume');
      this.volumeBar = this.player.querySelector('.audio-volumeBar');
      this.mediaTitle = this.player.classList[1];
 
    }
 
    /* Gets time info from audio object and translates it to timeRemaining text*/
    getDuration() {
      let time = Math.floor(this.audio.duration.toFixed(0)) - Math.floor(this.audio.currentTime.toFixed(0));
      this.timeRemaining.innerHTML = Math.floor(time / 60) + ":" + (time < 10 ? `0${time}` : time % 60 < 10 ? `0${time % 60}` : time % 60 ? time % 60 : '00');
      if (this.audio.duration - this.audio.currentTime === 0) {
        this.buttons.src = 'images/audio-player/playbutton.svg';
        this.audio.currentTime = 0;
        this.audio.pause();
      }
    }
 
 
    /* Gets time info from audio object, calls getDuration to continuously update, 
    and updates progress bar value and progress button position*/
    getTime() {
      this.currentPosition.innerHTML = Math.floor(this.audio.currentTime.toFixed(0) / 60) + ":" + (this.audio.currentTime.toFixed(0) < 10 ? `0${this.audio.currentTime.toFixed(0)}` : this.audio.currentTime.toFixed(0) % 60 < 10 ? `0${this.audio.currentTime.toFixed(0) % 60}` : this.audio.currentTime.toFixed(0) % 60 ? this.audio.currentTime.toFixed(0) % 60 : '00');
      this.getDuration();
      this.progressBar.value = (this.audio.currentTime / this.audio.duration) * 100;
      this.progressButton.style.marginLeft = `${(this.progressBar.value * 2) - 110}px`;
 
    }
 
    /* When user clicks mouse on progress bar, this skips music and object positions to event location*/
    changeLocation(event) {
      let percent = event.offsetX / event.target.offsetWidth;
      this.progressButton.style.marginLeft = `${(percent * 200) - 110}px`;
      event.target.value = percent * 100;
      this.audio.currentTime = this.audio.duration * percent;
    }
 
    /* Handles the play/pause button logic*/
    buttonClickHandle(event) {
      let play = 'images/audio-player/playbutton.svg';
      let pause = 'images/audio-player/pausebutton.svg';
      event.target.parentElement.parentElement.parentElement.parentElement.classList[1];
 
 
      if (event.target.src.includes(play)) {
        stopOtherAudio(event);
        event.target.src = pause;
        this.audio.play();
        this.infoDisplay.setAttribute('style', `background-image: url('images/media-music-display/${this.mediaTitle}.svg');`);
 
      } else {
        event.target.src = play;
        this.audio.pause();
      }
 
 
    }
 
    /* handles the volume icons and controls*/
    muteVolume(event) {
      let mute = 'images/audio-player/volumeMute.svg';
      let volumeIcon = 'images/audio-player/volumeIcon.svg';
 
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
 
 
      this.infoDisplay.setAttribute('style', `background-image: url('images/media-music-display/${this.mediaTitle}.svg');`);
 
    }
    nextPlayer(event) {
      let player = `player${playerNames.indexOf(this.player.classList[1]) + 2}`;
      //need a next player variable that increments by 1
      if (this.player.classList[1] === playerNames[playerNames.length - 1]) {
        player1.play();
      } else {
        nextTrack(player);
      }
    }
 
    play() {
      this.buttons.click();
      this.infoDisplay.setAttribute('style', `background-image: url('images/media-music-display/${this.mediaTitle}.svg');`);
    }
 
 
 
    initEventHandlers() {
      this.buttons.onclick = () => this.buttonClickHandle(event);
      this.audio.ontimeupdate = () => this.getTime(event);
      this.audio.ondurationchange = () => this.getDuration(event);
      this.progressBar.onclick = () => this.changeLocation(event);
      this.volume.onclick = () => this.muteVolume(event);
      this.volumeBar.oninput = () => this.volumeChange(event);
      this.player.onmouseenter = () => this.handleInfoDisplay(event);
      this.audio.onended = () => this.nextPlayer(event);
    }
  }