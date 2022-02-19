/*
1. 유저가 투두를 입력한다 
2. 추가 버튼을 눌러 목록에 추가한다. (키보드 엔터키 사용시 추가)
3. Check 버튼을 눌러 할일 완료 / 미완료 수정한다.
4. Delete 버튼을 눌러 목록을 삭제할 수 있다.
5. 별표 모양을 눌러 중요 표시를 설정할 수 있다.
6. 특정 탭을 클릭하면 해당 탭으로 이동한 뒤 목록을 표시한다. (전체, 중요, 완료, 미완료)
*/

let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let checkButton = document.getElementById("check-button");
let tabs = document.querySelectorAll("nav-item");
let selectedTab = "all";
let taskList = [];
let checkedList = [];

inputButton.addEventListener("click", addTask);

function addTask() {
  if (userInput.value == "") {
    console.log("내용을 입력해주세요.");
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
  if (selectedTab == "all") {
    list = taskList;
  } else {
    list = checkedList;
  }

  for (i = 0; i < taskList.length; i++) {
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

  document.getElementById("task-area").innerHTML = addHTML;
}

function resetInputTask() {
  userInput.value = "";
}

function checkTask(id) {
  for (i = 0; i < taskList.length; i++) {
    if (id == taskList[i].id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      console.log(taskList[i].isComplete);
    }
  }
  render();
}

function deleteTask(id) {
  for (i = 0; i < taskList.length; i++) {
    if (id == taskList[i].id) {
      taskList.splice(i, 1);
    }
  }
  render();
}
