gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: () => "+=" + document.querySelector(".container").offsetWidth,
  },
});

let player = document.getElementById("firstLottie");

player.addEventListener("ready", () => {
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
});

function setupScrollAnimation(targetSelector) {
  var targetElement = document.querySelector(targetSelector);
  var animationExecuted = false;
  var scrollHeight = parseInt(targetElement.dataset.scrollHeight, 10) || 0;
  var initialPosition;

  // Définissez différentes configurations d'animation.
  var animationConfigurations = {
    Animation9999: {
      targets: targetSelector + " input",
      value: [0, 9999],
      round: 1,
      easing: "easeInOutExpo",
      autoplay: false,
    },
    Animation500: {
      targets: targetSelector + " input",
      value: [0, 500],
      round: 1,
      easing: "easeInOutExpo",
      autoplay: false,
    },

    Animation100: {
      targets: targetSelector + " input",
      value: [0, 100],
      round: 1,
      easing: "easeInOutExpo",
      autoplay: false,
      targets: targetSelector + " input",
      translateX: 250,
      translateY: 250,
    },
    AnimationBidon: {
      targets: targetSelector + " input",
      easing: "easeInOutExpo",
      autoplay: false,
      translateX: 250,
      translateY: 250,
    },
  };

  // Ajoutez un écouteur d'événements pour le défilement de la fenêtre.

  window.addEventListener("scroll", function () {
    // Vérifiez si l'utilisateur a fait défiler jusqu'à l'élément spécifié et si l'animation n'a pas encore été exécutée.
    if (window.scrollY > scrollHeight && !animationExecuted) {
      targetElement.classList.remove("hidden");

      var animationName = targetElement.dataset.animationName || "default";
      var animationConfig = animationConfigurations[animationName];

      // Si la configuration d'animation est définie, jouez l'animation.
      if (animationConfig) {
        initialPosition = anime.get(
          targetSelector + " input",
          "translateX",
          "translateY"
        );
        anime(animationConfig).play();
      } else {
        console.log("Type d'animation non reconnu");
      }

      // Marquez que l'animation a été exécutée.
      animationExecuted = true;
    } else if (window.scrollY <= scrollHeight && animationExecuted) {
      // Ajoutez la classe "hidden" pour masquer l'élément lorsque l'utilisateur fait défiler vers le haut.
      targetElement.classList.add("hidden");

      // Arrêtez l'animation lorsque l'utilisateur fait défiler vers le haut.
      // Notez que le type d'animation doit être récupéré à nouveau ici pour être utilisé correctement.
      var animationName = targetElement.dataset.animationName || "default";
      anime(animationConfigurations[animationName]).pause();

      anime.set(targetSelector + " input", { translateX: initialPosition });
      anime.set(targetSelector + " input", { translateY: initialPosition });

      // Marquez que l'animation n'est plus en cours d'exécution.
      animationExecuted = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Appel à la fonction une fois que le DOM est prêt
  // Utilisez la fonction avec le sélecteur spécifique.
  setupScrollAnimation("#animation");
  setupScrollAnimation("#animation2");
  setupScrollAnimation("#animation3");
  setupScrollAnimation("#animation4");
});
