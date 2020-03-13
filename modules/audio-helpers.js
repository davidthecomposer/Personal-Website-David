 /* jshint esversion: 6 */

 export const nextTrack = (player) => {
    let nextPlayer = {};
    nextPlayer[player].play();
  };

  export const stopOtherAudio = (event) => {
    const playerColumn = document.querySelector('.player-column');  
    const allButtons = playerColumn.querySelectorAll('.audio-buttons');
    const smallButtons = document.querySelectorAll('.small-button');
    let pause = 'images/audio-player/pausebutton.svg';
    let playing = [...allButtons].filter((btn) => {
      return btn.src.includes(pause);
    });
    let smallPlaying = [...smallButtons].filter((btn) => {
      return btn.src.includes(pause);
    });
    if (playing.length > 0) {
      playing[0].click();
    }
    if (smallPlaying.length > 0) {
      smallPlaying[0].click();
    }
  };
