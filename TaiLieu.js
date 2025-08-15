document.querySelector(".menu-toggle").addEventListener("click", function() {
  var menu = document.querySelector(".menu");
  var closeButton = document.querySelector(".closeButton");
  
  if (menu.style.display === "none") {
    menu.style.display = "block";
    closeButton.style.display = "block";
  } else {
    menu.style.display = "none";
    closeButton.style.display = "none";
  }
});

document.querySelector(".closeButton").addEventListener("click", function() {
  var menu = document.querySelector(".menu");
  var closeButton = document.querySelector(".closeButton");
  
  menu.style.display = "none";
  closeButton.style.display = "none";
});
