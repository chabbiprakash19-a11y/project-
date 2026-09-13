/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu when clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================
   HEADER SCROLL EFFECT
===================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================
   WHATSAPP CONTACT FORM
===================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const enquiry =
        document.getElementById("enquiry").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        `Hello Kitchen Lounge,

Name: ${name}

Phone / WhatsApp: ${phone}

Email: ${email}

Enquiry Type: ${enquiry}

Message:
${message}

I would like to know more about your products/services.`;


    const whatsappURL =
        "https://wa.me/919742230507?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(
    ".value-card, .product-card, .solution-card, .review-card, .process-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});