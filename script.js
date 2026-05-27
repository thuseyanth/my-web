// Mobile Menu Toggle
const mobileIcon = document.getElementById('mobileMenuIcon');
const navLinks = document.querySelector('.nav-links');

if (mobileIcon) {
  mobileIcon.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = 'rgba(255,255,255,0.98)';
      navLinks.style.padding = '2rem';
      navLinks.style.gap = '1.5rem';
      navLinks.style.boxShadow = '0 20px 35px -12px rgba(0,0,0,0.15)';
      navLinks.style.zIndex = '99';
    }
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a, #contactScrollBtn').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      if (window.innerWidth < 860 && navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      }
    }
  });
});

// Toast Notification Helper
const toast = document.getElementById('toastMsg');

function showToast(message, isError = false) {
  toast.innerHTML = message;
  toast.style.opacity = '1';
  if (isError) {
    toast.style.background = '#c0392b';
  } else {
    toast.style.background = '#004e7c';
  }
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.background = '#004e7c';
  }, 3000);
}

// Discover Button Handler
const discoverBtn = document.getElementById('discoverBtn');
if (discoverBtn) {
  discoverBtn.addEventListener('click', () => {
    showToast('📘 BOSS product catalog & brochure → request sent successfully.');
  });
}

// Contact Form Handler
const contactForm = document.getElementById('bossContactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!name || !email || !email.includes('@')) {
      showToast('⚠️ Please provide full name and valid business email.', true);
      return;
    }
    
    showToast('✅ Inquiry received! BOSS chemical expert will respond within 12 hours.');
    contactForm.reset();
  });
}

// Dynamic Footer Year
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
  const year = new Date().getFullYear();
  footerYear.innerHTML = `© ${year} BOSS Chemicals. All rights reserved. | Smart Chemistry for a Cleaner Future`;
}

// Scroll Animation for Stats (Intersection Observer)
const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
  const observerOptions = { threshold: 0.4, rootMargin: '0px' };
  let animated = false;
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        // Simple counter animation for first stat number
        const firstStat = statNumbers[0];
        if (firstStat && firstStat.innerText === '15+') {
          // Already has value, skip animation or do decorative
        }
      }
    });
  }, observerOptions);
  
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) statsObserver.observe(aboutSection);
}

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navAnchors = document.querySelectorAll('.nav-links a');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navAnchors.forEach(anchor => {
    anchor.style.color = '';
    if (anchor.getAttribute('href') === `#${current}`) {
      anchor.style.color = '#009f6b';
    }
  });
});