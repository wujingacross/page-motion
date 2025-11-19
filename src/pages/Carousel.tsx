import { useEffect } from "react";
import Transition from "../components/Transition";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create(
  "hop",
  "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.541,1 1,1"
);

const carouselSlides = [
  { title: "Feast of Color", image: "https://picsum.photos/id/222/1920/1080" },
  { title: "The Matador", image: "https://picsum.photos/id/2/1920/1080" },
  { title: "Final Plea", image: "https://picsum.photos/id/3/1920/1080" },
  { title: "Old Philosopher", image: "https://picsum.photos/id/4/1920/1080" },
  { title: "Evening Waltz", image: "https://picsum.photos/id/5/1920/1080" },
];

const Carousel = Transition(() => {
  let carousel, carouselImages, prevBtn, nextBtn;

  let currentIndex = 0;
  let carouselTextElements = [];
  let splitTextIntances = [];
  let isAnimating = false;

  function createCarouselTitles() {
    console.log("createCarouselTitles");
    carouselSlides.forEach((slide) => {
      const slideTitleContainer = document.createElement("div");
      slideTitleContainer.classList.add("slide-title-container");

      const slideTitle = document.createElement("h1");
      slideTitle.classList.add("title");
      slideTitle.textContent = slide.title;

      slideTitleContainer.appendChild(slideTitle);
      carousel.appendChild(slideTitleContainer);

      carouselTextElements.push(slideTitleContainer);
    });
  }

  function createInitialSlide() {
    console.log("createInitialSlide");
    const initialSlideImgContainer = document.createElement("div");
    initialSlideImgContainer.classList.add("img");

    const initialSlideImg = document.createElement("img");
    initialSlideImg.src = carouselSlides[0].image;

    initialSlideImgContainer.appendChild(initialSlideImg);
    carouselImages.appendChild(initialSlideImgContainer);
  }

  function bindCarouselControls() {
    console.log("bindCarouselControls");
    nextBtn.addEventListener("click", () => {
      if (isAnimating) return;
      currentIndex = (currentIndex + 1) % carouselSlides.length;
      animateSlide("right");
    });

    prevBtn.addEventListener("click", () => {
      if (isAnimating) return;
      currentIndex = (currentIndex - 1) % carouselSlides.length;
      animateSlide("left");
    });
  }

  function splitTitles() {
    console.log("splitTitles", carouselTextElements);
    carouselTextElements.forEach((slide) => {
      const slideTitle = slide.querySelector(".title");
      const splitText = new SplitText(slideTitle, {
        type: "words",
        wordsClass: "word",
      });
      splitTextIntances.push(splitText);
    });
  }

  function initFirstSlide() {
    console.log("initFirstSlide", carouselTextElements);
    const initialSlideWords = carouselTextElements[0].querySelectorAll(".word");
    gsap.to(initialSlideWords, {
      filter: "blur(0px)",
      opacity: 1,
      duration: 2,
      ease: "power3.out",
    });
  }

  function updateActiveTextSlide() {
    console.log("updateActiveTextSlide", carouselTextElements);
    // gsap.to(_, {
    //        filter: "blur(0px)",
    //       opacity: 0,
    //       duration: 2.5,
    //       ease: "power1.out",
    //       overwrite: true,
    //     })

    const currentWords =
      carouselTextElements[currentIndex].querySelectorAll(".word");
    gsap.to(currentWords, {
      filter: "blur(0px)",
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      overwrite: true,
      onComplete: () => {
        gsap.set(currentWords, {
          filter: "blur(0px)",
          opacity: 1,
        });
      },
    });
  }

  function animateSlide(direction) {
    console.log("animateSlide", isAnimating);
    if (isAnimating) return;
    isAnimating = true;

    const viewportWidth = window.innerWidth;
    const slideOffset = Math.min(viewportWidth * 0.5, 500);

    const currentSlide = carouselImages.querySelector(".img:last-child");
    const currentSlideImage = currentSlide.querySelector("img");

    const newSlideImgContainer = document.createElement("div");
    newSlideImgContainer.classList.add("img");

    const newSlideImg = document.createElement("img");
    newSlideImg.src = carouselSlides[currentIndex].image;

    gsap.set(newSlideImg, {
      x: direction === "left" ? -slideOffset : slideOffset,
    });

    newSlideImgContainer.appendChild(newSlideImg);
    carouselImages.appendChild(newSlideImgContainer);

    gsap.to(currentSlideImage, {
      x: direction === "left" ? slideOffset : -slideOffset,
      duration: 1.5,
      ease: "hop",
    });

    gsap.fromTo(
      newSlideImgContainer,
      {
        clipPath:
          direction === "left"
            ? "polygon(0% 0%, 0% 0%, 0% 100%,0% 100%)"
            : "polygon(100% 0%, 100% 0%, 100% 100%,100% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)",
        duration: 1.5,
        ease: "hop",
        onComplete: () => {
          cleanupCarouselSlides();
          isAnimating = false;
        },
      }
    );

    gsap.to(newSlideImg, {
      x: 0,
      duration: 1.5,
      ease: "hop",
    });

    updateActiveTextSlide();
  }

  function cleanupCarouselSlides() {
    console.log("cleanupCarouselSlides", carouselImages);
    const imgElements = carouselImages.querySelectorAll(".img");
    if (imgElements.length > 1) {
      for (let i = 0; i < imgElements.length - 1; i++) {
        imgElements[i].remove();
      }
    }
  }

  function initCarousel() {
    console.log("initCarousel");
    carousel = document.querySelector(".carousel");
    carouselImages = document.querySelector(".carousel-images");
    prevBtn = document.querySelector(".prev-btn");
    nextBtn = document.querySelector(".next-btn");

    createCarouselTitles();
    createInitialSlide();
    bindCarouselControls();

    document.fonts.ready.then(() => {
      console.log("document.fonts.ready");
      splitTitles();
      initFirstSlide();
    });
  }

  useEffect(() => {
    initCarousel();
    // document.addEventListener("DOMContentLoaded", initCarousel);
  }, []);

  return (
    <>
      <div className="carousel">
        <div className="carousel-images"></div>
      </div>

      <div className="slider-controls">
        <button className="control-btn prev-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="red"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
        </button>
        <button className="control-btn next-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="red"
          >
            <path d="M647-440H160v-80h487L423-744157-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </button>
      </div>
    </>
  );
});

export default Carousel;
