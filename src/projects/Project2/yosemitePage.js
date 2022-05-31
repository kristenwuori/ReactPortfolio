$(document).ready(function () {
  document.getElementById("yosemiteImage").style.width = "29%";
  document.getElementById("yosemiteImage").style.right = "1%";
  $(".nextYosemite").hide();
  $(".prevYosemite").show();
})

// function expands the image when link is clicked
function openImgYosemite() {
  document.getElementById("yosemiteImage").style.width = "100%";
  document.getElementById("yosemiteImage").style.float = "right";
  document.getElementById("yosemiteImage").style.right = "0";

  $(".info").hide()
  $(".prevYosemite").hide();
  $(".nextYosemite").show();

  $(".slideDots").addClass("slideDotsBig");
}
// function collapses the image when link is clicked
function closeImgYosemite() {
  document.getElementById("yosemiteImage").style.width = "29%";
  document.getElementById("yosemiteImage").style.float = "right";
  document.getElementById("yosemiteImage").style.right = "1%";

  $(".info").show()
  $(".yosemiteText").show();
  $(".prevYosemite").show();
  $(".nextYosemite").hide();
}

function changeImgYosemite() {
  $(".yosemite").removeClass("yosemiteImage2")
  $(".yosemite").removeClass("yosemiteImage3")
  $(".imageTextYosemite").text("Half Dome")
  $(".yosemite").addClass("yosemiteImage")
}

function changeImgYosemite2() {
  $(".yosemite").removeClass("yosemiteImage")
  $(".yosemite").removeClass("yosemiteImage2")
  $(".imageTextYosemite").text("Glacier Point")
  $(".yosemite").addClass("yosemiteImage3")
}

function changeImgYosemite3() {
  $(".yosemite").removeClass("yosemiteImage")
  $(".yosemite").removeClass("yosemiteImage3")
  $(".imageTextYosemite").text("Merced Lake")
  $(".yosemite").addClass("yosemiteImage2")
}
