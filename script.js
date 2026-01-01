// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    mobileNav.classList.remove('active');
    menuBtn.classList.remove('active');
}

document.addEventListener("click", function (e) {
    const btn = e.target.closest(".service-expand-btn");
    if (!btn) return;

    e.preventDefault();
    const currentCard = btn.closest(".service-card");
    if (!currentCard) return;

    // Toggle nur die aktuelle Karte (ohne andere zu schließen)
    const detail = currentCard.querySelector(".service-details-expanded");
    const isExpanded = currentCard.classList.contains("expanded");

    if (isExpanded) {
        currentCard.classList.remove("expanded");
        detail.style.maxHeight = "0px";
        btn.textContent = "Mehr erfahren ↓";
    } else {
        currentCard.classList.add("expanded");
        detail.style.maxHeight = detail.scrollHeight + "px";
        btn.textContent = "Weniger anzeigen ↑";
    }
});
// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            // Calculate offset for fixed header
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contact Form Handling with Formspree
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');

    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Wird gesendet...';

    // Submit to Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Success message
                alert('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            // Error message
            alert('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.');
            console.error('Error:', error);
        })
        .finally(() => {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Nachricht senden';
        });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('header');

    if (!header.contains(event.target) && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });

        // If image is already cached and loaded
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
});

// Lazy loading for service images
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            observer.unobserve(element);
        }
    });
}, observerOptions);

// Observe all service cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(card);
    });
});
// Vorher-Nachher Slider
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-handle');

    sliders.forEach(slider => {
        const container = slider.closest('.slider-container');
        const beforeWrapper = container.querySelector('.image-before-wrapper');
        const sliderButton = container.querySelector('.slider-button');

        slider.addEventListener('input', function() {
            const value = this.value;
            beforeWrapper.style.width = value + '%';
            sliderButton.style.left = value + '%';
        });
    });
});

// Image Carousel
function changeSlide(btn, direction) {
    const carousel = btn.closest('.carousel-container');
    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.carousel-dot');
    let currentIndex = 0;

    // Find current active image
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });

    // Remove active class
    images[currentIndex].classList.remove('active');
    if (dots.length > 0) {
        dots[currentIndex].classList.remove('active');
    }

    // Calculate new index
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;

    // Add active class
    images[currentIndex].classList.add('active');
    if (dots.length > 0) {
        dots[currentIndex].classList.add('active');
    }
}

function goToSlide(carousel, index) {
    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.carousel-dot');

    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    images[index].classList.add('active');
    dots[index].classList.add('active');
}

// Initialize carousel dots
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const dotsContainer = carousel.querySelector('.carousel-dots');

        images.forEach((img, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(carousel, index));
            dotsContainer.appendChild(dot);
        });
    });
});

// Cookie Banner
function showCookieBanner() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        setTimeout(() => {
            document.getElementById('cookieBanner').classList.add('show');
        }, 1000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'all');
    hideCookieBanner();e
    console.log('Alle Cookies akzeptiert');
}

function acceptEssentialOnly() {
    localStorage.setItem('cookieConsent', 'essential');
    hideCookieBanner();
    console.log('Nur notwendige Cookies akzeptiert');
}

function hideCookieBanner() {
    document.getElementById('cookieBanner').classList.remove('show');
}

// Cookie Banner beim Laden anzeigen
document.addEventListener('DOMContentLoaded', function() {
    showCookieBanner();
});

// Projekt Card Expand/Collapse
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".projekt-expand-btn");
    if (!btn) return;

    e.preventDefault();
    const currentCard = btn.closest(".projekt-card");
    if (!currentCard) return;

    const detail = currentCard.querySelector(".projekt-details-expanded");
    const isExpanded = currentCard.classList.contains("expanded");

    if (isExpanded) {
        currentCard.classList.remove("expanded");
        detail.style.maxHeight = "0px";
        btn.textContent = "Details anzeigen ↓";
    } else {
        currentCard.classList.add("expanded");
        detail.style.maxHeight = detail.scrollHeight + "px";
        btn.textContent = "Details ausblenden ↑";
    }
});

// Projekt Carousel Navigation
function changeProjektSlide(btn, direction) {
    const carousel = btn.closest('.carousel-container');
    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const label = carousel.querySelector('.carousel-label');
    let currentIndex = 0;

    // Find current active image
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });

    // Remove active class
    images[currentIndex].classList.remove('active');
    if (dots.length > 0) {
        dots[currentIndex].classList.remove('active');
    }

    // Calculate new index
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;

    // Add active class
    images[currentIndex].classList.add('active');
    if (dots.length > 0) {
        dots[currentIndex].classList.add('active');
    }

    // Update label
    if (label) {
        const currentLabel = images[currentIndex].getAttribute('data-label');
        label.textContent = currentLabel || '';
    }
}

function goToProjektSlide(carousel, index) {
    const images = carousel.querySelectorAll('.carousel-image');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const label = carousel.querySelector('.carousel-label');

    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    images[index].classList.add('active');
    dots[index].classList.add('active');

    // Update label
    if (label) {
        const currentLabel = images[index].getAttribute('data-label');
        label.textContent = currentLabel || '';
    }
}

// Initialize Projekt Carousels
document.addEventListener('DOMContentLoaded', function() {
    const projektCarousels = document.querySelectorAll('.projekt-carousel .carousel-container, .tab-content .carousel-container');

    projektCarousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const label = carousel.querySelector('.carousel-label');

        // Create dots
        if (dotsContainer) {
            dotsContainer.innerHTML = ''; // Clear existing dots first

            images.forEach((img, index) => {
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToProjektSlide(carousel, index));
                dotsContainer.appendChild(dot);
            });
        }

        // Set initial label
        if (label && images.length > 0) {
            const firstLabel = images[0].getAttribute('data-label');
            label.textContent = firstLabel || '';
        }
    });
});

// Projekt Tab Navigation
function switchProjektTab(btn, tabIndex) {
    const projektCard = btn.closest('.projekt-card');
    const allTabBtns = projektCard.querySelectorAll('.tab-btn');
    const allTabContents = projektCard.querySelectorAll('.tab-content');

    // Remove active class from all
    allTabBtns.forEach(b => b.classList.remove('active'));
    allTabContents.forEach(content => content.classList.remove('active'));

    // Add active class to selected
    btn.classList.add('active');
    allTabContents[tabIndex].classList.add('active');

    // Re-initialize carousel for the new tab
    const newCarousel = allTabContents[tabIndex].querySelector('.carousel-container');
    if (newCarousel) {
        const images = newCarousel.querySelectorAll('.carousel-image');
        const dotsContainer = newCarousel.querySelector('.carousel-dots');
        const label = newCarousel.querySelector('.carousel-label');

        // Clear existing dots
        if (dotsContainer) {
            dotsContainer.innerHTML = '';

            // Create new dots
            images.forEach((img, index) => {
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToProjektSlide(newCarousel, index));
                dotsContainer.appendChild(dot);
            });
        }

        // Reset to first image
        images.forEach((img, index) => {
            img.classList.remove('active');
            if (index === 0) img.classList.add('active');
        });

        // Set label for first image
        if (label && images.length > 0) {
            const firstLabel = images[0].getAttribute('data-label');
            label.textContent = firstLabel || '';
        }
    }
}
// Projekt Tab Navigation
function switchProjektTab(btn, tabIndex) {
    const projektCard = btn.closest('.projekt-card');
    const allTabBtns = projektCard.querySelectorAll('.tab-btn');
    const allTabContents = projektCard.querySelectorAll('.tab-content');

    // Remove active class from all
    allTabBtns.forEach(b => b.classList.remove('active'));
    allTabContents.forEach(content => content.classList.remove('active'));

    // Add active class to selected
    btn.classList.add('active');
    allTabContents[tabIndex].classList.add('active');

    // Re-initialize carousel for the new tab
    const newCarousel = allTabContents[tabIndex].querySelector('.carousel-container');
    if (newCarousel) {
        const images = newCarousel.querySelectorAll('.carousel-image');
        const dotsContainer = newCarousel.querySelector('.carousel-dots');
        const label = newCarousel.querySelector('.carousel-label');

        // Clear existing dots
        if (dotsContainer) {
            dotsContainer.innerHTML = '';

            // Create new dots
            images.forEach((img, index) => {
                const dot = document.createElement('div');
                dot.className = 'carousel-dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToProjektSlide(newCarousel, index));
                dotsContainer.appendChild(dot);
            });
        }

        // Reset to first image
        images.forEach((img, index) => {
            img.classList.remove('active');
            if (index === 0) img.classList.add('active');
        });

        // Set label for first image
        if (label && images.length > 0) {
            const firstLabel = images[0].getAttribute('data-label');
            label.textContent = firstLabel || '';
        }
    }
}

// Back to Top Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Back to Top Button
window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTop');

    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});