$(document).ready(function () {
  document.getElementById("glacierImage").style.width = "29%";
  document.getElementById("glacierImage").style.right = "1%";
  $(".nextGlacier").hide();
  $(".prevGlacier").show();
})

// function expands the image when link is clicked
function openImgGlacier() {
  document.getElementById("glacierImage").style.width = "100%";
  document.getElementById("glacierImage").style.float = "right";
  document.getElementById("glacierImage").style.right = "0";

  $(".info").hide()
  $(".prevGlacier").hide();
  $(".nextGlacier").show();

  $(".slideDots").addClass("slideDotsBig");
}
// function collapses the image when link is clicked
function closeImgGlacier() {
  document.getElementById("glacierImage").style.width = "29%";
  document.getElementById("glacierImage").style.float = "right";
  document.getElementById("glacierImage").style.right = "1%";
  $(".glacierText").show();
  $(".info").show()
  $(".prevGlacier").show();
  $(".nextGlacier").hide();
}

function changeImgGlacier() {
  $(".glacier").removeClass("glacierImage2")
  $(".glacier").removeClass("glacierImage3")
  $(".imageTextGlacier").text("Harrison Glacier")
  $(".glacier").addClass("glacierImage")
}

function changeImgGlacier2() {
  $(".glacier").removeClass("glacierImage")
  $(".glacier").removeClass("glacierImage2")
  $(".imageTextGlacier").text("Logan's Pass")
  $(".glacier").addClass("glacierImage3")
}

function changeImgGlacier3() {
  $(".glacier").removeClass("glacierImage")
  $(".glacier").removeClass("glacierImage3")
  $(".imageTextGlacier").text("Lake McDonald")
  $(".glacier").addClass("glacierImage2")
}

