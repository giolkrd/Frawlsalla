function mobileBarClick() {
  var x = document.getElementById("navbar-menu");
  var y = document.getElementById("button-play-now");
  if (x.className === "navbar") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "navbar";
    y.className = "button-play";
  }
}

function dropDownClick(){
  var x = document.getElementById("dropbtnbar");
  var y = document.getElementById("dropdown-content-main");

  if (y.className === "dropdown-content") {
    x.className += " collapse";
    y.className += " collapse";
  } else {
    x.className = "dropbtn";
    y.className = "dropdown-content";
  }
}