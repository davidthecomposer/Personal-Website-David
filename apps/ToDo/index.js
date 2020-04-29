/* jshint esversion: 8 */

class Task {
  constructor() {
    this.toDoContainer = document.querySelector(".todo-container");
    this.currentDate = new Date(Date.now());
    this.alarmTimer;
    this.alarmSound = new Audio("audio/buzz1.mp3");
    this.taskSuper = `
            <div class="task-container">
                <div class="circle"></div>
                <input type="text" value='' class="input">
                <div class="options">
                    <div class="info"></div>
                    <div class="alarm"></div>
                    <div class="delete"></div>
                </div>
            </div>
            <div class="task-extras">
                <textarea name="info" id="info" class = "info-pane"cols="30" rows="10"></textarea>
                <div class="alarm-options">
                    <input type="date" value='${this.currentDate
                      .toISOString()
                      .substring(0, 10)}' class="date">
                    <input type="time" value="00:00" class="time">
                    <div class="alarm-row-toggle"></div>
                </div>
            </div>
     `;
  }

  handleCircle(event) {
    let filledCircle = `url('images/filled-circle.svg') no-repeat`;
    let emptyCircle = `url('images/empty-circle.svg') no-repeat`;
    if (
      event.target.style.background.includes("empty") ||
      event.target.style.background === ""
    ) {
      event.target.style.background = filledCircle;
      event.target.parentElement.children[1].style.opacity = "0.2";
      event.target.parentElement.children[2].style.opacity = "0.2";
    } else {
      event.target.style.background = emptyCircle;
      event.target.parentElement.children[1].style.opacity = "1";
      event.target.parentElement.children[2].style.opacity = "1";
    }
  }

  toggleAlarm(event, inputDate, inputTime, thisAlarm) {
    let alarmToggleOn = `url('images/alarm-row-on.svg') no-repeat`;
    let alarmToggleOff = `url('images/alarm-row-off.svg') no-repeat`;

    if (
      event.target.style.background.includes("off") ||
      event.target.style.background === ""
    ) {
      event.target.style.background = alarmToggleOn;
      inputDate.disabled = false;
      inputTime.disabled = false;
      this.handleCheckTime(inputDate, inputTime, thisAlarm);
    } else {
      event.target.style.background = alarmToggleOff;
      inputDate.disabled = true;
      inputTime.disabled = true;
      this.unHandleCheckTime();
      if (this.alarmSound.currentTime) {
        this.alarmSound.pause();
        thisAlarm.classList.remove("alarm-animation");
      }
    }
  }

  handleInfo(event) {
    let inactiveInfo = `url('images/info.svg') no-repeat`;
    let activeInfo = `url('images/info-active.svg') no-repeat`;
    let taskExtras = event.target.parentElement.parentElement.parentElement.querySelector(
      ".task-extras"
    );
    let infoPane = taskExtras.querySelector(".info-pane");
    let taskContainer = event.target.parentElement.parentElement;
    taskExtras.classList.remove("alarm-slide");
    taskExtras.classList.remove("alarm-hide");

    if (event.target.style.background.includes("active")) {
      taskExtras.classList.remove("pane-slide");
      taskExtras.classList.add("pane-hide");
      event.target.style.background = inactiveInfo;
      setTimeout(() => {
        taskExtras.style.display = "none";
        infoPane.style.display = "none";
        taskContainer.style.marginBottom = "1rem";
      }, 125);
    } else {
      taskExtras.classList.remove("pane-hide");
      taskExtras.classList.add("pane-slide");
      event.target.style.background = activeInfo;
      taskExtras.style.display = "flex";
      infoPane.style.display = "flex";
      taskContainer.style.marginBottom = "0";
      infoPane.focus();
    }
  }

  initAlarm(thisAlarm) {
    this.unHandleCheckTime();
    thisAlarm.classList.add("alarm-animation");
    this.alarmSound.loop = true;
    this.alarmSound.play();
  }

  handleCheckTime(inputDate, inputTime, thisAlarm) {
    this.alarmTimer = setInterval(() => {
      let todaysDate = new Date();
      let minutes =
        todaysDate.getMinutes() < 10
          ? `0${todaysDate.getMinutes()}`
          : todaysDate.getMinutes();
      let hours =
        todaysDate.getHours() < 10
          ? `0${todaysDate.getHours()}`
          : todaysDate.getHours();
      let bigTime = todaysDate.toISOString().substring(0, 10);
      let currentDateAndTime = `${bigTime} ${hours}:${minutes}`;
      let alarmDateAndTime = `${inputDate.value} ${inputTime.value}`;

      if (currentDateAndTime === alarmDateAndTime) {
        this.initAlarm(thisAlarm);
      }
    }, 1000);
  }

  unHandleCheckTime() {
    clearInterval(this.alarmTimer);
  }

  handleAlarm(event) {
    let inactiveAlarm = `url('images/alarm-off.svg') no-repeat`;
    let activeAlarm = `url('images/alarm-on.svg') no-repeat`;
    let taskContainer = event.target.parentElement.parentElement;
    let taskExtras =
      event.target.parentElement.parentElement.nextElementSibling;
    let alarmOptions = taskExtras.querySelector(".alarm-options");
    let toggleTheAlarm = taskExtras.querySelector(".alarm-row-toggle");
    taskExtras.classList.remove("pane-slide");
    taskExtras.classList.remove("pane-hide");

    // If the alarm on/off toggle is 'off" or if it has no value then:
    if (
      toggleTheAlarm.style.background.includes("off") ||
      toggleTheAlarm.style.background === ""
    ) {
      //If the alarm bell icon is active (meaning the alarm slide is down) then it slides it back up
      if (event.target.style.background.includes("on")) {
        event.target.style.background = inactiveAlarm;
        taskExtras.classList.remove("alarm-slide");
        taskExtras.classList.add("alarm-hide");
        taskExtras.style.display = "none";
        alarmOptions.style.display = "none";
        taskContainer.style.marginBottom = "1rem";

        //if the alarm slide is not down then
      } else {
        event.target.style.background = activeAlarm;
        taskExtras.classList.remove("alarm-hide");
        taskExtras.classList.add("alarm-slide");
        taskExtras.style.display = "flex";
        alarmOptions.style.display = "flex";
        taskContainer.style.marginBottom = "0";
      }
    } else {
      //If the alarm on/off toggle is on already
      if (
        alarmOptions.style.display === "none" ||
        alarmOptions.style.display === ""
      ) {
        //If the alarm Options slide is closed
        taskExtras.classList.remove("alarm-hide");
        taskExtras.classList.add("alarm-slide");
        alarmOptions.style.display = "flex";
        taskExtras.style.display = "flex";
        taskContainer.style.marginBottom = "0";
      } else {
        //if the alarm options slide is open

        taskExtras.classList.remove("alarm-slide");
        taskExtras.classList.add("alarm-hide");
        alarmOptions.style.display = "none";
        taskExtras.style.display = "none";
        taskContainer.style.marginBottom = "1rem";
      }
    }
  }

  handleDelete(event) {
    const taskSupers = document.querySelectorAll(".task-super");

    if (taskSupers.length > 1) {
      let thisTask = event.target.parentElement.parentElement.parentElement;
      thisTask.remove();
    }
  }

  useEnter(event) {
    if (event.keyCode === 13) {
      if (event.target.value) {
        event.target.blur();
        event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].focus();
      }
    }
  }

  appendRow(taskData) {
    const taskSupers = document.querySelectorAll(".task-super");
    let newDiv = document.createElement("div");
    newDiv.classList.add("task-super");
    newDiv.innerHTML = this.taskSuper;
    this.toDoContainer.appendChild(newDiv);
    newDiv.classList.add(`${taskSupers.length}`);
    const name = `task-${newDiv.classList[1]}`;
    let thisCircle = newDiv.querySelector(".circle");
    let thisInfo = newDiv.querySelector(".info");
    let thisAlarm = newDiv.querySelector(".alarm");
    let thisDelete = newDiv.querySelector(".delete");
    let thisInput = newDiv.querySelector(".input");
    let thisAlarmToggle = newDiv.querySelector(".alarm-row-toggle");
    let inputDate = newDiv.querySelector(".date");
    let inputTime = newDiv.querySelector(".time");
    thisAlarmToggle.style.background = `url('images/alarm-row-off.svg') no-repeat`;
    thisCircle.addEventListener("click", this.handleCircle);
    thisInfo.addEventListener("click", this.handleInfo);
    thisAlarm.addEventListener("click", this.handleAlarm);
    thisDelete.addEventListener("click", this.handleDelete);
    thisInput.addEventListener("keydown", this.useEnter);
    thisInput.addEventListener("blur", this.handleNewRow);
    thisAlarmToggle.onclick = () =>
      this.toggleAlarm(event, inputDate, inputTime, thisAlarm);
    inputDate.disabled = true;
    inputTime.disabled = true;
  }

  handleNewRow(event) {
    const taskSupers = document.querySelectorAll(".task-super");
    let taskSuper = event.target.parentElement.parentElement;
    // console.log([...taskSupers]);
    // console.log([...taskSupers].indexOf(taskSuper));
    if (
      [...taskSupers].indexOf(taskSuper) === taskSupers.length - 1 &&
      event.target.value !== ""
    ) {
      let newTaskName = `task${taskSupers.length}`;
      this[newTaskName] = new Task(newTaskName);
      this[newTaskName].appendRow();
    }
  }
}

const createTasks = () => {
  let allItems = [];
  let names = [];
  //    console.log(allItems);
  for (var i = 0; i < localStorage.length; i++) {
    allItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    names.push(`task-${i}`);
  }
  const sortedItems = allItems.sort((a, b) => a.thisName - b.thisName);
  // console.log(sortedItems);
  if (sortedItems.length > 0) {
    names.forEach((name) => {
      let taskData = sortedItems[Number(name.split("-")[1])];
      this[name] = new Task();
      this[name].appendRow(taskData);

      //const taskMaster = querySelectorAll for .task-super and find taskSupers.length - 1 for latest task
      //taskMaster.querySelector
      const allTasks = document.querySelectorAll(".task-super");
      const taskMaster = [...allTasks][allTasks.length - 1];

      let thisCircle = taskMaster.querySelector(".circle");
      let thisAlarm = taskMaster.querySelector(".alarm");
      let thisInput = taskMaster.querySelector(".input");
      let thisAlarmToggle = taskMaster.querySelector(".alarm-row-toggle");
      let inputDate = taskMaster.querySelector(".date");
      let inputTime = taskMaster.querySelector(".time");
      let textArea = taskMaster.querySelector(".info-pane");

      thisInput.value = taskData.taskName;
      textArea.value = taskData.taskNotes;
      inputDate.value = taskData.alarmDate;
      inputTime.value = taskData.alarmTime;

      if (taskData.circleStateOff === false) {
        // console.log(thisCircle);
        thisCircle.click();
      }
      if (taskData.alarmStateOff === false) {
        thisAlarmToggle.click();
        thisAlarm.style.background = `url('images/alarm-on.svg') no-repeat`;
      }
    });
  } else {
    let task = new Task();
    task.appendRow();
  }
  // const taskSupers = document.querySelectorAll('.task-super');

  // taskSupers.forEach((task) => {
  //     console.log(task.classList);
  // });
};

const updateLocalInfo = () => {
  localStorage.clear();
  const allTasks = [...document.querySelectorAll(".task-super")];

  allTasks.forEach((task) => {
    let thisCircle = task.querySelector(".circle");
    let thisAlarm = task.querySelector(".alarm");
    let thisInput = task.querySelector(".input");
    let thisAlarmToggle = task.querySelector(".alarm-row-toggle");
    let inputDate = task.querySelector(".date");
    let inputTime = task.querySelector(".time");
    let textArea = task.querySelector(".info-pane");
    let name = Number(
      allTasks[allTasks.indexOf(task)].classList.value.split(" ")[1]
    );
    let storageData = {
      thisName: name,
      circleStateOff:
        thisCircle.style.background.includes("empty") ||
        thisCircle.style.background === "",
      taskName: thisInput.value,
      taskNotes: textArea.value,
      alarmStateOff:
        thisAlarmToggle.style.background.includes("off") ||
        thisAlarmToggle.style.background === "",
      alarmDate: inputDate.value,
      alarmTime: inputTime.value,
      alarmIcon: `${thisAlarm.style.background}`,
    };
    // console.log(storageData);

    localStorage.setItem(name, JSON.stringify(storageData));
  });
};

createTasks();
window.setInterval(() => {
  updateLocalInfo();
}, 3000);

window.addEventListener("beforeunload", updateLocalInfo);

// option to save data to page object and then use option thing to quickly fill in data.will need Icon.
// disallow pushing other buttons when slide down pane is open.
