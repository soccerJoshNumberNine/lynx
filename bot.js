$(document).ready(function () {
  alert("I am Lynx, and I look forward to speaking with you.\n\nPlease talk to me through the input box below, but use simple language as my vocabulary index is quite small.");
  document.getElementById("chat").click();
  $('#chat').keydown(function () {
    if (event.which == 13) {
      processResponse();
      document.getElementById("reset").click();
    }
  });
});

var response = null;

function processResponse () {
  response = document.getElementById("chat").value;
  if (response.toLowerCase().indexOf("hello") !== -1 || response.toLowerCase().indexOf("hi") !== -1) {
    $('#waitingDisplay').append("<br/>$~Lynx: Hello! What is your name?");
  }
}
