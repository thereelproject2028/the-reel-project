const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e) {

  if (!cursor) return;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});


const interactiveElements =
  document.querySelectorAll(
    "a, button, input, textarea, .project"
  );

interactiveElements.forEach(function(element) {

  element.addEventListener(
    "mouseenter",
    function() {

      if (cursor) {
        cursor.classList.add("hover");
      }

    }
  );

  element.addEventListener(
    "mouseleave",
    function() {

      if (cursor) {
        cursor.classList.remove("hover");
      }

    }
  );

});


/* CLICK SPARKLES */

document.addEventListener(
  "click",
  function(e) {

    const symbols = [
      "✦",
      "✧",
      "♡",
      "✿"
    ];

    const sparkle =
      document.createElement("span");

    sparkle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];

    sparkle.style.position =
      "fixed";

    sparkle.style.left =
      e.clientX + "px";

    sparkle.style.top =
      e.clientY + "px";

    sparkle.style.color =
      "#992339";

    sparkle.style.fontSize =
      "22px";

    sparkle.style.pointerEvents =
      "none";

    sparkle.style.zIndex =
      "9999";

    sparkle.style.animation =
      "sparkleFloat .8s ease-out forwards";

    document.body.appendChild(
      sparkle
    );

    setTimeout(
      () => sparkle.remove(),
      800
    );

  }
);


/* SCROLL REVEAL */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );

const observer =
  new IntersectionObserver(
    function(entries) {

      entries.forEach(
        function(entry) {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },
    {
      threshold: .15
    }
  );


revealElements.forEach(
  function(element) {

    observer.observe(element);

  }
);
