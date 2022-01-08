// Input :
// - Nhập 3 số nguyên bất kì

// Xử lý:
// - Tạo một giá trị tên flag = 0;
// - Với mỗi số chia hết cho 2 thì flag tăng 1

// Out put:
//  - Xuất ra số lượng số lẻ và số chẵn dựa theo flag

const firstInputEl = document.querySelector("#first");
const secondInputEl = document.querySelector("#second");
const thirdInputEl = document.querySelector("#third");

const calculateBtnEl = document.querySelector("#submitBtn");

const resultEl = document.querySelector("#result");

function checkNum(num) {
  if (num % 1 == 0) {
    return true;
  } else {
    return false;
  }
}

function timSoChan(x, y, z) {
  let flag = 0;

  if (x % 2 === 0) {
    flag += 1;
  }
  if (y % 2 === 0) {
    flag += 1;
  }
  if (z % 2 === 0) {
    flag += 1;
  }

  return flag;
}

calculateBtnEl.onclick = function () {
  let x = firstInputEl.value * 1;
  let y = secondInputEl.value * 1;
  let z = thirdInputEl.value * 1;
  if (checkNum(x) && checkNum(y) && checkNum(z)) {
    let soLuongSoChan = timSoChan(x, y, z);

    let result = `Có ${soLuongSoChan} số Chẵn - Và ${3 - soLuongSoChan} số Lẻ`;
    resultEl.value = result;
  } else {
    alert("Nhập sai dữ liệu");
    resultEl.value = null;
  }
};
