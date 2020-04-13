/* jshint esversion: 6 */

export class Card {
    constructor(cardName) {
        this.cardName = cardName;
        this.scene = document.querySelector(`.${cardName}`);
        this.card = this.scene.querySelector('.card');
        this.panelTitle = this.card.querySelector('.panel-title');
        this.panelPicture = this.scene.querySelector('.panel-picture');
        this.navigate = this.scene.querySelector('.navigate');
    }

    flipCard(event) {
        if (event.target !== this.navigate) {
            
            this.card.classList.toggle('is-flipped');

        }
    }

    handleNav(event) {
      window.location.assign(`${this.navigate.getAttribute('data-url')}`);
    }

    initEventHandlers() {
        this.panelPicture.setAttribute('style', `background-image: url("images/apps/${this.cardName}.png")`);
        this.card.onclick = () => this.flipCard(event);
        this.navigate.onclick = () => this.handleNav(event);
    }
}

export const createAllCards = () => {
    const nameSpace = {};
   const scenes = document.querySelectorAll('.scene');
   const cardNames = [...scenes].map((scene) => scene.classList[1]);
   cardNames.forEach((name) => {
       let card = `card${cardNames.indexOf(name) + 1}`;
       nameSpace[card] = new Card(name);
       nameSpace[card].initEventHandlers();
   });
};
