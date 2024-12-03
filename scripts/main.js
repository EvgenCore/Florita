const translations = {
    en: {
      reserve: "BOOKING",
      navInicio: "HOME",
      navAbout: "ABOUT",
      navMenu: "MENU",
      navContact: "CONTACTS",
      heroText: "ROSES AND BRUNCH",
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
        heroText: "ROSES AND BRUNCH"
    },
    ca:{
        reserve: "RESERVA",
        navInicio: "INICI",
        navAbout: "NOSALTRES",
        navMenu: "CARTA",
        navContact: "CONTACTES",
        heroText: "ROSES I BRUNCH"
    },
    ua:{
        reserve: "РЕЗЕРВ",
        navInicio: "ПОЧАТОК",
        navAbout: "ПРО НАС",
        navMenu: "МЕНЮ",
        navContact: "КОНТАКТИ",
        heroText: "ТРОЯНДИ ТА БРАНЧ"
    },
    ru: {
        reserve: "БРОНЬ",
        navInicio: "СТАРТ",
        navAbout: "О НАС",
        navMenu: "МЕНЮ",
        navContact: "КОНТАКТЫ",
        heroText: "РОЗЫ И БРАНЧ"
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

    const heroText = document.getElementById("heroText");

   
    
   

   
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

    heroText.textContent = translations[language].heroText;
   
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
