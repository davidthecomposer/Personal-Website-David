/* jshint esversion: 6 */
const scenes = document.querySelectorAll('.scene');
const cardNames = [...scenes].map((scene) => scene.classList[1]);
const nav = document.querySelector('nav');
const pageNav = nav.querySelectorAll('.header-tab');
class Card {
    constructor(cardName) {
        this.cardName = cardName;
        this.scene = document.querySelector(`.${cardName}`);
        this.card = this.scene.querySelector('.card');
        this.panelPicture = this.scene.querySelector('.panel-picture');
        this.navigate = this.scene.querySelector('.navigate');;
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
        this.panelPicture.setAttribute('style', `background-image: url("images/front-end/${this.cardName}.png")`);
        this.card.onclick = () => this.flipCard(event);
        this.navigate.onclick = () => this.handleNav(event);
    }
}



cardNames.forEach((name) => {
    let card = `card${cardNames.indexOf(name) + 1}`;
    this[card] = new Card(name);
    this[card].initEventHandlers();
});

const handleTabLeave = (e) => {
    e.target.nextElementSibling.classList.add('retract');
};


pageNav.forEach((btn) => {
    btn.addEventListener('mouseout', handleTabLeave);
});



/* 

add all info
make link pages and connect
make navigation sidebar? Or some bavigation system between pages amd apps.
responsive design fixes for main sites

*/