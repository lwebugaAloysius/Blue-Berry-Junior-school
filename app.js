// OPENING AND CLOSING THE NAV BAR
const navToogleBtn = document.querySelector(".nav-toogle-btn");
const navLinksEnrollContainer = document.querySelector(
  ".nav-links-enroll-container",
);

navToogleBtn.addEventListener("click", () => {
  let navVisibility = navLinksEnrollContainer.getAttribute("data-navOpen");
  if (navVisibility == "false") {
    navToogleBtn.classList.add("nav-open");
    navLinksEnrollContainer.classList.add("nav-open");
    navLinksEnrollContainer.setAttribute("data-navOpen", "true");
  } else {
    navToogleBtn.classList.remove("nav-open");
    navLinksEnrollContainer.classList.remove("nav-open");
    navLinksEnrollContainer.setAttribute("data-navOpen", "false");
  }
});
// INTERSECTION OBSERVER THAT CHANGES BACKGROUND COLOR OF NAV BAR AS IT SCROOLS PAST THE HERO
const mainHeader = document.querySelector(".main-header");
const hero = document.querySelector(".hero");
const logoText = document.querySelector(".logo-text");

const heroObserverOptions = {
  rootMargin: "-100px 0px 0px 0px",
};
const heroObserver = new IntersectionObserver((entries, heroObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      mainHeader.classList.add("nav-scrolled");
      logoText.classList.add("nav-scrolled");
    } else {
      mainHeader.classList.remove("nav-scrolled");
      logoText.classList.remove("nav-scrolled");
    }
  });
}, heroObserverOptions);

heroObserver.observe(hero);

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// ----------------------STAFF MODAL FUNCTIONALITY---------------------------------------------------------------
const staffModal = document.querySelector(".staff-modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalOpenBtn = document.querySelector(".stuff-see-all-btn");

modalOpenBtn.addEventListener("click", () => {
  staffModal.showModal();
});
modalCloseBtn.addEventListener("click", () => {
  staffModal.close();
});
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

// -------------------------------------TESTIMONIAL CAROUSEL------------------------------------------------

const testimonialCarouselTrack = document.querySelector(
  ".testimonial-carousel-track",
);
const slides = [...document.querySelectorAll(".testimonial-carousel-slide")];
const carouselBtnLeft = document.querySelector(
  ".testimonial-carousel-control-btn-left",
);
const carouselBtnRight = document.querySelector(
  ".testimonial-carousel-control-btn-right",
);
const testimonialText = document.querySelector(".testimonial-text");
const testimonialAuthorName = document.querySelector(".carousel-author-name");
const testimonialAuthorRole = document.querySelector(".carousel-author-role");

const slideData = [
  {
    name: "Jessica Jones",
    role: "Parent",
    quote:
      "Blue Berry Junior School has truly transformed my child's learning journey. The teachers are caring, dedicated, and always willing to give individual attention. I have seen remarkable improvement not only in academic performance but also in confidence and discipline. Choosing this school was one of the best decisions we made for our child",
  },
  {
    name: "Mary Jane",
    role: "Parent",
    quote:
      "The teachers are supportive, patient, and truly committed to helping every student succeed. Over the years I have watched my child grow academically while also developing confidence and strong values. It is reassuring to know that my child is in a school that genuinely cares about each learner’s future.",
  },
  {
    name: "Ssemitego Agustine",
    role: "Parent",
    quote:
      "Our experience with this school has been nothing short of wonderful. The staff members are professional, attentive, and always encourage students to reach their full potential. Since joining the school, my child has become more motivated, disciplined, and enthusiastic about learning. We are proud to be part of such a supportive and inspiring school community.",
  },
];

let currentSlideIndex = 0;
let slidesTrackingValue = 1;

const moveSlide = (track, currentSlide, targetSlide) => {
  slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const changeTextBox = (dataSlideIndex) => {
  testimonialText.textContent = slideData[dataSlideIndex].quote;
  testimonialAuthorName.textContent = slideData[dataSlideIndex].name;
  testimonialAuthorRole.textContent = slideData[dataSlideIndex].role;
};

carouselBtnRight.addEventListener("click", () => {
  const currentSlide = testimonialCarouselTrack.querySelector(".current-slide");
  const targetSlide = currentSlide.nextElementSibling;
  if (currentSlide != testimonialCarouselTrack.lastElementChild) {
    changeTextBox(currentSlideIndex + 1);
    currentSlideIndex++;
    moveSlide(testimonialCarouselTrack, currentSlide, targetSlide);
    slidesTrackingValue++;
  }
});

carouselBtnLeft.addEventListener("click", () => {
  const currentSlide = testimonialCarouselTrack.querySelector(".current-slide");
  const targetSlide = currentSlide.previousElementSibling;
  if (currentSlide != testimonialCarouselTrack.firstElementChild) {
    changeTextBox(currentSlideIndex - 1);
    currentSlideIndex--;
    moveSlide(testimonialCarouselTrack, currentSlide, targetSlide);
    slidesTrackingValue--;
  }
});
