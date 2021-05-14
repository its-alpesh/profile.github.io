// ---------------------------------------chat icon---------------------------------------
document.querySelector("#chat-icon").addEventListener("click", () => {
  document.querySelector(".chat-box").style.display = "block";
  document.getElementById("chat-icon").style.display = "none";
});

document.querySelector(".chat-box-close").addEventListener("click", () => {
  document.getElementById("chat-box").style.display = "none";
  document.getElementById("chat-icon").style.display = "block";
});

// ---------------------------------------contact switch---------------------------------------
function contactSwitch() {
  document.getElementById("chat-box").style.display = "none";
  document.getElementById("chat-icon").style.display = "block";
  confirm();
  const navMenu = document.querySelector(".nav-menu");

  function fadeOutEffect() {
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() => {
      document.querySelector(".fade-out-effect").classList.remove("active");
    }, 150);
  }
  document.querySelector(".section.active").classList.add("hide");
  document.querySelector(".section.active").classList.remove("active");
  document.querySelector("#contact").classList.add("active");
  document.querySelector("#contact").classList.remove("hide");
  navMenu
    .querySelector(".active")
    .classList.add("outer-shadow", "hover-in-shadow");
  navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
  if (navMenu.classList.contains("open")) {
    document
      .querySelector(".bot-switch")
      .classList.add("active", "inner-shadow");
    document
      .querySelector(".bot-switch")
      .classList.remove("outer-shadow", "hover-in-shadow");
    hideNavMenu();
  } else {
    document
      .querySelector(".bot-switch")
      .classList.add("active", "inner-shadow");
    document
      .querySelector(".bot-switch")
      .classList.remove("outer-shadow", "hover-in-shadow");
    fadeOutEffect();
  }
  window.location.hash = "#contact";
}

// ---------------------------------------greetings---------------------------------------
function greeting() {
  var hour = new Date().getHours();
  var minute = new Date().getMinutes();
  var time = hour + "." + minute;
  var greet = "";
  if (time >= 4 && time < 12) {
    greet = "Good Morning";
  }
  if (time >= 12 && time < 15) {
    greet = "Good Afternoon";
  }
  if ((time >= 0 && time < 4) || (time >= 15 && time < 24)) {
    greet = "Good Evening";
  }
  return greet;
}
var greet = greeting();
console.log(greeting());

// ---------------------------------------chat box---------------------------------------

var botui = new BotUI("help-bot");

var start = function () {
  botui.message
    .add({
      //   delay: 1000,
      ////loading: true,
      content: "Select from below:",
    })
    .then(function () {
      return botui.action.button({
        action: [
          {
            text: "I just wanted to say hello.",
            value: "hello",
          },
          {
            text: "Want to give Feedback.",
            value: "feed",
          },
          {
            text: "I'd like to contact you.",
            value: "contact",
          },
        ],
      });
    })
    .then(function (res) {
      if (res.value === "hello") {
        hello();
      } else if (res.value === "feed") {
        feed();
      } else if (res.value === "contact") {
        contactSwitch();
        // contact();
      }
    });
};

var hello = function () {
  botui.message
    .add({
      delay: 1000,
      ////loading: true,
      content: "Well hello there! 👋",
    })
    .then(function () {
      return botui.message.add({
        delay: 1000,
        ////loading: true,
        content: "Thanks for saying hi 😁",
      });
    })
    .then(function () {
      return botui.message.add({
        delay: 1000,
        ////loading: true,
        content: "I hope you've enjoyed browsing my work.",
      });
    })
    .then(function () {
      confirm();
    });
};

var feed = function () {
  botui.message
    .add({
      delay: 1000,
      ////loading: true,
      content: "How is the website?",
    })
    .then(function () {
      return botui.action.button({
        action: [
          {
            text: "Nice 👌",
          },
          {
            text: "Love it 😍",
          },
          {
            text: "Average 😑",
          },
        ],
      });
    })
    .then(function () {
      return botui.message.add({
        delay: 1000,
        ////loading: true,
        content: "Thanks for feedback 🤗",
      });
    })
    .then(function () {
      confirm();
    });
};

var confirm = function () {
  botui.message
    .add({
      delay: 1000,
      ////loading: true,
      content: "Can I help you with anything else?",
    })
    .then(function () {
      return botui.action.button({
        action: [
          {
            text: "Yeah",
            value: "yes",
          },
          {
            text: "No Thanks",
            value: "no",
          },
        ],
      });
    })
    .then(function (res) {
      if (res.value === "yes") {
        start();
      } else if (res.value === "no") {
        end();
      }
    });
};

var end = function () {
  botui.message
    .add({
      delay: 1000,
      ////loading: true,
      content: "Cool!",
    })
    .then(function (index) {
      return botui.action.button({
        delay: 1000,
        action: [
          {
            text: "Click to restart",
            value: "cool",
          },
        ],
      });
    })
    .then(function (res) {
      start();
    });
};

botui.message
  .add({
    // delay: 1000,
    ////loading: true,
    content: greet,
  })
  .then(function () {
    return botui.message.add({
      //   delay: 1000,
      ////loading: true,
      content: "I'm Ditto 🤖",
    });
  })
  .then(function () {
    return botui.message.add({
      //   delay: 1000,
      ////loading: true,
      content: "Welcome to the website",
    });
  })
  .then(function () {
    return botui.message.add({
      //   delay: 1000,
      ////loading: true,
      content: "How can I help you today?",
    });
  })
  .then(function () {
    start();
  });
