const swiper = new Swiper(".mySwiper", {
  rewind: true,
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var image = document.querySelector(".overlay");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "Saurabh"; //! if you want to change the cursor value when it comes inside
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "grey",
  });
});

image.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "red",
  });
});
