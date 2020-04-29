/* jshint esversion: 6 */

class NewsRow {
  constructor(rowName) {
    this.newsRow = document.querySelector(`.news-row.${rowName}`);
    this.newsExpands = this.newsRow.querySelectorAll(".news-expand");
    this.newsSlotsOne = this.newsRow.querySelectorAll(".news-slot-one");
  }

  handleHover(event) {
    [...this.newsSlotsOne]
      .filter((slot) => {
        return slot.innerText.includes(event.target.innerText);
      })[0]
      .setAttribute("style", "display: inline-block");

    [...this.newsSlotsOne]
      .filter((slot) => {
        return slot.innerText.includes(event.target.innerText) === false;
      })[0]
      .setAttribute("style", "display:none");
  }
  eventHandlersInit() {
    this.newsExpands.forEach((expand) => {
      expand.onmouseover = () => this.handleHover(event);
    });
  }
}

export const createNewsRows = () => {
  const newsRows = document.querySelectorAll(".news-row");
  const newsRowNames = [...newsRows].map((row) => row.classList[1]);

  newsRows.forEach((row) => {
    let newsSpace = {};
    let rowName = `${newsRowNames[newsRowNames.indexOf(row.classList[1])]}`;
    newsSpace[rowName] = new NewsRow(rowName);
    newsSpace[rowName].eventHandlersInit();
  });
};
