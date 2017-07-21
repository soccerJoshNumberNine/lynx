var asdf = null;

var events = {
  daily: [
    
  ],
  
  weekly: {
    sunday: [
      {
        name: "Church",
        time: "10:45",
        notes: "Second Service"
      },
      
      {
        name: "Code",
        time: "Any time today",
        notes: "None"
      }
    ],
    
    monday: [
      {
        name: "Code",
        time: "Any time today",
        notes: "None"
      }
    ],
    
    tuesday: [
      {
        name: "Soccer Practice",
        time: "7:30",
        notes: "Wear Navy"
      },
      
      {
        name: "Code",
        time: "Any time today",
        notes: "None"
      }
    ],
    
    wednesday: [
      {
        name: "Vision Training",
        time: "7:30",
        notes: "Wear pink"
      },
      
      {
        name: "Code",
        time: "Any time today",
        notes: "None"
      }
    ],
    
    thursday: [
      {
        name: "Code",
        time: "Any time today",
        notes: "None"
      }
    ],
    
    friday: [
      {
        name: "Shooting & Finishing Clinic",
        time: "7:00",
        notes: "Last one on Friday, July 21"
      },
      
      {
        name: "Soccer Practice",
        time: "7:30",
        notes: "Wear Gray"
      },
      
      {
        name: "Code",
        time: "Any time today",
        notes: "None"
      }
    ],
    
    saturday: [
      {
        name: "Code",
        time: "Any time today",
        notes: "None"
      }
    ]
    },
  
  everyOtherDay: {
    even: [
      [
        {
          name: "Cat food and water",
          time: "Any time today",
          notes: "None"
        }
      ]
    ],
    
    odd: [
      {
        name: "Kitty litter",
        time: "Any time today",
        notes: "None"
      }
    ]
  }
};

var jar = null;
var table = null;

function createTable () {
  table = "";
  jar = events.daily.length;
  
  if (jar > 0) {
    for (i = 0; i < jar; i++) {
      table += "<tr><td>" + events.daily[i].name + "</td><td>" + events.daily[i].time + "</td><td>" + events.daily[i].notes + "</td></tr>";
    }
  }
  
  jar = new Date().getDay();
  
  switch (jar) {
    case 0:
      asdf = events.weekly.sunday;
      break;
    case 1:
      asdf = events.weekly.monday;
      break;
    case 2:
      asdf = events.weekly.tuesday;
      break;
    case 3:
      asdf = events.weekly.wednesday;
      break;
    case 4:
      asdf = events.weekly.thursday;
      break;
    case 5:
      asdf = events.weekly.friday;
      break;
    case 6:
      asdf = events.weekly.saturday;
      break;
  }
  
  if (jar > 0) {
    for (i = 0; i < asdf.length; i++) {
      table += "<tr><td>" + asdf[i].name + "</td><td>" + asdf[i].time + "</td><td>" + asdf[i].notes + "</td></tr>";
    }
  }
  
  document.getElementById("table").innerHTML = String(table);
}

$(document).ready(function () {
  createTable();
  $('#dorito').slideToggle(1000);
});
