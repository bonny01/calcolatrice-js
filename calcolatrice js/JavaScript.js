function dig(n) {
  document.form.area.value = document.form.area.value + n;
}

function ris() {
  var c = document.form.area.value;
  if (c) {
    document.form.area.value = eval(c);
  }
}


