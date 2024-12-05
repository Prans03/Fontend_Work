var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var image = document.querySelector(".can-back");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "back.out",
  });
});

image.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "LUND LO"; //! if you want to change the cursor value when it comes inside
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#F9F9F9",
  });
});

image.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "red",
  });
});
