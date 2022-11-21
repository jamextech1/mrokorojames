const btn = document.querySelector(".hamburger");
const show = document.querySelector(".nav_links");
const show2 = document.querySelector(".contact_btn");
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
  window.open("https://www.twitter.com/jamextech1");
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
  window.open("https://www.github.com/jamextech1");
});

//
// End Social Profiles Functions

// scroll to top
function scrollToTop() {
  window.scrollTo(0, 0);
}
