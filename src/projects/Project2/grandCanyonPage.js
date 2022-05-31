$(document).ready(function () {
  document.getElementById("grandCanyonImage").style.width = "29%";
  document.getElementById("grandCanyonImage").style.right = "1%";
  $(".nextgrandCanyon").hide();
  $(".prevgrandCanyon").show();
})

// function expands the image when link is clicked
function openImggrandCanyon() {
  document.getElementById("grandCanyonImage").style.width = "100%";
  document.getElementById("grandCanyonImage").style.float = "right";
  document.getElementById("grandCanyonImage").style.right = "0";


  $(".info").hide();
  $(".prevgrandCanyon").hide();
  $(".nextgrandCanyon").show();


  $(".slideDots").addClass("slideDotsBig");
}
// function collapses the image when link is clicked
function closeImggrandCanyon() {
  document.getElementById("grandCanyonImage").style.width = "29%";
  document.getElementById("grandCanyonImage").style.float = "right";
  document.getElementById("grandCanyonImage").style.right = "1%";

  $(".info").show();
  $(".grandCanyonText").show();
  $(".prevgrandCanyon").show();
  $(".nextgrandCanyon").hide();
}


function changeImggrandCanyon() {
  $(".grandCanyon").removeClass("grandCanyonImage2")
  $(".grandCanyon").removeClass("grandCanyonImage3")
  $(".imageTextgrandCanyon").text("Red Rocks")
  $(".grandCanyon").addClass("grandCanyonImage")
}

function changeImggrandCanyon2() {
  $(".grandCanyon").removeClass("grandCanyonImage")
  $(".grandCanyon").removeClass("grandCanyonImage2")
  $(".imageTextgrandCanyon").text("Rainbow")
  $(".grandCanyon").addClass("grandCanyonImage3")
}

function changeImggrandCanyon3() {
  $(".grandCanyon").removeClass("grandCanyonImage")
  $(".grandCanyon").removeClass("grandCanyonImage3")
  $(".imageTextgrandCanyon").text("Colorado River")
  $(".grandCanyon").addClass("grandCanyonImage2")
}
