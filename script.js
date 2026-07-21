/* ================================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach((element) => {

  observer.observe(element);

});


/* ================================
   PORTFOLIO CLICK EFFECT
================================ */

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

  project.addEventListener("click", () => {

    const title = project.dataset.title;

    const description = project.dataset.description;

    alert(
      title +
      "\n\n" +
      description
    );

  });

});
3. index.html

This is your HOME PAGE.

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>The Reel Project</title>

<link rel="stylesheet" href="style.css">

</head>


<body>


<header>

<div class="nav-wrap">

<div class="brand">

<img src="assets/logo.png" alt="The Reel Project logo">

<span>the reel project</span>

</div>


<nav>

<ul>

<li>
<a href="index.html" class="active">
home
</a>
</li>

<li>
<a href="about.html">
about us
</a>
</li>

<li>
<a href="services.html">
services
</a>
</li>

<li>
<a href="contact.html">
contact
</a>
</li>

</ul>

</nav>

</div>

</header>



<main class="page hero">


<!-- YOUR CUSTOM WELCOME IMAGE -->

<img
src="assets/hero.png"
alt="welcome to the reel project"
class="hero-welcome"
>


<!-- HERO STARS -->

<img
src="assets/stars.png"
class="hero-star star-one"
alt=""
>

<img
src="assets/stars.png"
class="hero-star star-two"
alt=""
>


<!-- CAMERA -->

<img
src="assets/cameria.png"
class="hero-camera"
alt=""
>


<!-- MAIN LOGO -->

<img
src="assets/logo.png"
class="hero-logo reveal"
alt="The Reel Project"
>


<!-- SCRIPT -->

<div class="hero-script reveal">

your new
<br>

creative consultant

</div>


<p class="hero-description reveal">

We're a student-run creative studio helping local businesses
build beautiful brands and stronger digital presences.

</p>


</main>



<footer>

<div class="footer-logo">

the reel project

</div>

<p>

© 2026 the reel project · made with care

</p>

</footer>


<script src="script.js"></script>

</body>

</html>
