// script.js
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.3 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// ✅ Fallback for mobile — make visible if already in viewport
window.addEventListener("load", () => {
  const faders = document.querySelectorAll(".fade-in");
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add("visible");
    }
  });
});






function openLightbox(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeLightbox(id) {
  document.getElementById(id).style.display = 'none';
}

function showImage(containerId, imgSrc, thumb) {
  const mainImg = document.querySelector(`#${containerId} .lightbox-main-img`);
  const thumbs = document.querySelectorAll(`#${containerId} .lightbox-thumbs img`);
  mainImg.src = imgSrc;
  thumbs.forEach(img => img.classList.remove('active'));
  if (thumb) thumb.classList.add('active');
}



  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
		
      navbar.classList.toggle("show");
	  console.log("Menu toggled");
    });
  });
  




