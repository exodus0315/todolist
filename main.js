let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let checkButton = document.getElementById("check-button");
let tabs = document.querySelectorAll(".nav-item button");
let pageText = document.querySelectorAll(".task p");
let selectedTab = "tab-all";
let taskList = []; // tab-all일때 사용할 배열
let checkedList = []; //tab-all이 아닐때 사용할 배열

// 모달창에 사용
const modal = document.querySelector(".modal");
const closeButton = modal.querySelector("button");
const modalBackground = modal.querySelector(".modal-background");

closeButton.addEventListener("click", displayModal);
modalBackground.addEventListener("click", displayModal);

window.document.onkeydown = function (event) {
  if (event.keyCode == 27) {
    if (modal.classList == "modal") {
      displayModal();
    }
  }
};

inputButton.addEventListener("click", addTask);
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filtering(event);
  });
}

function addTask() {
  if (userInput.value == "") {
    displayModal();
  } else {
    let task = {
      id: taskList.length,
      taskContent: userInput.value,
      isComplete: false,
    };
    taskList.push(task);
  }

  render();
  resetInputTask();
}

function render() {
  let addHTML = "";

  let list = [];
  if (selectedTab == "tab-all") {
    list = taskList;
  } else {
    list = checkedList;
  }

  for (i = 0; i < list.length; i++) {
    if (list[i].isComplete) {
      addHTML += `<div class="task" style="background-color: #0B6138">
  <p style="color: #ffffff">${list[i].taskContent}</p>
  <div class="task-button">
    <button id="check-button" onclick="checkTask(${list[i].id})">
      <i class="fa-solid fa-calendar-check fa-xl"></i>
    </button>
    <button id="delete-button" onclick="deleteTask(${list[i].id})">
      <i class="fa-solid fa-calendar-minus fa-xl"></i>
    </button>
  </div>
</div>`;
    } else {
      addHTML += `<div class="task">
  <p>${list[i].taskContent}</p>
  <div class="task-button">
    <button id="check-button" onclick="checkTask(${list[i].id})">
      <i class="fa-solid fa-calendar-check fa-xl"></i>
    </button>
    <button id="delete-button" onclick="deleteTask(${list[i].id})">
      <i class="fa-solid fa-calendar-minus fa-xl"></i>
    </button>
  </div>
</div>`;
    }
  }

  document.getElementById("task-area").innerHTML = addHTML;
}

function resetInputTask() {
  userInput.value = "";
}

function checkTask(id) {
  for (i = 0; i < taskList.length; i++) {
    if (id == taskList[i].id) {
      taskList[i].isComplete = !taskList[i].isComplete;
    }
  }
  filtering();
}

function deleteTask(id) {
  for (i = 0; i < taskList.length; i++) {
    if (id == taskList[i].id) {
      taskList.splice(i, 1);
    }
  }
  filtering();
}

function filtering(event) {
  if (event) {
    selectedTab = event.target.id;
  }

  checkedList = [];
  if (selectedTab === "tab-notDone") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        checkedList.push(taskList[i]);
      }
    }
  } else if (selectedTab === "tab-done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete) {
        checkedList.push(taskList[i]);
      }
    }
  }
  render();
}

function displayModal() {
  modal.classList.toggle("hidden");
}
