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