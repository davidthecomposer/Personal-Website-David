 /* jshint esversion: 6 */
 
 export class NewsRow {
    constructor(rowName) {
 
      this.newsRow = document.querySelector(`.news-row.${rowName}`);
      this.newsExpands = this.newsRow.querySelectorAll('.news-expand');
      this.newsSlotsOne = this.newsRow.querySelectorAll('.news-slot-one');
    }
 
    handleHover(event) {
 
      [...this.newsSlotsOne].filter((slot) => {
        return slot.innerText.includes(event.target.innerText);
      })[0].setAttribute('style', 'display: inline-block');
 
      [...this.newsSlotsOne].filter((slot) => {
        return slot.innerText.includes(event.target.innerText) === false;
      })[0].setAttribute('style', 'display:none');
 
    }
    eventHandlersInit() {
      this.newsExpands.forEach((expand) => {
        expand.onmouseover = () => this.handleHover(event);
      });
 
    }
  }