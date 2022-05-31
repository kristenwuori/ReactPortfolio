$(".firstModal").ready(function () {
  $(".secondModal").hide();
})

function switchModals() {
  $(".firstModal").hide();
  $(".secondModal").show();
}

function goBack() {
  $(".secondModal").hide();
  $(".firstModal").show();
}

function closeModal() {
  goBack();
  $("#myModal").hide();
}
