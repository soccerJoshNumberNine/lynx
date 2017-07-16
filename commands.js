var commandOutput = null;
var jar = null;
var container = null;
var userOutput = null;
var activeUser = null;
var username = null;
var password = null;
var signin = "You must be signed in to use Lynx. Use help for a list of commands.";
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
      } else if (activeUser === null) {
        return signin;
      }
    }
  },
  
  {
    input: "find_jersey",
    output: function () {
      if (activeUser !== null) {
        jar = [
          "any",
          "any",
          "your navy",
          "your pink",
          "any",
          "your gray",
          "any"
        ];
        commandOutput = "Wear " + jar[new Date().getDay()] + " jersey.";
        return commandOutput;
      } else if (activeUser === null) {
        return signin;
      }
    }
  },
  
  {
    input: "echo",
    output: function () {
      if (activeUser !== null) {
        container = $('#commands').val();
        jar = container.slice(container.indexOf(".") + 1);
        commandOutput = jar;
        return commandOutput;
      } else if (activeUser === null) {
        return signin;
      }
    }
  },
  
  {
    input: "help",
    output: function () {
      commandOutput = "";
      for (i = 0; i < commands.length; i++) {
        commandOutput += commands[i].input + "<br/>";
      }
      return commandOutput;
    }
  },
  
  {
    input: "clear",
    output: function () {
      commandOutput = "Console cleared.";
      return commandOutput;
    }
  },
  
  {
    input: "sign_in",
    output: function (username, password) {
      jar = [
        {
          username: "soccerJoshNumberNine",
          password: "pirlo"
        }
      ];
      container = $('#commands').val();
      username = container.slice(container.indexOf(".") + 1, container.indexOf("/"));
      password = container.slice(container.indexOf("/") + 1);
      for (i = 0; i < jar.length; i++) {
        if (username == jar[i].username && password == jar[i].password) {
          activeUser = jar[i].username;
        }
      }
      commandOutput = "Successfully logged in. Welcome back, " + activeUser + ".";
      return commandOutput;
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
