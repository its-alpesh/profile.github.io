// ------------------------ Greetings --------------------------------
var hour = new Date().getHours();
var minute = new Date().getMinutes();
var time = hour + "." + minute;
if (time >= 3 && time < 12) {
  document.getElementById("greeting").innerHTML = "Good Morning";
}
if (time >= 12 && time < 15) {
  document.getElementById("greeting").innerHTML = "Good Afternoon";
}
if ((time >= 0 && time < 3) || (time >= 15 && time < 24)) {
  document.getElementById("greeting").innerHTML = "Good Evening";
}

// -------------------navigation  menu ------------

(() => {
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);

  function showNavMenu() {
    navMenu.classList.add("open");
    // fadeOutEffect();
    // bodyScollingToggle();
  }
  function hideNavMenu() {
    navMenu.classList.remove("open");
    // fadeOutEffect();
    // bodyScollingToggle();
  }
  function fadeOutEffect() {
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() => {
      document.querySelector(".fade-out-effect").classList.remove("active");
    }, 150);
  }
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("link-item")) {
      if (event.target.hash !== "") {
        event.preventDefault();
        const hash = event.target.hash;
        document.querySelector(".section.active").classList.add("hide");
        document.querySelector(".section.active").classList.remove("active");
        document.querySelector(hash).classList.add("active");
        document.querySelector(hash).classList.remove("hide");
        navMenu
          .querySelector(".active")
          .classList.add("outer-shadow", "hover-in-shadow");
        navMenu
          .querySelector(".active")
          .classList.remove("active", "inner-shadow");
        if (navMenu.classList.contains("open")) {
          event.target.classList.add("active", "inner-shadow");
          event.target.classList.remove("outer-shadow", "hover-in-shadow");
          hideNavMenu();
        } else {
          let navItems = navMenu.querySelectorAll(".link-item");
          navItems.forEach((item) => {
            if (hash === item.hash) {
              item.classList.add("active", "inner-shadow");
              item.classList.remove("outer-shadow", "hover-in-shadow");
            }
          });
          fadeOutEffect();
        }
        window.location.hash = hash;
      }
    }
  });
  var loc = document.querySelector(".section.active").id;
  window.location.hash = loc;
})();

// -------------------------------------------------------
(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabContainer = document.querySelector(".about-tabs");

  tabContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      tabContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      event.target.classList.add("active", "outer-shadow");
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
    }
  });
})();

// --------------hide all sections except active----------------
(() => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (!section.classList.contains("active")) {
      section.classList.add("hide");
    }
  });
})();

// ------------------------- back button event ---------------------------
var path = ["#home"];
var len = 0;
var currPath = '';
var prevPath = '';
var forPath = '';
let i = 0;

window.onpopstate = function() {

  if (prevPath == window.location.hash) {
    i--;
    prevPath = path[i];
    currPath = path[i+1];
    forPath = path[i+2];
    // console.log("Previous " + prevPath);
    // console.log("Current " + currPath); 
    // console.log("Forward " + forPath); 
    // console.log('backward');
    // console.log(path);
  }
  else if (forPath == window.location.hash) {
    i++;
    prevPath = path[i];
    currPath = window.location.hash;
    forPath = path[i+2];
    // console.log("Previous " + prevPath);
    // console.log("Current " + currPath);
    // console.log("Forward " + forPath); 
    // console.log('forward');
    // console.log(path);
  }
  else {
    i = len-1;
    path.push(window.location.hash);
    len = path.length;
    prevPath = path[len-2];
    currPath = path[len - 1];
    // console.log("Previous " + prevPath);
    // console.log("Current " + currPath);
    // console.log("Forward " + forPath); 
    // console.log(path);
  }
  document.querySelector(".section.active").classList.add("hide");
  document.querySelector(".section.active").classList.remove("active");
  document.querySelector(currPath).classList.add("active");
  document.querySelector(currPath).classList.remove("hide");
};