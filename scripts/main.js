const translations = {
    en: {
      reserve: "BOOKING",
      navInicio: "HOME",
      navAbout: "ABOUT",
      navMenu: "MENU",
      navContact: "CONTACTS",
      
      about_first_text_title: "The taste is impeccable!",
      about_first_text_body: "We proudly offer you not only a variety of delicious dishes but also a unique experience that begins with the freshest ingredients and ends with masterfully prepared dishes that can satisfy even the highest gastronomic demands.",
      about_second_text_title: "Refined style!",
      about_second_text_body: "The interior of our restaurant is a blend of elegance and comfort. Every element of the decor has been chosen with love and attention to detail, creating an atmosphere where you’ll want to spend time with pleasure. Warm colors, stylish furniture, and soft lighting create the perfect setting for pleasant meetings and refined dinners.",
      menuTitle: "MENU",
      socialTitle: "Contact us in any way that is convenient for you",
      instaTikTokContainerTitle: "Our social networks"
    },
    es:{
        reserve: "RESERVA",
        navInicio: "INICIO",
        navAbout: "NOSOTROS",
        navMenu: "CARTA",
        navContact: "CONTACTOS",

        about_first_text_title: "¡El sabor es impecable!",
        about_first_text_body: "Con orgullo les ofrecemos no solo una variedad de platos deliciosos, sino también una experiencia única que comienza con los ingredientes más frescos y termina con platos magistralmente preparados, capaces de satisfacer incluso los más altos requisitos gastronómicos.",
        about_second_text_title: "Estilo refinado!",
        about_second_text_body: "El interior de nuestro restaurante es una combinación de elegancia y comodidad. Cada elemento de la decoración ha sido elegido con amor y atención al detalle, creando un ambiente en el que apetece pasar el tiempo con placer. Los colores cálidos, los muebles elegantes y la iluminación suave crean el ambiente perfecto para encuentros agradables y cenas refinadas.",
        menuTitle: "CARTA",
        socialTitle: "Contáctenos de la manera que le sea más conveniente",
        instaTikTokContainerTitle: "Nuestras redes sociales"
        
    },
    ca:{
        reserve: "RESERVA",
        navInicio: "INICI",
        navAbout: "NOSALTRES",
        navMenu: "CARTA",
        navContact: "CONTACTES",

        about_first_text_title: "El gust és impecable!",
        about_first_text_body: "Amb orgullus us oferim no només una varietat de plats deliciosos, sinó també una experiència única que comença amb els ingredients més frescos i acaba amb plats magistralment preparats que poden satisfer fins i tot els requisits gastronòmics més alts.",
        about_second_text_title: "Estil refinat!",
        about_second_text_body: "L'interior del nostre restaurant és una combinació d'elegància i comoditat. Cada element de la decoració ha estat triat amb amor i atenció als detalls, creant una atmosfera on es vol passar temps amb plaer. Els colors càlids, els mobles elegants i la il·luminació suau creen l'entorn perfecte per a trobades agradables i sopars refinats.",
        menuTitle: "CARTA",
        socialTitle: "Poseu-vos en contacte amb nosaltres de la manera que us sigui més còmoda",
        instaTikTokContainerTitle: "Les nostres xarxes socials"
        
    },
    ua:{
        reserve: "РЕЗЕРВ",
        navInicio: "СТАРТ",
        navAbout: "ПРО НАС",
        navMenu: "МЕНЮ",
        navContact: "КОНТАКТИ",

        about_first_text_title: "Смак бездоганний!",
        about_first_text_body: "Ми з гордістю пропонуємо вам не лише різноманітні та смачні страви, але й унікальний досвід, який починається з найсвіжіших інгредієнтів і завершується майстерно приготованими стравами, здатними задовольнити навіть найвищі гастрономічні вимоги.",
        about_second_text_title: "Вишуканий стиль!",
        about_second_text_body: "Інтер'єр нашого ресторану — це поєднання елегантності та затишку. Кожен елемент декору був вибраний з любов'ю та увагою до деталей, створюючи атмосферу, в якій хочеться провести час із задоволенням. Теплі кольори, стильні меблі та м'яке освітлення створюють ідеальну обстановку для приємних зустрічей і вишуканих вечерь.",
        menuTitle: "МЕНЮ",
        socialTitle: "Зв'яжіться з нами будь-яким зручним способом",
        instaTikTokContainerTitle: "Наші соціальні мережі"
       
    },
    ru: {
        reserve: "БРОНЬ",
        navInicio: "СТАРТ",
        navAbout: "О НАС",
        navMenu: "МЕНЮ",
        navContact: "КОНТАКТЫ",

        about_first_text_title: "Вкус безупречен!",
        about_first_text_body: "Мы с гордостью предлагаем вам не только разнообразные и вкусные блюда, но и уникальный опыт, который начинается с самых свежих ингредиентов и завершается мастерски приготовленными блюдами, способными удовлетворить даже самые высокие гастрономические требования.",
        about_second_text_title: "Изысканный стиль!",
        about_second_text_body: "Интерьер нашего ресторана — это сочетание элегантности и уюта. Каждый элемент декора был выбран с любовью и вниманием к деталям, создавая атмосферу, в которой хочется провести время с удовольствием. Теплые цвета, стильная мебель и мягкое освещение создают идеальную обстановку для приятных встреч и изысканных ужинов.",
        menuTitle: "МЕНЮ",
        socialTitle: "Свяжитесь с нами любым удобным способом",
        instaTikTokContainerTitle: "Наши социальные сети"
       
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


    const about_first_text_title = document.getElementById("about_first_text_title");
    const about_first_text_body = document.getElementById("about_first_text_body");
    const about_second_text_title = document.getElementById("about_second_text_title");
    const about_second_text_body = document.getElementById("about_second_text_body");
    const menuTitle = document.getElementById("menuTitle");
    const socialTitle = document.getElementById("socialTitle");
    const instaTikTokContainerTitle = document.getElementById("instaTikTokContainerTitle");



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

    about_first_text_title.textContent = translations[language].about_first_text_title;
    about_first_text_body.textContent = translations[language].about_first_text_body;
    about_second_text_title.textContent = translations[language].about_second_text_title;
    about_second_text_body.textContent = translations[language].about_second_text_body;
    menuTitle.textContent = translations[language].menuTitle;
    socialTitle.textContent = translations[language].socialTitle;
    instaTikTokContainerTitle.textContent = translations[language].instaTikTokContainerTitle;

   
}

const burger = document.querySelector('.burger');
const smallNav = document.querySelector('.small-nav');
const navLinks = document.querySelectorAll('.small-nav a'); 
const languageNav = document.querySelectorAll('.button_container button'); 


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

document.addEventListener('click', (e) => {
  if (!smallNav.contains(e.target) && !burger.contains(e.target)) {
    burger.classList.remove('burger--active');
    smallNav.classList.remove('small-nav--active');
  }
});

languageNav.forEach(link => {
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
  
    
    let autoSlideInterval;
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        if (!isDragging && !isTransitioning) {
          currentIndex++;
          showSlide(currentIndex);
        }
      }, 2000);
    };
  
   
    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };
  
   
    slides.addEventListener("mousedown", stopAutoSlide);
    slides.addEventListener("touchstart", stopAutoSlide);
  
   
    slides.addEventListener("mouseup", startAutoSlide);
    slides.addEventListener("mouseleave", startAutoSlide);
    slides.addEventListener("touchend", startAutoSlide);
  
   
    startAutoSlide();
});
  