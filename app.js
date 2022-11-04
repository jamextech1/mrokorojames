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
openFacebook.addEventListener("click", function (e) {
  window.open("https://www.facebook.com/mrokorojames");
});
openTwitter.addEventListener("click", function (e) {
  window.open("https://www.twitter.com/jamextech1");
});
openLinkedin.addEventListener("click", function (e) {
  window.open("https://www.linkedin.com/in/okorojames");
});
openWhatsapp.addEventListener("click", function (e) {
  window.open("bit.ly/okorojames");
});
openGithub.addEventListener("click", function (e) {
  window.open("https://www.github.com/jamextech1");
});

//
// End Social Profiles Functions

btn.addEventListener("click", function (e) {
  e.preventDefault();
  alert(
    "Please refresh to remove nav from display, as it's responsive is still in progress"
  );
  show.style.display = "flex";
  show.style.flexDirection = "column";
  show.style.gap = "2.5rem";
  show.style.paddingTop = "7.5rem";
  show.style.position = "absolute";
  show.style.top = "7rem";
  show.style.left = "0";
  show.style.textAlign = "center";
  show.style.backgroundColor = "rgba(49, 65, 99, 0.39)";
  show.style.width = "100%";
  show.style.height = "30rem";
  show2.style.display = "block";
});
