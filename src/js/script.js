// Navbar Fixed
window.onscroll = function (){
const header = document.querySelector('header');
const fixedNav = header.offsetTop;
const toTop = document.querySelector('#to-top');


if (window.pageYOffset > fixedNav) {
  header.classList.add('navbar-fixed');
  toTop.classList.remove('hidden');
  toTop.classList.add('flex');
} else {
  header.classList.remove('navbar-fixed');
  toTop.classList.remove('flex');
  toTop.classList.add('hidden');
}
};



// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});


//* Form contact emailjs

const form = document.getElementById('contact-form');
const toastContainer = document.getElementById('toast-container');

function showToast(type, message) {
  const toast = document.createElement('div');
  toast.className = `text-white rounded-md p-4 mb-4 w-96 text-center transition duration-500 ease-in-out ${
    type === 'success' ? 'bg-primary' : 'bg-danger'
  }`;
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}


window.onload = function () {
  const btn = document.getElementById('submit');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ubah teks tombol menjadi "Sending..."
    btn.textContent = 'Sending...';
    btn.disabled = true;

    const serviceId = 'service_adfe9pb';
    const templateId = 'template_jxfge3a';

    emailjs.sendForm(serviceId, templateId, this)
      .then(() => {
        btn.textContent = 'Send';
        btn.disabled = false; 
        showToast('success', 'Yeayy, Message sent successfully! I will respond to you shortly.');
        form.reset();
      })
      .catch((error) => {
        btn.textContent = 'Send';
        btn.disabled = false;
        showToast('error', 'Failed to send the message! Please try again later.');
        console.error('EmailJS Error:', error);
      });
  });
};



// laoding page
window.addEventListener('load', function () {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');

  // Sembunyikan loading screen dan tampilkan konten utama
  loadingScreen.style.display = 'none';
  mainContent.classList.remove('hidden');
});
