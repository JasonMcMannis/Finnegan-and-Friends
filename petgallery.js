new Swiper(".swiper-container", {
    speed: 400, 
    spaceBetween: 100,
    effect: "cube", 
    loop: true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// Navigation physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.brand');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);
const speech = document.querySelector('.speech');
const sb1 = document.querySelector('.sb1');

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
    speech.classList.add("hide");
    sb1.classList.add("hide");
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
    speech.classList.remove("hide");
    sb1.classList.remove("hide");
  });