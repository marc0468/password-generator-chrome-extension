document.addEventListener("DOMContentLoaded", function () {
  var entryElement = document.getElementById("copy");
  entryElement.addEventListener("click", function () {
    copyToClipboard();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var entryElement = document.getElementById("generate");
  entryElement.addEventListener("click", function () {
    var password_form = document.getElementById("password");
    password_form.value = getRandomStr(document.forms.form_password);
  });
});

function getRandomStr(option) {
  const PASSWORD_LEN = option["length"].value;
  let SOURCE = "";
  let result = "";

  if (option["low_character"].checked) {
    SOURCE += "abcdefghijklmnopqrstuvwxyz";
  }
  if (option["upper_character"].checked) {
    SOURCE += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (option["number"].checked) {
    SOURCE += "0123456789";
  }
  if (option["symbol"].checked) {
    SOURCE += option["symbol_val"].value;
  }

  for (var i = 0; i < PASSWORD_LEN; i++) {
    result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
  }

  return result;
}

function copyToClipboard() {
  var password = document.getElementById("password");
  password.select();
  document.execCommand("Copy");
}
