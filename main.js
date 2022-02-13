// Todo list
// 유저가 값을 입력한다
// + 버튼을 클릭하면, 할일 목록에 추가된다
// 유저가 check 버튼을 누르면 할일이 종료되며 라인이 그어진다.
// 유저가 delete 버튼을 누르면 할일이 삭제된다
// 각 탭을 클릭하면 하단 밑줄이 해당 탭으로 움직인다.
// 각 탭을 클릭하면 해당 탭으로 이동하며 해당 탭 아이템만 보인다.
// All 탭을 누르면 다시 모든 아이템들이 보인다.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
      <div>${taskList[i]}</div>
      <div>
        <button>Check</button>
        <button>Delete</button>
      </div>
    </div>`;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}
