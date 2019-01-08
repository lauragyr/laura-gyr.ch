function switchOnClick()
{
  let menubar = document.getElementById("menubar");
  menubar.id = "menubarActive";
  setTimeout(function functionName() {
    window.location.href = "about.html";
  }, 1000);
}
