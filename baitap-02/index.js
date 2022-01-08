// Input :
// - Thông tin người sử dụng máy kèm với giá trị value xác định

// Xử lý:
// - Gán lời chào với từng giá trị value

// Out put:
// - Xuất lời chào tương ứng

const firstInputEl = document.querySelector("#first");

const calculateBtnEl = document.querySelector("#submitBtn");

const resultEl = document.querySelector("#result");

function findUser(key) {
  let user;
  switch (key) {
    case "b":
      user = "Bố";
      break;
    case "m":
      user = "Mẹ";
      break;
    case "a":
      user = "Anh Trai";
      break;
    case "e":
      user = "Em gái";
      break;
  }

  return user;
}

calculateBtnEl.onclick = function () {
  let key = firstInputEl.value;

  if (key) {
    let result = "Chào mừng " + findUser(key);

    resultEl.value = result;
  } else {
    resultEl.value = "Vui lòng chọn người sử dụng !!";
  }
};
