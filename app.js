const btn = document.querySelector(".hamburger");
const btn2 = document.querySelector(".nav-links");
const btn3 = document.querySelector(".hamburger-close");
const btn4 = document.querySelectorAll(".nav-links a");
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

// scroll to top
function scrollToTop() {
  window.scrollTo(0, 0);
}
