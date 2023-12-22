// LottieInteractivity.create({
//   mode: "scroll",
//   player: "#LottiePlay1",
//   actions: [
//     {
//       visibility: [0, 1],
//       type: "play",
//     },
//   ],
// });

// LottieInteractivity.create({
//   mode: "scroll",
//   player: "#LottiePlay2",
//   actions: [
//     {
//       visibility: [0, 1],
//       type: "play",
//     },
//   ],
// });

// LottieInteractivity.create({
//   mode: "scroll",
//   player: "#LottiePlay3",
//   actions: [
//     {
//       visibility: [0, 1],
//       type: "play",
//     },
//   ],
// });

LottieInteractivity.create({
  mode: "scroll",
  player: "#LottiePlay4",
  actions: [
    {
      visibility: [0.4, 0.42],
      type: "play",
    },
  ],
});
LottieInteractivity.create({
  mode: "scroll",
  player: "#LottiePlay5",
  actions: [
    {
      visibility: [0.3, 0.32],
      type: "play",
    },
  ],
});
LottieInteractivity.create({
  mode: "scroll",
  player: "#LottiePlay6",
  actions: [
    {
      visibility: [0.3, 0.32],
      type: "play",
    },
  ],
});

LottieInteractivity.create({
  mode: "scroll",
  player: "#firstLottie",
  actions: [
    {
      visibility: [0.3, 0.7],
      type: "seek",
      frames: [0, 300],
    },
  ],
});

function createLottieInteractivity(elementId) {
  var animationElement = document.getElementById(elementId);

  if (animationElement) {
    // Vérifiez si l'élément avec l'ID existe avant de créer l'interaction
    LottieInteractivity.create({
      player: "#" + elementId,
      mode: "scroll",
      actions: [
        {
          visibility: [0.3, 0.51],
          type: "play",
        },
      ],
    });
  }
}
createLottieInteractivity("LottiePlay7");
createLottieInteractivity("LottiePlay8");
createLottieInteractivity("LottiePlay9");

function setupScrollAnimation(targetSelector) {
  // Définissez différentes configurations d'animation.
  var animationConfigurations = {
    AnimationLeft: {
      targets: targetSelector,
      easing: "easeInOutExpo",
      autoplay: false,
      translateX: 250,
    },

    AnimationRight: {
      targets: targetSelector,
      easing: "easeInOutExpo",
      autoplay: false,
      translateX: -250,
    },

    Animation30: {
      targets: "#animation30", // Use the correct ID
      innerHTML: [0, 30],
      easing: "linear",
      round: 1,
      update: function (anim) {
        document.querySelector(targetSelector).textContent =
          anim.animations[0].currentValue + "%";
      },
    },
    Animation43: {
      targets: "#animation43", // Use the correct ID
      innerHTML: [0, 43],
      easing: "linear",
      round: 1,
      update: function (anim) {
        document.querySelector(targetSelector).textContent =
          anim.animations[0].currentValue + "%";
      },
    },
    Animation74: {
      targets: "#animation74", // Use the correct ID
      innerHTML: [0, 74],
      easing: "linear",
      round: 1,
      update: function (anim) {
        document.querySelector(targetSelector).textContent =
          anim.animations[0].currentValue + "%";
      },
    },
    Animation84: {
      targets: "#animation84", // Use the correct ID
      innerHTML: [0, 84],
      easing: "linear",
      round: 1,
      update: function (anim) {
        document.querySelector(targetSelector).textContent =
          anim.animations[0].currentValue + "%";
      },
    },
    Animation45: {
      targets: "#animation45", // Use the correct ID
      innerHTML: [0, 45],
      easing: "linear",
      round: 1,
      update: function (anim) {
        document.querySelector(targetSelector).textContent =
          anim.animations[0].currentValue + "%";
      },
    },
  };

  var targetElement = document.querySelector(targetSelector);

  // Check if the target element exists before proceeding
  if (!targetElement) {
    console.error("Target element not found for selector:", targetSelector);
    return;
  }

  var animationExecuted = false;
  var scrollHeight = parseInt(targetElement.dataset.scrollHeight, 10) || 0;
  var initialPosition = anime.get(
    targetSelector + " input",
    "translateX",
    "translateY"
  );

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollHeight && !animationExecuted) {
      targetElement.classList.remove("hidden");

      var