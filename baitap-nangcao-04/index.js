// Input :
// - Nhập các toạ độ của sinh viên và trường học

// Xử lý:
// - Áp dụng công thức tính khoảng các giữa 2 toạ độ
// - So sánh các kết quả tính được

// Out put:
//  - Sinh viên có nhà xa trường nhất

const firstXInputEl = document.querySelector("#first-x");
const firstYInputEl = document.querySelector("#first-y");

const secondXInputEl = document.querySelector("#second-x");
const secondYInputEl = document.querySelector("#second-y");

const thirdXInputEl = document.querySelector("#third-x");
const thirdYInputEl = document.querySelector("#third-y");

const fourthXInputEl = document.querySelector("#fourth-x");
const fourthYInputEl = document.querySelector("#fourth-y");

const calculateBtnEl = document.querySelector("#submitBtn");

const resultEl = document.querySelector("#result");

function tinhKhoangCachHaiDiem(firstX, firstY, secondX, secondY) {
  return Math.sqrt(
    Math.pow(firstX - secondX, 2) + Math.pow(firstY - secondY, 2)
  ).toFixed(2);
}

tinhKhoangCachHaiDiem(6, 0, 6, 0);

calculateBtnEl.onclick = function () {
  let firstX = firstXInputEl.value * 1;
  let firstY = firstYInputEl.value * 1;

  let secondX = secondXInputEl.value * 1;
  let secondY = secondYInputEl.value * 1;

  let thirdX = thirdXInputEl.value * 1;
  let thirdY = thirdYInputEl.value * 1;

  let fourthX = fourthXInputEl.value * 1;
  let fourthY = fourthYInputEl.value * 1;

  let distanceFirst = tinhKhoangCachHaiDiem(fourthX, fourthY, firstX, firstY);

  let distanceSecond = tinhKhoangCachHaiDiem(
    fourthX,
    fourthY,
    secondX,
    secondY
  );

  let distanceThird = tinhKhoangCachHaiDiem(fourthX, fourthY, thirdX, thirdY);

  console.log("Khoang cách nhà sinh viên 1: ", distanceFirst);
  console.log("Khoảng cách nhà sinh viên 2: ", distanceSecond);
  console.log("Khoảng cách nhà sinh viên 3: ", distanceThird);

  if (distanceFirst >= distanceSecond && distanceFirst >= distanceThird) {
    resultEl.value = "Sinh Viên Thứ Nhất";
  } else if (
    distanceSecond >= distanceFirst &&
    distanceSecond >= distanceThird
  ) {
    resultEl.value = "Sinh Viên Thứ Hai";
  } else {
    resultEl.value = "Sinh Viên Thứ Ba";
  }
};
