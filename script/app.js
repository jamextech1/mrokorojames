const projects = [
  // project 15
  {
    projectImg: `<img src="./images/project-15.png"/ class="projectImg">`,
    projectsTitle: "Shopping Get Product",
    projectDesc:
      "Search and buy your favorite products here, this project is almost a full fledged website",
    projectLink: "https://shopping-gpt.netlify.app/",
  },

  // project 1
  {
    projectImg: `<img src="./images/project-12.jpg"/ class="projectImg">`,
    projectsTitle: "JNetflix",
    projectDesc:
      "JNetflix is a movie website, that you can search and view the information of any movie you like, Built using ReactJs.",
    projectLink: "https://jnetflixmovie.netlify.app/",
  },
  // project 2
  {
    projectImg: `<img src="./images/project-14.png"/ class="projectImg">`,
    projectsTitle: "Fintech",
    projectDesc: "Fintech Landing single pageg website, built using ReactJs",
    projectLink: "https://fintechapp.vercel.app/",
  },
  // project 3
  {
    projectImg: `<img src="./images/project-2.png"/ class="projectImg">`,
    projectsTitle: "News Landing Page",
    projectDesc: "News Landing Page built using html,css,and javascript",
    projectLink: "https://james-news-landing-page-project.netlify.app/",
  },
  // project 4
  {
    projectImg: `<img src="./images/project-7.png"/ class="projectImg">`,
    projectsTitle: "Url Shortner",
    projectDesc: "This website helps you shorten your long url.",
    projectLink: "https://james-shortlify.netlify.app/",
  },
  // project 5
  {
    projectImg: `<img src="./images/project-11.jpg"/ class="projectImg">`,
    projectsTitle: "Search country",
    projectDesc:
      "With this website, you can search and locate and as well see the details of any country of your choice",
    projectLink: "https://dev-get-country.netlify.app/",
  },
  // project 6
  {
    projectImg: `<img src="./images/project-9.png"/ class="projectImg">`,
    projectsTitle: "Dictionary Web App",
    projectDesc:
      "With this website, you can search and know the meaning of any word.",
    projectLink: "https://james-dictionary-web.netlify.app/",
  },
  // project 7
  {
    projectImg: `<img src="./images/project-1.png"/ class="projectImg">`,
    projectsTitle: "Soft Pinko Website",
    projectDesc: "Soft Pinko Landing Page Website.",
    projectLink: "https://james-soft-pinko-project.netlify.app/",
  },
  // project 8
  {
    projectImg: `<img src="./images/project-4.png"/ class="projectImg">`,
    projectsTitle: "Easy Banking Website",
    projectDesc: "This is Easy Banking Landing Page Website.",
    projectLink: "https://james-easybank-project-1.netlify.app/",
  },
  // project 9
  {
    projectImg: `<img src="./images/project-5.png"/ class="projectImg">`,
    projectsTitle: "Tip Calculator",
    projectDesc: "This website helps you with Tip calculations.",
    projectLink: "https://james-tip-calc.netlify.app/",
  },
  // project 10
  {
    projectImg: `<img src="./images/project-6.png"/ class="projectImg">`,
    projectsTitle: "Github Users",
    projectDesc:
      "This website helps you to search and get users info in github, using their usernames.",
    projectLink: "https://git-users-info-api.netlify.app/",
  },
  // project 11
  {
    projectImg: `<img src="./images/project-8.png"/ class="projectImg">`,
    projectsTitle: "News Website",
    projectDesc:
      "This website updates you with news of different categories, giving you informations of various happenings in the world.",
    projectLink: "https://theprimenews.netlify.app/",
  },
  // project 12
  {
    projectImg: `<img src="./images/project-10.jpg"/ class="projectImg">`,
    projectsTitle: "Fintekk Landing Page",
    projectDesc:
      "This is Fintekk landing page website, diffrent from Fintech landing page webiste.",
    projectLink: "https://jamex-fintekk-project.netlify.app/",
  },
  // project 13
  {
    projectImg: `<img src="./images/project-13.jpg"/ class="projectImg">`,
    projectsTitle: "Gp Website",
    projectDesc: "This is GP Landing Page Website.",
    projectLink: "https://gp-bootstrap-project.netlify.app/",
  },
  // project 14
  {
    projectImg: `<img src="./images/project-3.png"/ class="projectImg">`,
    projectsTitle: "Bookmark",
    projectDesc: "This is Bookmark Landing Page Website.",
    projectLink: "https://james-bookmark-landing-page-project.netlify.app/",
  },
];
//
//code for handling the displaying projects
const allProjects = document.querySelector(".projects__second__row");
projects.map((project) => {
  allProjects.innerHTML += `
  
  <div class="col-9 col-md-4 col-lg-3 shadow project__card">
  ${project.projectImg}
  <div class="project__context">
  <div class="project__title text-danger">${project.projectsTitle}</div>
  <div class="project__desc">${project.projectDesc}</div>
  <a class="project__link bg-danger" target="_blank" href=${project.projectLink}>Live Preview</a>
  </div>
  </div>
  
  `;
});
//
// show more projects function
const show__more = document.querySelector(".show__more__btn");
const showMoreProjects = () => {
  if (!allProjects.className.includes("ghh")) {
    console.log("nope");
  }
  allProjects.classList.toggle("toggle__show__more");
  //
  // check for text
  if (allProjects.className.includes("toggle__show__more")) {
    show__more.textContent = "Show Less";
  } else {
    show__more.textContent = "Show More";
  }
};
show__more.addEventListener("click", showMoreProjects);
//
//
//
/*==============*/
/*TYPED JS CODE*/
/*============*/
let typed = new Typed(".typing-effect", {
  strings: ["", "Frontend Developer", "Software Developer"],
  backSpeed: "9",
  typeSpeed: "9",
  loop: true,
});
/*==============*/
/*NAVBAR TOGGLE CODE*/
/*============*/
const navLinks = document.querySelector(".nav__logo__links");
const toggler = document.querySelector(".hamburger");
const toggler_div = document.querySelectorAll(".burger");
const nav__link = document.querySelectorAll(".nav__link");
const toggleNav = (e) => {
  toggler_div.forEach((togglerDiv) => {
    togglerDiv.classList.toggle("nav__toggle");
  });
  navLinks.classList.toggle("nav__toggle");
};
toggler.addEventListener("click", toggleNav);
nav__link.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.classList.remove("nav__toggle");
    toggler_div.forEach((togglerDiv) => {
      togglerDiv.classList.remove("nav__toggle");
    });
  });
});
/*==============*/
/*BACK TO TOP BTN CODE*/
/*============*/
const to__top__btn = document.querySelector(".back__to__top");
to__top__btn.addEventListener("click", () => {
  scrollTo(0, 0);
});
//

window.addEventListener("scroll", () => {
  if (window.scrollY >= 380) {
    to__top__btn.classList.add("toggle__back__to__top");
  } else if (window.scrollY < 380) {
    to__top__btn.classList.remove("toggle__back__to__top");
  }
});
