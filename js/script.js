document.addEventListener("DOMContentLoaded", function () {
  // Select all nav links
  const navLinks = document.querySelectorAll(".nav-link");

  // Get the current page path (without domain)
  const currentPath = window.location.pathname.split("/").pop(); // Extracts the filename

  // Loop through nav links and set active class
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// index swiper
let indexSwiper = new Swiper(".index-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  zoom: true,
});
// odometer.js
document.addEventListener("DOMContentLoaded", function () {
  let counters = document.querySelectorAll(".counter");

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let counter = entry.target;
          let targetValue = parseInt(counter.getAttribute("data-count"), 10);

          counter.innerHTML = 0; // Reset to 0 before animation

          setTimeout(() => {
            counter.innerHTML = targetValue; // Start Odometer animation
          }, 500);

          observer.unobserve(counter); // Stop observing after it runs once
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  counters.forEach((counter) => observer.observe(counter));
});
//   gallery swiper
let swiper = new Swiper(".gallerySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
  },
});
// Testimonial Swiper - Moves in Opposite Direction
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  loopedSlides: 6, // match the actual number of slides
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  rtl: true,
  direction: "horizontal",
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

window.addEventListener("load", () => {
  testimonialSwiper.update();
});

// index counter and parallax
document.addEventListener("DOMContentLoaded", function () {
  // Select the counters and geometry element
  let counters = document.querySelectorAll(".index-parallax-counter .odometer");
  let geometryElement = document.querySelector(
    ".index-parallax-counter .geometry-5"
  );

  // Create an IntersectionObserver to trigger animation on scroll
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let target = entry.target;
          if (target.classList.contains("odometer")) {
            let targetValue = parseInt(target.getAttribute("data-count"), 10);
            target.innerHTML = targetValue; // Set the target count
          } else if (target === geometryElement) {
            target.classList.add("animate"); // Start the animation for geometry
          }
          observer.unobserve(target); // Stop observing once it has animated
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the element is visible

  // Observe the counters and geometry element
  counters.forEach((counter) => observer.observe(counter));
  if (geometryElement) observer.observe(geometryElement);
});
// brands swiper
var brandsSwiperOne = new Swiper(".brands-swiper .swiper-one", {
  spaceBetween: 0,
  speed: 5000,
  direction: "horizontal",
  autoplay: { delay: 0, reverseDirection: false },
  loop: true,
  slidesPerView: 1,
  freeMode: true,

  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
});

var brandsSwiperTwo = new Swiper(".brands-swiper .swiper-two", {
  spaceBetween: 0,
  speed: 5000,
  direction: "horizontal",
  autoplay: { delay: 0, reverseDirection: true },
  loop: true,
  slidesPerView: 1,
  freeMode: true,

  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
});
// navbar scroll behaviour
$(document).ready(function () {
  const mainNavbar = $(".navbar:first");
  const secondaryNavbar = $(".secondary-navbar");
  const scrollTrigger = 100;

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > scrollTrigger) {
      mainNavbar.addClass("navbar-hidden");
      secondaryNavbar.removeClass("d-none").addClass("visible");
    } else {
      mainNavbar.removeClass("navbar-hidden");
      secondaryNavbar.addClass("d-none").removeClass("visible");
    }
  });
});
// services carousel image change on click
document.addEventListener("DOMContentLoaded", function () {
  const allSmallImageContainers = document.querySelectorAll(
    ".small-images-container"
  );

  allSmallImageContainers.forEach((container) => {
    const carouselName = container.getAttribute("data-carousel");
    const largeImage = document.querySelector(
      `.img-carousel[data-carousel="${carouselName}"] .large-image`
    );
    const smallImages = container.querySelectorAll(".small-image");

    smallImages.forEach((smallImage) => {
      smallImage.addEventListener("click", function () {
        const tempSrc = largeImage.src;

        largeImage.classList.add("fade-out");

        setTimeout(() => {
          largeImage.src = smallImage.src;
          smallImage.src = tempSrc;

          largeImage.classList.remove("fade-out");
          largeImage.classList.add("fade-in");

          setTimeout(() => {
            largeImage.classList.remove("fade-in");
          }, 500);
        }, 300);
      });
    });
  });
});
// smooth scroll offset

document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM fully loaded");

  const navLinks = document.querySelectorAll(
    'a[href^="#"], a[href^="services.html#"]'
  );

  console.log(`📌 Found ${navLinks.length} nav links starting with #`);

  // Set offsets manually — tweak these to your layout
  const primaryNavbarOffset = 250;
  const secondaryNavbarOffset = 250;

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      console.log(`🧭 Clicked link with href: ${href}`);

      // Ignore non-anchor links (like index.html, about.html)
      if (!href.startsWith("#")) {
        console.log("⛔ Not a section link. Skipping smooth scroll.");
        return;
      }

      e.preventDefault();

      const targetElement = document.querySelector(href);
      if (!targetElement) {
        console.warn(`⚠️ Element with selector ${href} not found.`);
        return;
      }

      console.log(`✅ Target element found:`, targetElement);

      const secondaryNavbar = document.querySelector(".secondary-navbar");
      const isSecondaryFixed =
        secondaryNavbar &&
        secondaryNavbar.classList.contains("fixed-top") &&
        getComputedStyle(secondaryNavbar).display !== "none";

      console.log(
        `🔍 Secondary navbar fixed: ${isSecondaryFixed ? "Yes" : "No"}`
      );

      const currentOffset = isSecondaryFixed
        ? secondaryNavbarOffset
        : primaryNavbarOffset;

      console.log(`📏 Using offset: ${currentOffset}px`);

      const targetPosition = targetElement.offsetTop;
      const scrollTo = targetPosition - currentOffset;

      console.log(
        `📍 Scrolling to: ${scrollTo} (target top: ${targetPosition})`
      );

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    });
  });
});
// add title to all images
let images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].setAttribute("title", "Demo Printz");
}
