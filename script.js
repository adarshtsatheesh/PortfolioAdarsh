// Animated Text Hero Section
document.addEventListener('DOMContentLoaded', function(){
  const typed = document.querySelector('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
});

// Cursor
const cursorBig = document.querySelector('.big');
const cursorSmall = document.querySelector('.small');

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorBig.style.top = `${mouseY}px`;
  cursorBig.style.left = `${mouseX}px`;
  cursorSmall.style.top = `${mouseY}px`;
  cursorSmall.style.left = `${mouseX}px`;
};

window.addEventListener('mousemove', positionElement);

// Change cursor size on link hover
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursorBig.style.display = 'none';
    cursorSmall.style.display = 'block';
  });

  link.addEventListener('mouseleave', () => {
    cursorBig.style.display = 'block';
    cursorSmall.style.display = 'none';
  });
});




