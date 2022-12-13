const btn = document.querySelector(".hamburger");
const btn2 = document.querySelector(".nav-links");
const btn3 = document.querySelector(".hamburger-close");
const btn4 = document.querySelectorAll(".nav-links a");
const navWrap = document.querySelector(".nav-wrap");
btn.addEventListener("click", function () {
  btn2.style.left = "0";
});

// nav close
btn3.addEventListener("click", function () {
  btn2.style.left = "-300%";
});

btn4.forEach((links) => {
  links.addEventListener("click", function () {
    btn2.style.left = "-300%";
  });
});
//
// Social Profiles

const openFacebook = document.querySelector(".fa-facebook");
const openTwitter = document.querySelector(".fa-twitter");
const openLinkedin = document.querySelector(".fa-linkedin");
const openWhatsapp = document.querySelector(".fa-whatsapp");
const openGithub = document.querySelector(".fa-github");
const openInstagram = document.querySelector(".fa-instagram");
openFacebook.addEventListener("click", function (e) {
  window.open("https://www.facebook.com/mrokorojames");
});
//
openTwitter.addEventListener("click", function (e) {
  window.open("https://www.twitter.com/okorojames_");
});
//
openLinkedin.addEventListener("click", function (e) {
  window.open("https://www.linkedin.com/in/okorojames");
});
//
openWhatsapp.addEventListener("click", function (e) {
  window.open("https://bit.ly/okorojames");
});
//
openGithub.addEventListener("click", function (e) {
  window.open("https://www.github.com/okorojames");
});

//
// End Social Profiles Functions

// BACK TO TOP BTN
// Get the button:
let mybutton = document.querySelector(".back-to-top-icon");

// When the user scrolls down 80px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
    // adding navwrap background
    navWrap.classList.add("bg-increment");
  } else {
    mybutton.style.display = "none";
    // removing navWrap bacground
    navWrap.classList.remove("bg-increment");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*==============*/
/*TYPED JS CODE*/
/*============*/
let typed = new Typed(".typing-effect", {
  strings: ["", "Web Developer", "Software Developer"],
  backSpeed: "9",
  typeSpeed: "9",
  loop: true,
});

/*==============*/
/*PRELOADER JS CODE*/
/*============*/
$(window).on("load", function () {
  $(".preloader-status").delay(1000).fadeOut();
  $(".preloader").delay(1200).fadeOut();
});
