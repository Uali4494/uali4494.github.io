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



const imageSets = {
  robot: ["images/robot1.jpg", "images/robot2.jpg", "images/robot3.jpg"],
  curtain: ["images/curtain1.jpg", "images/curtain2.jpg"]
};

let currentIndex = {
  robot: 0,
  curtain: 0
};


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





function nextImage(key) {
  currentIndex[key]++;
  if (currentIndex[key] >= imageSets[key].length) currentIndex[key] = 0;
  document.getElementById(`${key}-image`).src = imageSets[key][currentIndex[key]];
}

function prevImage(key) {
  currentIndex[key]--;
  if (currentIndex[key] < 0) currentIndex[key] = imageSets[key].length - 1;
  document.getElementById(`${key}-image`).src = imageSets[key][currentIndex[key]];
}
