 /* jshint esversion: 6 */

 export class Musicsections {
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
 
    retractAnimation(event) {
      event.target.classList.add('retract1');
    }
 
    assignHandlers() {
      this.allBtns[0].style.color = '#00a5a5';
      this.allBtns.forEach((btn) => {
        btn.onclick = () => this.handleSwitch(event);
        btn.onmouseout = () => this.retractAnimation(event);
      });
 
    }
  }