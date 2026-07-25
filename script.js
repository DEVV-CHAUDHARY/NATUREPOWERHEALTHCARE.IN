function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 75);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow =
      window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.3)' : '0 2px 20px rgba(0,0,0,0.2)';
  });