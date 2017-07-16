var commandOutput = null;
var userOutput = null;
var commands = [
  {
    input: "find_events",
    output: function (caliber) {
      commandOutput = "Your input was processed correctly.";
      return commandOutput;
    }
  }
];

var input = null;
function processInput () {
  input = document.getElementById("commands").value;
  for (i = 0; i < commands.length; i++) {
    if (commands[i].input == input) {
      alert(commands[i].output());
    }
  }
}

$(document).ready(function () {
  $('#commands').keydown(function () {
    if (event.which == 13) {
      userOutput = processInput();
      alert(userOutput());
      document.getElementById("resetInput").click();
    }
  });
});
