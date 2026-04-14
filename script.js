//scroll animation en las cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.tarjeta').forEach(el => observer.observe(el));



//video en las cards
const cards = document.querySelectorAll('.tarjeta');

cards.forEach(card => {
  const video = card.querySelector('video');
  if (!video) return;

  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

//navbar responsive
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}


//animacion dropdown menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const isOpen = menu.classList.contains('max-h-40');

    if (isOpen) {
      menu.classList.remove('max-h-40', 'opacity-100', 'translate-y-0');
      menu.classList.add('max-h-0', 'opacity-0', '-translate-y-2');
    } else {
      menu.classList.remove('max-h-0', 'opacity-0', '-translate-y-2');
      menu.classList.add('max-h-40', 'opacity-100', 'translate-y-0');
    }
  }