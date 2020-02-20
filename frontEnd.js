/* jshint esversion: 6 */
const scenes = document.querySelectorAll('.scene');
const cardNames = [...scenes].map((scene) => scene.classList[1]);
class Card {
    constructor(cardName) {
        this.cardName = cardName;
        this.scene = document.querySelector(`.${cardName}`);
        this.card = this.scene.querySelector('.card');
        this.panelPicture = this.scene.querySelector('.panel-picture');
    }
    flipCard(event) {
        this.card.classList.toggle('is-flipped');
    }
    initEventHandlers() {
        this.panelPicture.setAttribute('style', `background-image: url("images/front-end/${this.cardName}.png")`);
        this.card.onclick = () => this.flipCard(event);
    }
}



cardNames.forEach((name) => {
    let card = `card${cardNames.indexOf(name) + 1}`;
    this[card] = new Card(name);
    this[card].initEventHandlers();
});





/* 
make logic for cards as Class
add all info
make link pages and connect
make navigation sidebar? Or some bavigation system between pages amd apps.
Websites and Apps? 


*/