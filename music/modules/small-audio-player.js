/* jshint esversion: 6 */

import {stopOtherAudio} from './audio-helpers.js';


class SmallAudioPlayer {
    constructor(playerNumber) {
      this.player = document.querySelector(`.small-player.${playerNumber}`);
      this.buttons = this.player.querySelector('.small-button');
      this.progressButton = this.player.querySelector('.small-progress-button');
      this.progressBar = this.player.querySelector('.small-progress');
      this.audio = this.player.querySelector('.audio-file');
      this.currentPosition = this.player.querySelector('.audio-current-position p');
      this.timeRemaining = this.player.querySelector('.audio-time-remaining p');
      this.volume = this.player.querySelector('.audio-volume');
      this.volumeBar = this.player.querySelector('.volumeBar-small');
    }
 
    /* Gets time info from audio object and translates it to timeRemaining text*/
    getDuration() {
      let time = Math.floor(this.audio.duration.toFixed(0)) - Math.floor(this.audio.currentTime.toFixed(0));
      this.timeRemaining.innerHTML = Math.floor(time / 60) + ":" + (time < 10 ? `0${time}` : time % 60 < 10 ? `0${time % 60}` : time % 60 ? time % 60 : '00');
      if (this.audio.duration - this.audio.currentTime === 0) {
        this.buttons.src = 'images/audio-player/playbutton.svg';
      }
    }
 
 
    /* Gets time info from audio object, calls getDuration to continuously update, 
    and updates progress bar value and progress button position*/
    getTime() {
      this.currentPosition.innerHTML = Math.floor(this.audio.currentTime.toFixed(0) / 60) + ":" + (this.audio.currentTime.toFixed(0) < 10 ? `0${this.audio.currentTime.toFixed(0)}` : this.audio.currentTime.toFixed(0) % 60 < 10 ? `0${this.audio.currentTime.toFixed(0) % 60}` : this.audio.currentTime.toFixed(0) % 60 ? this.audio.currentTime.toFixed(0) % 60 : '00');
      this.getDuration();
      this.progressBar.value = (this.audio.currentTime / this.audio.duration) * 100;
      this.progressButton.style.marginLeft = `${(this.progressBar.value) - 128}px`;
    }
 
    /* When user clicks mouse on progress bar, this skips music and object positions to event location*/
    changeLocation(event) {
      let percent = event.offsetX / event.target.offsetWidth;
      this.progressButton.style.marginLeft = `${(percent) - 128}px`;
      event.target.value = percent * 100;
      this.audio.currentTime = this.audio.duration * percent;
    }
 
    /* Handles the play/pause button logic*/
    buttonClickHandle(event) {
      let play = 'images/audio-player/playbutton.svg';
      let pause = 'images/audio-player/pausebutton.svg';
      if (event.target.src.includes(play)) {
        stopOtherAudio(event);
        event.target.src = pause;
        this.audio.play();
      } else {
        event.target.src = play;
        this.audio.pause();
      }
    }
 
    /* handles the volume icons and controls*/
    muteVolume(event) {
      let mute = 'images/audio-player/volumeMute.svg';
      let volumeIcon = 'images/audio-player/volumeIconWhite.svg';
 
      if (event.target.src.includes(volumeIcon)) {
        event.target.src = mute;
        this.audio.muted = true;
      } else {
        event.target.src = volumeIcon;
        this.audio.muted = false;
      }
    }
 
    /* makes the volume bar visible*/
    volumeBarInit() {
      this.volumeBar.style.visibility = 'visible';
    }
 
    /* handles the logic to change the volume when moving slider*/
    volumeChange(event) {
      this.audio.volume = event.target.value;
    }
 
    /* hides the volume bar when leaving the slider area or after 3 seconds */
    volumeBarHide(event) {
      if (event.target === this.volume) {
        setTimeout(() => {
          this.volumeBar.style.visibility = 'hidden';
        }, 3000);
      } else {
        this.volumeBar.style.visibility = 'hidden';
      }
    }
    initEventHandlers() {
      this.buttons.onclick = () => this.buttonClickHandle(event);
      this.audio.ontimeupdate = () => this.getTime(event);
      this.audio.ondurationchange = () => this.getDuration(event);
      this.progressBar.onclick = () => this.changeLocation(event);
      this.volume.onclick = () => this.muteVolume(event);
      this.volume.onmouseover = () => this.volumeBarInit(event);
      this.volumeBar.oninput = () => this.volumeChange(event);
      this.volume.onmouseleave = () => this.volumeBarHide(event);
      this.volumeBar.onmouseleave = () => this.volumeBarHide(event);
      this.volumeBar.onmouseover = () => this.volumeBarInit(event);
       // fixes the durations not showing on init issue. Maybe not a permenant fix.
      this.getDuration();
    }
     
      
  }

  export const createSmallAudioPlayers = () => {

    //Small Audio players
 
    const smallAudioPlayers = document.querySelectorAll('.small-player');
    const smallPlayerNames = [...smallAudioPlayers].map((player) => player.classList[1]);
 
    smallPlayerNames.forEach((name) => {
      let playerSpace = {};
      let player = `smallPlayer${smallPlayerNames.indexOf(name) + 1}`;
      playerSpace[player] = new SmallAudioPlayer(name);
      playerSpace[player].initEventHandlers();
    });
     
  };