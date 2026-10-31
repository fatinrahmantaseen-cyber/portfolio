// 1. Show page location and last modified date in the footer
window.onload = function () {
  var info = document.getElementById("pageInfo");
  if (info) {
    info.innerHTML = "Page location: " + window.location.href +
      "<br />Last modified: " + document.lastModified;
  }

  // 2. Dark / light mode toggle (remembers choice)
  var button = document.getElementById("themeToggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.className = "dark";
  }
  if (button) {
    button.onclick = function () {
      if (document.body.className === "dark") {
        document.body.className = "";
        localStorage.setItem("theme", "light");
      } else {
        document.body.className = "dark";
        localStorage.setItem("theme", "dark");
      }
    };
  }
};
