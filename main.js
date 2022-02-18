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
let checkButton = document.getElementsByClassName(
  "fa-solid fa-calendar-check fa-xl"
);

inputButton.addEventListener("click", inputTask);
userInput.addEventListener("click", function () {
  userInput.value = "";
});

function inputTask() {
  newTask = userInput.value;
  console.log(newTask);
}

function buttonControl() {
  checkButton.style.color = "#ffffff";
}
