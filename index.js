 /* jshint esversion: 6 */

    class SlideShow {
        constructor(showNumber) {
            this.slideShow = document.querySelector("."+ showNumber);
            this.paneTicker = this.slideShow.querySelector('.pane-ticker');
            this.forward = this.slideShow.querySelector('.forward');
            this.backward = this.slideShow.querySelector('.backward');
            this.slideText = this.slideShow.querySelectorAll('.slide-text');
            this.mainImages = this.slideShow.querySelectorAll('.main-images');
            this.slideToggleButton = this.slideShow.querySelector('.slide-toggle-button');
            this.slideEditInactive = this.slideShow.querySelector('.slide-edit-inactive');
            this.paneContainer = this.slideShow.querySelector('.pane-container');
            this.textContainer = this.slideShow.querySelector('.text-container');
            this.pauseActive = this.slideShow.querySelector('.pause');
            this.slideAnimations = ['fade-in','fade-in','fade-in'];
            this.textAnimations = ['center-long','top-right','center-short'];
            this.panes = document.querySelectorAll('.pane');
            this.timerOn;
            
        }
      
        // Creates the first (green) tick that is active.
        createFirstTick() {
            let newFirstTick = document.createElement('img');
            newFirstTick.className = 'pane-tick';
            newFirstTick.src = 'images/slideshow/activePane.svg';
            this.paneTicker.appendChild(newFirstTick);
        }
    
        //creates one tick as a helper function to paneTickInit. 
        createTick() {
            let newTick = document.createElement('img');
            newTick.classList.add('pane-tick');
            newTick.src = 'images/slideshow/inactivePane.svg';
            this.paneTicker.appendChild(newTick);
        }
    
        //Calls either function above for whatever this.panes exist in HTML. 
        paneTickInit() {
           
            this.panes.forEach((pane) => {
                if (pane === this.panes[0]) {
                    this.createFirstTick();
                    pane.classList.add('active-panel');
                } else {
                    this.createTick();
                    pane.classList.add('invisible-panel');
                }
            });
        }
    
        //Progresses forward through this.panes when clicking forward button.
        nextPane() {
            
            this.slideText = this.slideShow.querySelectorAll('.slide-text');
            const activeIndex = [...this.panes].findIndex(pane => pane.classList.value.includes('active-panel'));
            const lastIndex = this.panes.length - 1;
            const paneTick = this.slideShow.querySelectorAll('.pane-tick');
    
            // Special case of last slide moving back to first
            if (this.panes[activeIndex] === this.panes[lastIndex]) {
                this.panes[lastIndex].classList.remove('active-panel');
                this.panes[lastIndex].classList.add('invisible-panel');
                this.panes[0].classList.remove('invisible-panel');
                this.panes[0].classList.add('active-panel');
                this.slideText[lastIndex].classList.remove(this.textAnimations[lastIndex]);
                this.slideText[lastIndex].classList.add('invisible-text');
                this.slideText[0].classList.remove('invisible-text');
                this.slideText[0].classList.add(this.textAnimations[0]);
                paneTick[lastIndex].setAttribute('src', "images/slideshow/inactivePane.svg");
                paneTick[0].setAttribute('src', "images/slideshow/activePane.svg");
                this.mainImages[lastIndex].classList.remove(this.slideAnimations[lastIndex]);
                this.mainImages[lastIndex].classList.add('invisible-panel');
                this.mainImages[0].classList.remove('invisible-panel');
                this.mainImages[0].classList.add(this.slideAnimations[0]);
    
                // all other slide movements
            } else {
                this.panes[activeIndex].classList.remove('active-panel');
                this.panes[activeIndex].classList.add('invisible-panel');
                this.panes[activeIndex + 1].classList.remove('invisible-panel');
                this.panes[activeIndex + 1].classList.add('active-panel');
                this.slideText[activeIndex].classList.add('invisible-text');
                this.slideText[activeIndex].classList.remove(this.textAnimations[activeIndex]);
                this.slideText[activeIndex + 1].classList.remove('invisible-text');
                this.slideText[activeIndex + 1].classList.add(this.textAnimations[activeIndex + 1]);
                paneTick[activeIndex].setAttribute('src', "images/slideshow/inactivePane.svg");
                paneTick[activeIndex + 1].setAttribute('src', "images/slideshow/activePane.svg");
                this.mainImages[activeIndex].classList.remove(this.slideAnimations[activeIndex]);
                this.mainImages[activeIndex].classList.add('invisible-panel');
                this.mainImages[activeIndex + 1].classList.remove('invisible-panel');
                this.mainImages[activeIndex + 1].classList.add(this.slideAnimations[activeIndex + 1]);
            }
        }
    
        //Progresses backward through this.panes when clicking backward button.
        previousPane() {
            this.slideText = this.slideShow.querySelectorAll('.slide-text');
            const activeIndex = [...this.panes].findIndex(pane => pane.classList.value.includes('active-panel'));
            const lastIndex = this.panes.length - 1;
            const paneTick = this.slideShow.querySelectorAll('.pane-tick');
    
            //special case of first slide moving backward to last
            if (this.panes[activeIndex] === this.panes[0]) {
                this.panes[0].classList.remove('active-panel');
                this.panes[0].classList.add('invisible-panel');
                this.slideText[0].classList.remove(this.textAnimations[0]);
                this.slideText[0].classList.add('invisible-text');
                this.panes[lastIndex].classList.remove('invisible-panel');
                this.panes[lastIndex].classList.add('active-panel');
                this.slideText[lastIndex].classList.remove('invisible-text');
                this.slideText[lastIndex].classList.add(this.textAnimations[lastIndex]);
                paneTick[0].setAttribute('src', "images/slideshow/inactivePane.svg");
                paneTick[lastIndex].setAttribute('src', "images/slideshow/activePane.svg");
                this.mainImages[0].classList.remove(this.slideAnimations[0]);
                this.mainImages[0].classList.add('invisible-panel');
                this.mainImages[lastIndex].classList.remove('invisible-panel');
                this.mainImages[lastIndex].classList.add(this.slideAnimations[lastIndex]);
                //all other slide movements
            } else {
                this.panes[activeIndex].classList.remove('active-panel');
                this.panes[activeIndex].classList.add('invisible-panel');
                this.panes[activeIndex - 1].classList.remove('invisible-panel');
                this.panes[activeIndex - 1].classList.add('active-panel');
                this.slideText[activeIndex].classList.remove(this.textAnimations[activeIndex]);
                this.slideText[activeIndex].classList.add('invisible-text');
                this.slideText[activeIndex - 1].classList.remove('invisible-text');
                this.slideText[activeIndex - 1].classList.add(this.textAnimations[activeIndex - 1]);
                paneTick[activeIndex].setAttribute('src', "images/slideshow/inactivePane.svg");
                paneTick[activeIndex - 1].setAttribute('src', "images/slideshow/activePane.svg");
                this.mainImages[activeIndex].classList.remove(this.slideAnimations[activeIndex]);
                this.mainImages[activeIndex].classList.add('invisible-panel');
                this.mainImages[activeIndex - 1].classList.remove('invisible-panel');
                this.mainImages[activeIndex - 1].classList.add(this.slideAnimations[activeIndex - 1]);
            }
        }
    
    
        autoPlayControl(event) {
            if (event === undefined) {
              this.timerOn = setInterval(() => {this.nextPane();}, Number(10000));
              console.log('this option');
            } else if (event.target.getAttribute('src') === 'images/slideshow/pause.svg') {
                clearInterval(this.timerOn);
                event.target.setAttribute('src', 'images/slideshow/play.svg');
                console.log('stopped');
            } else {
                this.timerOn = setInterval(() => {this.nextPane();}, Number(10000));
                event.target.setAttribute('src', 'images/slideshow/pause.svg');
            }
    
        }
        
    
        initHandlers() {
            
            this.paneTickInit();
            this.autoPlayControl();
            this.forward.onclick = () => this.nextPane();
            this.backward.onclick = () => this.previousPane(event);
            this.pauseActive.onclick = () => this.autoPlayControl(event);
        }
    
    
    
    }
    
    
    
    class AudioPlayer {
      constructor(playerNumber) {
        this.playerColumn = document.querySelector('.player-column');
        this.player = this.playerColumn.querySelector(`.${playerNumber}`);
        this.buttons = this.player.querySelector('.audio-buttons');
        this.progressButton = this.player.querySelector('.audio-progress-button');
        this.progressBar = this.player.querySelector('.audio-progress');
        this.audio = this.player.querySelector('.audio-file');
        this.currentPosition = this.player.querySelector('.audio-current-position p');
        this.timeRemaining = this.player.querySelector('.audio-time-remaining p');
        this.volume = this.player.querySelector('.audio-volume');
        this.volumeBar = this.player.querySelector('.audio-volumeBar');
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
        if (event.target.src.includes(play)) {
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
  
      initEventHandlers() {
        this.buttons.onclick = () => this.buttonClickHandle(event);
        this.audio.ontimeupdate = () =>  this.getTime(event);
        this.audio.ondurationchange = () => this.getDuration(event);
        this.progressBar.onclick = () => this.changeLocation(event);
        this.volume.onclick = () => this.muteVolume(event);
        this.volumeBar.oninput = () => this.volumeChange(event);
       
       
      }
    }
    
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
        this.audio.ontimeupdate = () =>  this.getTime(event);
        this.audio.ondurationchange = () => this.getDuration(event);
        this.progressBar.onclick = () => this.changeLocation(event);
        this.volume.onclick = () => this.muteVolume(event);
        this.volume.onmouseover = () => this.volumeBarInit(event);
        this.volumeBar.oninput = () => this.volumeChange(event);
        this.volume.onmouseleave = () => this.volumeBarHide(event);
        this.volumeBar.onmouseleave = () => this.volumeBarHide(event);
        this.volumeBar.onmouseover = () => this.volumeBarInit(event);
      }
    }
    
    class Musicsections {
         constructor() {
           this.allBtns = document.querySelectorAll('.music-tab-button');
           this.musicSections = document.querySelectorAll('.music-sections');
         }

         handleSwitch(event) {
           let sectionFilter = [...this.musicSections].filter((section) => {
             return section.classList[0] !== event.target.innerHTML;
           });
           let pressedButton = [...this.musicSections].filter((section) => {
            return section.classList[0] === event.target.innerHTML;
          });
           sectionFilter.forEach((section) => {
             section.classList.add('invisible');
             
           });

           pressedButton[0].classList.remove('invisible');
          [...this.allBtns].forEach((btn) => {
           btn.style.color = 'white';

          });
          event.target.style.color = '#00a5a5';
         }
          
         assignHandlers() {
            this.allBtns[0].style.color = '#00a5a5';
            this.allBtns.forEach((btn) => {
              btn.onclick = () => this.handleSwitch(event);
            });
          
         }
    }
    
    const audioPlayers = document.querySelectorAll('.audio-player');
    const playerNames = [...audioPlayers].map((player) => player.classList[1]);
    const smallAudioPlayers = document.querySelectorAll('.small-player');
    const smallPlayerNames = [...smallAudioPlayers].map((player) => player.classList[1]);

    playerNames.forEach((name) => {
        let player = `player${playerNames.indexOf(name) + 1}`;
        this[player] = new AudioPlayer(name);
        this[player].initEventHandlers();
    });

    smallPlayerNames.forEach((name) => {
      let player = `player${smallPlayerNames.indexOf(name) + 1}`;
      this[player] = new SmallAudioPlayer(name);
      this[player].initEventHandlers();
  });
    

    let firstShow = new SlideShow('one');
    firstShow.initHandlers();    
  
    let musicSections = new Musicsections();
    musicSections.assignHandlers();
    
    // Make outline and a few examples of pieces that I have for concert music 
    // Look up news sections of composer things online
    // Blog - Create a blog post section.
    // contact info, questions, etc. 
