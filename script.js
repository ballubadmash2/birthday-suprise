function go(n) {
  document.querySelectorAll("div").forEach(d => d.style.display = "none");
  document.getElementById("page" + n).style.display = "block";
}
