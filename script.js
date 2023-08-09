  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop
      });
    }
  }

  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);
    });
  });

 



  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.getElementById('menuIcon');
  let isMenuOpen = false;

  function onToggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      navLinks.classList.add('top-[9%]');
      menuIcon.setAttribute('name', 'close');
    } else {
      navLinks.classList.remove('top-[9%]');
      menuIcon.setAttribute('name', 'menu');
    }
  }

 
