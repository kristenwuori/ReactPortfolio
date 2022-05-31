$(document).ready(function () {
  document.getElementById("yellowstoneImage").style.width = "29%";
  document.getElementById("yellowstoneImage").style.right = "1%";
  $(".nextyellowstone").hide();
  $(".prevyellowstone").show();
})

// function expands the image when link is clicked
function openImgyellowstone() {
  document.getElementById("yellowstoneImage").style.width = "100%";
  document.getElementById("yellowstoneImage").style.float = "right";
  document.getElementById("yellowstoneImage").style.right = "0";

  $(".info").hide()
  $(".prevyellowstone").hide();
  $(".nextyellowstone").show();

  $(".slideDots").addClass("slideDotsBig");
}
// function collapses the image when link is clicked
function closeImgyellowstone() {
  document.getElementById("yellowstoneImage").style.width = "29%";
  document.getElementById("yellowstoneImage").style.float = "right";
  document.getElementById("yellowstoneImage").style.right = "1%";

  $(".info").show()
  $(".yellowstoneText").show();
  $(".prevyellowstone").show();
  $(".nextyellowstone").hide();
}

function changeImgyellowstone() {
  $(".yellowstone").removeClass("yellowstoneImage2")
  $(".yellowstone").removeClass("yellowstoneImage3")
  $(".imageTextyellowstone").text("Hydrothermal Feature")
  $(".yellowstone").addClass("yellowstoneImage")
}

function changeImgyellowstone2() {
  $(".yellowstone").removeClass("yellowstoneImage")
  $(".yellowstone").removeClass("yellowstoneImage2")
  $(".imageTextyellowstone").text("Grand Prismatic Spring")
  $(".yellowstone").addClass("yellowstoneImage3")
}

function changeImgyellowstone3() {
  $(".yellowstone").removeClass("yellowstoneImage")
  $(".yellowstone").removeClass("yellowstoneImage3")
  $(".imageTextyellowstone").text("Grotto Geyser")
  $(".yellowstone").addClass("yellowstoneImage2")
}
