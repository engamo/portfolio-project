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

  // let ham = document.getElementById('hamburger')
  // function openIcon(){
  //   ham.classList.add('w-[100%]');
  // }
  // function closeIcon(){
  //   ham.classList.remove('w-[100%]');
  // }

  function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = 'close', list.classList.add('top-[80px]') , list.classList.add('opacity-100')) : (e.name = 'menu', list.classList.remove('top-[80px]'), list.classList.add('opacity-100'))
  }

