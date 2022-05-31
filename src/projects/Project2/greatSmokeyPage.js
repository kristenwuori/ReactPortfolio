$(document).ready(function () {
  document.getElementById("greatSmokeyImage").style.width = "29%";
  document.getElementById("greatSmokeyImage").style.right = "1%";
  $(".nextgreatSmokey").hide();
  $(".prevgreatSmokey").show();
})

// function expands the image when link is clicked
function openImggreatSmokey() {
  document.getElementById("greatSmokeyImage").style.width = "100%";
  document.getElementById("greatSmokeyImage").style.float = "right";
  document.getElementById("greatSmokeyImage").style.right = "0";

  $(".info").hide();
  $(".prevgreatSmokey").hide();
  $(".nextgreatSmokey").show();

  $(".slideDots").addClass("slideDotsBig");
}
// function collapses the image when link is clicked
function closeImggreatSmokey() {
  document.getElementById("greatSmokeyImage").style.width = "29%";
  document.getElementById("greatSmokeyImage").style.float = "right";
  document.getElementById("greatSmokeyImage").style.right = "1%";

  $(".info").show();
  $(".greatSmokeyText").show();
  $(".prevgreatSmokey").show();
  $(".nextgreatSmokey").hide();
}

function changeImggreatSmokey() {
  $(".greatSmokey").removeClass("greatSmokeyImage2")
  $(".greatSmokey").removeClass("greatSmokeyImage3")
  $(".imageTextgreatSmokey").text("Mount LeConte")
  $(".greatSmokey").addClass("greatSmokeyImage")
}

function changeImggreatSmokey2() {
  $(".greatSmokey").removeClass("greatSmokeyImage")
  $(".greatSmokey").removeClass("greatSmokeyImage2")
  $(".imageTextgreatSmokey").text("Cades Cove")
  $(".greatSmokey").addClass("greatSmokeyImage3")
}

function changeImggreatSmokey3() {
  $(".greatSmokey").removeClass("greatSmokeyImage")
  $(".greatSmokey").removeClass("greatSmokeyImage3")
  $(".imageTextgreatSmokey").text("Smokey Mountains")
  $(".greatSmokey").addClass("greatSmokeyImage2")
}
