/* jshint esversion: 6 */

class Musicsections {
  constructor() {
    this.allBtns = document.querySelectorAll(".music-tab-container");
    this.musicSections = document.querySelectorAll(".music-sections");
  }

  handleSwitch(btn) {
    let sectionFilter = [...this.musicSections].filter((section) => {
      // return section.classList[0] !== event.target.innerHTML;
      return btn.innerHTML.includes(section.classList[0]) === false;
    });
    let pressedButton = [...this.musicSections].filter((section) => {
      // return section.classList[0] === event.target.innerHTML;
      return btn.innerHTML.includes(section.classList[0]);
    });
    sectionFilter.forEach((section) => {
      section.classList.add("invisible");
    });

    pressedButton[0].classList.remove("invisible");
    [...this.allBtns].forEach((btn) => {
      btn.firstElementChild.firstElementChild.style.color = "white";
    });

    btn.firstElementChild.firstElementChild.style.color = " #00a5a5";
  }

  retractAnimation(btn) {
    btn.firstElementChild.firstElementChild.nextElementSibling.classList.add(
      "retract1"
    );
  }

  assignHandlers() {
    this.allBtns[0].firstElementChild.firstElementChild.style.color =
      " #00a5a5";
    this.allBtns.forEach((btn) => {
      btn.onclick = () => this.handleSwitch(btn);
      btn.onmouseout = () => this.retractAnimation(btn);
    });
  }
}

export const createMusicSections = () => {
  const musicSections = new Musicsections();
  musicSections.assignHandlers();
};
