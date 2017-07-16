var commandOutput = null;
var jar = null;
var userOutput = null;
var activeUser = null;
var commands = [
  {
    input: "find_events",
    output: function () {
      if (activeUser !== null) {
        jar = [
          {
            day: "Sunday",
            items: "Church, code"
          },

          {
            day: "Monday",
            items: "Code, Bible study"
          },

          {
            day: "Tuesday",
            items: "Soccer practice (wear Navy), code, Bible study"
          },

          {
            day: "Wednesday",
            items: "Soccer practice (Vision session, wear pink), code, Bible study"
          },

          {
            day: "Thursday",
            items: "Code, Bible study"
          },

          {
            day: "Friday",
            items: "Soccer practice (wear gray), code, Bible study"
          },

          {
            day: "Saturday",
            items: "Code"
          }
        ];

        for (i = 0; i < jar.length; i++) {
          if (i == new Date().getDay()) {
            commandOutput = "Your events for the day: " + jar[i].items + ". ";
          }
        }

        jar = [
          "Cat food & water",
          "Kitty litter"
        ];

        commandOutput += "You are also tasked with the " + jar[new Date().getDate() % 2] + ".";

        return commandOutput;
      }
    }
  },
  
  {
    input: "sign_in",
    output: function (username, password) {
      $('#form').slideToggle(1000);
      jar = [
        {
          username: "BL4Z3",
          password: "json"
        }
      ];
      
      $('.input-prime').keydown(function () {
        if (event.which == 9) {
          alert();
          for (i = 0; i < jar.length; i++) {
            if (document.getElementById("username").value == jar[i].username && document.getElementById("password").value == jar[i].password) {
              activeUser = jar[i].username;
              commandOutput = "Successfully signed in. Active user: " + jar[i].username + ".";
              return commandOutput;
            }
          }
        }
      });
    }
  }
];

var input = null;
function processInput () {
  input = document.getElementById("commands").value;
  for (i = 0; i < commands.length; i++) {
    if (document.getElementById("commands").value.indexOf(commands[i].input) !== -1) {
      return commands[i].output();
    }
  }
}

$(document).ready(function () {
  $('#commands').keydown(function () {
    if (event.which == 9) {
      userOutput = processInput();
      document.getElementById("showOutput").innerHTML = String(userOutput);
      document.getElementById("resetInput").click();
    }
  });
});
