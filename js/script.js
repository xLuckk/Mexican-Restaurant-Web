
// ===========================
// CORAZÓN DEL DESIERTO JS
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // SMOOTH SCROLLING NAVIGATION
    // ===========================
    
    const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===========================
    // NAVBAR SCROLL EFFECT
    // ===========================
    
    const navbar = document.getElementById('mainNavbar');
    
    window.addEventListener('scroll', debounce(function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(196, 30, 58, 0.95), rgba(255, 215, 0, 0.95), rgba(0, 104, 71, 0.95))';
            navbar.style.backdropFilter = 'blur(15px)';
            navbar.style.borderBottom = '3px solid rgba(255, 215, 0, 0.8)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #C41E3A, #FFD700, #006847)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '3px solid #FFD700';
        }
    }, 10));
    
    // ===========================
    // FADE IN ON SCROLL ANIMATION
    // ===========================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-on-scroll class
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // ===========================
    // MENU ITEM HOVER EFFECTS
    // ===========================
    
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.03)';
            this.style.boxShadow = '0 15px 40px rgba(196, 30, 58, 0.2)';
            this.style.borderColor = '#FFD700';
            
            const img = this.querySelector('.menu-item-img');
            if (img) {
                img.style.transform = 'scale(1.1)';
                img.style.filter = 'brightness(1.1) saturate(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 25px rgba(0,0,0,0.1)';
            this.style.borderColor = 'transparent';
            
            const img = this.querySelector('.menu-item-img');
            if (img) {
                img.style.transform = 'scale(1)';
                img.style.filter = 'brightness(1) saturate(1)';
            }
        });
        
        // Stagger animation on load
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });
    
    // ===========================
    // REVIEW CARDS ANIMATION
    // ===========================
    
    const reviewCards = document.querySelectorAll('.review-card');
    
    reviewCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateY(2deg)';
            this.style.boxShadow = '0 20px 50px rgba(196, 30, 58, 0.15)';
            this.style.borderColor = '#FFD700';
            
            const stars = this.querySelectorAll('.stars i');
            stars.forEach((star, starIndex) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.1)';
                    star.style.filter = 'drop-shadow(0 0 5px #FFD700)';
                }, starIndex * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0deg)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
            this.style.borderColor = 'transparent';
            
            const stars = this.querySelectorAll('.stars i');
            stars.forEach(star => {
                star.style.transform = 'scale(1)';
                star.style.filter = 'none';
            });
        });
        
        // Stagger animation on load
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150);
    });
    
    // ===========================
    // CONTACT FORM INTERACTIONS
    // ===========================
    
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(15px) scale(1.02)';
            this.style.background = 'linear-gradient(135deg, #fff8dc, #ffffff)';
            this.style.borderColor = '#FFD700';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = '#FFD700';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.background = 'linear-gradient(135deg, #ffffff, #f8f9fa)';
            this.style.borderColor = 'transparent';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.color = '#C41E3A';
            }
        });
        
        // Stagger animation on load
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 200);
    });
    
    // ===========================
    // SOCIAL BUTTONS ANIMATION
    // ===========================
    
    const socialButtons = document.querySelectorAll('.btn-social');
    
    socialButtons.forEach((button, index) => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.background = '#FFD700';
            this.style.borderColor = '#C41E3A';
            this.style.color = '#2F1B14';
            this.style.boxShadow = '0 8px 30px rgba(255, 215, 0, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'linear-gradient(135deg, #C41E3A, #FFD700, #006847)';
            this.style.borderColor = 'transparent';
            this.style.color = 'white';
            this.style.boxShadow = '0 4px 20px rgba(196, 30, 58, 0.3)';
        });
        
        // Stagger animation on load
        setTimeout(() => {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.5)';
            setTimeout(() => {
                button.style.transition = 'all 0.5s ease';
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            }, 50);
        }, index * 100);
    });
    
    // ===========================
    // PARALLAX EFFECT FOR HERO
    // ===========================
    
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', debounce(function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    }, 16));
    
    // ===========================
    // LOADING ANIMATIONS
    // ===========================
    
    // Animate stats counters
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat h4');
        
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/\D/g, ''));
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (stat.textContent.includes('+')) {
                    stat.textContent = Math.floor(current) + '+';
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        });
    };
    
    // Trigger stats animation when about section is visible
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
    
    // ===========================
    // PHONE NUMBER CLICK TRACKING
    // ===========================
    
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // You could add analytics tracking here
            console.log('Phone number clicked:', this.href);
        });
    });
    
    // ===========================
    // MENU CATEGORY NAVIGATION
    // ===========================
    
    // Auto-scroll to menu categories (could be extended for a menu filter)
    const menuCategories = document.querySelectorAll('.menu-category');
    
    menuCategories.forEach(category => {
        category.addEventListener('click', function() {
            this.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // ===========================
    // IMAGE LAZY LOADING ERROR HANDLING
    // ===========================
    
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Fallback for broken images
            this.style.backgroundColor = '#f0f0f0';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<i class="fas fa-image" style="font-size: 2rem; color: #ccc;"></i>';
        });
        
        img.addEventListener('load', function() {
            // Fade in effect when image loads
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 50);
        });
    });
    
    // ===========================
    // ACCESSIBILITY IMPROVEMENTS
    // ===========================
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key to close any modals or overlays
        if (e.key === 'Escape') {
            // Handle escape key functionality if needed
        }
        
        // Enter key on clickable elements
        if (e.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.classList.contains('menu-item') || 
                activeElement.classList.contains('review-card')) {
                activeElement.click();
            }
        }
    });
    
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('.menu-item, .review-card, .contact-item');
    
    focusableElements.forEach(element => {
        element.setAttribute('tabindex', '0');
        
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #D2691E';
            this.style.outlineOffset = '5px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // ===========================
    // CONSOLE WELCOME MESSAGE
    // ===========================
    
    console.log(`
    🌶️ ¡Bienvenido a Corazón del Desierto! 🌶️
    
    Auténtica cocina tex-mex en Hobbs, New Mexico
    
    📍 2845 West Marland Boulevard, Hobbs, NM 88240
    📞 (575) 392-0555
    
    ¡Gracias por visitar nuestro sitio web!
    `);
    
});

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Debounce function for scroll events
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Smooth scroll to element function
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format phone number for display
function formatPhoneNumber(phoneNumber) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}
