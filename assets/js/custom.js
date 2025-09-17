

// locomotive scroll
document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.8, // scroll speed (increase for faster, decrease for smoother)
  });
});

 
// sticky header
const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});


// image hover scroll
window.addEventListener("load", function () {
  var containers = document.querySelectorAll(".figmacard--work");

  containers.forEach(function (container) {
    var img = container.querySelector(".figmaiagepreview img");
    if (!img) return;

    var imageHeight = img.naturalHeight;
    container.style.height = "400px";

    function scrollImageToBottom() {
      var scrollAmount = Math.max(0, imageHeight - container.clientHeight);
      var speed = 300; // px per second (adjust for faster/slower)
      var duration = scrollAmount / speed;

      img.style.transition = `transform ${duration}s linear`;
      img.style.transform = `translateY(-${scrollAmount}px)`;
    }

    function scrollImageToTop() {
      var scrollAmount = Math.max(0, imageHeight - container.clientHeight);
      var speed = 3500; // same speed back up
      var duration = scrollAmount / speed;

      img.style.transition = `transform ${duration}s linear`;
      img.style.transform = "translateY(0)";
    }

    container.addEventListener("mouseenter", scrollImageToBottom);
    container.addEventListener("mouseleave", scrollImageToTop);

    container.addEventListener("click", function () {
      var modalImg = document.getElementById("figimage");
      if (modalImg) modalImg.src = img.src;
    });
  });
});





// divs displays
 
$(function () {
  function setupLoadMore(sectionClass, loadMoreBtn, loadLessBtn) {
    const $cards = $(sectionClass);
    const $loadMore = $(loadMoreBtn);
    const $loadLess = $(loadLessBtn);

    // Initial state
    $cards.slice(0, 4).show();
    $loadLess.hide();

    // Load More
    $loadMore.on("click", function (e) {
      e.preventDefault();
      let hidden = $cards.filter(":hidden").slice(0, 4).slideDown();

      if (hidden.length) {
        $("html, body").animate(
          { scrollTop: hidden.last().offset().top - 100 },
          800
        );
      }

      // Always show Load Less once expanded
      $loadLess.fadeIn("slow");

      // If no more hidden cards, hide Load More
      if ($cards.filter(":hidden").length === 0) {
        $loadMore.hide();
      }
    });

    // Load Less
    $loadLess.on("click", function (e) {
      e.preventDefault();
      $cards.not(":lt(4)").fadeOut();

      $loadMore.fadeIn("slow"); // re-show Load More
      $loadLess.hide(); // hide Load Less when collapsed

      $("html, body").animate(
        { scrollTop: $cards.first().offset().top - 250 },
        800
      );
    });
  }

  // Apply to both sections
  setupLoadMore(".displymorecard", "#loadMore", "#loadLess");
  setupLoadMore(".websitemorecard", "#loadMore1", "#loadLess1");
});


// gasp
// Wrap everything to avoid conflicts
 

(function () {
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".educationsec",
        start: "top 80%",
      }
    });

    tl.to(".educationsec", { "--beforeY": "0%", duration: 1.5, ease: "power3.out" })
      .to(".educationsec", { "--afterY": "0%", duration: 1.5, ease: "power3.out" }, "-=1");
  }
})(); 