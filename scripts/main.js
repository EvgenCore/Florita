const translations = {
    en: {
      reserve: "BOOKING",
      navInicio: "HOME",
      navAbout: "ABOUT",
      navMenu: "MENU",
      navContact: "CONTACTS",
      
      about_first_text_title: "Lorem ipsum dolor sit amet",
      about_first_text_body: "Morbi a semper lacus. Pellentesque sit amet mollis mauris, sit amet commodo elit. Aliquam vestibulum velit id velit varius, vel pharetra justo tempor. Vivamus iaculis nisi in rutrum efficitur. Nam et dapibus velit. Donec a nunc aliquet, congue ipsum id, feugiat magna. Sed non interdum eros.",
      about_second_text_title: "Lorem ipsum dolor sit amet",
      about_second_text_body: "Morbi a semper lacus. Pellentesque sit amet mollis mauris, sit amet commodo elit. Aliquam vestibulum velit id velit varius, vel pharetra justo tempor. Vivamus iaculis nisi in rutrum efficitur. Nam et dapibus velit. Donec a nunc aliquet, congue ipsum id, feugiat magna. Sed non interdum eros.",
      menuTitle: "MENU",
      socialTitle: "Lorem ipsum dolor sit ametvel pharetra justo tempor",
      instaTikTokContainerTitle: "Our social networks"
    },
    es:{
        reserve: "RESERVA",
        navInicio: "INICIO",
        navAbout: "NOSOTROS",
        navMenu: "CARTA",
        navContact: "CONTACTOS",
        
    },
    ca:{
        reserve: "RESERVA",
        navInicio: "INICI",
        navAbout: "NOSALTRES",
        navMenu: "CARTA",
        navContact: "CONTACTES",
        
    },
    ua:{
        reserve: "РЕЗЕРВ",
        navInicio: "ПОЧАТОК",
        navAbout: "ПРО НАС",
        navMenu: "МЕНЮ",
        navContact: "КОНТАКТИ",
       
    },
    ru: {
        reserve: "БРОНЬ",
        navInicio: "СТАРТ",
        navAbout: "О НАС",
        navMenu: "МЕНЮ",
        navContact: "КОНТАКТЫ",
       
    },


};

function changeLanguage(language) {
    
    const reserveBtn = document.getElementById("reserveBtn");
    const navReserva = document.getElementById("nav-reserva");

    const navInicio = document.getElementById("navInicio");
    const smallNavInicio = document.getElementById("smallNavInicio");

    const navAbout = document.getElementById("navAbout");
    const smallNavAbout = document.getElementById("smallNavAbout");

    const navMenu = document.getElementById("navMenu");
    const smallNavMenu = document.getElementById("smallNavMenu");

    const navContact = document.getElementById("navContact");
    const smallNavContacts = document.getElementById("smallNavContacts");

   

   
    
   

   
    reserveBtn.textContent = translations[language].reserve;
    navReserva.textContent = translations[language].reserve;

    navInicio.textContent = translations[language].navInicio;
    smallNavInicio.textContent = translations[language].navInicio;

    navAbout.textContent = translations[language].navAbout;
    smallNavAbout.textContent = translations[language].navAbout;

    navMenu.textContent = translations[language].navMenu;
    smallNavMenu.textContent = translations[language].navMenu;

    navContact.textContent = translations[language].navContact;
    smallNavContacts.textContent = translations[language].navContact;

    
   
}

const burger = document.querySelector('.burger');
const smallNav = document.querySelector('.small-nav');
const navLinks = document.querySelectorAll('.small-nav a'); // Получаем все ссылки в бургер-меню


burger.addEventListener('click', () => {
 
  burger.classList.toggle('burger--active');
  
  smallNav.classList.toggle('small-nav--active');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger--active'); 
    smallNav.classList.remove('small-nav--active');
  });
});


/* SLIDER */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
  
    
    const firstClone = slideElements[0].cloneNode(true);
    const lastClone = slideElements[slideElements.length - 1].cloneNode(true);
  
    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slideElements[0]);
  
    const allSlides = document.querySelectorAll(".slide");
    const totalSlides = allSlides.length;
  
    let currentIndex = 1;
    let isTransitioning = false;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
  
    
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
  
   
    document.querySelectorAll("img").forEach((img) => {
      img.setAttribute("draggable", "false");
    });
  
    
    const showSlide = (index) => {
      if (isTransitioning) return;
      isTransitioning = true;
      slides.style.transition = "transform 0.5s ease-in-out";
      slides.style.transform = `translateX(-${index * 100}vw)`;
    };
  
   
    slides.addEventListener("transitionend", () => {
      if (!isTransitioning) return;
      isTransitioning = false;
  
      if (currentIndex === totalSlides - 1) {
        currentIndex = 1;
        slides.style.transition = "none";
        slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
      }
      if (currentIndex === 0) {
        currentIndex = totalSlides - 2;
        slides.style.transition = "none";
        slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
      }
    });
  
   
    const startSwipe = (x) => {
      if (isTransitioning) return;
      isDragging = true;
      startX = x;
      slides.style.transition = "none"; 
    };
  
    const moveSwipe = (x) => {
      if (!isDragging) return;
      const deltaX = x - startX;
      slides.style.transform = `translateX(${-currentIndex * 100 + deltaX / window.innerWidth * 100}vw)`;
    };
  
    const endSwipe = (x) => {
      if (!isDragging) return;
      isDragging = false;
  
      const deltaX = x - startX;
  
      
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          currentIndex = Math.max(0, currentIndex - 1);
        } else {
          currentIndex = Math.min(totalSlides - 1, currentIndex + 1);
        }
      }
      showSlide(currentIndex);
    };
  
    
    slides.addEventListener("touchstart", (e) => startSwipe(e.touches[0].clientX));
    slides.addEventListener("touchmove", (e) => moveSwipe(e.touches[0].clientX));
    slides.addEventListener("touchend", (e) => endSwipe(e.changedTouches[0].clientX));
  
    
    slides.addEventListener("mousedown", (e) => startSwipe(e.clientX));
    slides.addEventListener("mousemove", (e) => moveSwipe(e.clientX));
    slides.addEventListener("mouseup", (e) => endSwipe(e.clientX));
    slides.addEventListener("mouseleave", () => (isDragging = false));
  
    
    const autoSlide = setInterval(() => {
      if (!isDragging && !isTransitioning) {
        currentIndex++;
        showSlide(currentIndex);
      }
    }, 3000);
  
    
    slides.addEventListener("mousedown", () => clearInterval(autoSlide));
    slides.addEventListener("touchstart", () => clearInterval(autoSlide));
  });
  
  