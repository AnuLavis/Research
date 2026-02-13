
// Basic interactivity: mobile menu, year, simple validation
const nav = document.getElementById('primary-nav');
const toggle = document.querySelector('.menu-toggle');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Contact form client-side validation demo
const form = document.getElementById('contact-form');
if (form){
  form.addEventListener('submit', (e) => {
    const ok = form.checkValidity();
    if(!ok){
      e.preventDefault();
      alert('Please complete all required fields.');
    }
  });
}

// OPTIONAL: GA4 via gtag.js (uncomment and set your Measurement ID)
// const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
// if (GA_MEASUREMENT_ID){
//   const s = document.createElement('script');
//   s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
//   document.head.appendChild(s);
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);} ;
//   gtag('js', new Date());
//   gtag('config', GA_MEASUREMENT_ID);
// }
