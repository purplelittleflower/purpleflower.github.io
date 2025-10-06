// ========== GSAP ENHANCED ANIMATIONS ==========

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎭 GSAP Animations Initialized!');
    
    // Initialize all animations
    initHeroAnimations();
    initScrollTriggerAnimations();
    initFloatingElements();
    initCursorEffects();
    initPortfolioAnimations();
    initTextEffects();
    initPageTransitions();
});

// ========== HERO SECTION SPECTACULAR ENTRANCE ==========
function initHeroAnimations() {
    // Create timeline for hero entrance
    const heroTL = gsap.timeline({ delay: 0.5 });
    
    // Animate scattered text elements with stagger
    heroTL.from('.scattered-text', {
        duration: 1.2,
        opacity: 0,
        scale: 0,
        rotation: 45,
        ease: "back.out(1.7)",
        stagger: 0.2
    });
    
    // Hero title lines animation with typewriter effect
    heroTL.from('.title-line-1', {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out"
    }, "-=0.8");
    
    heroTL.from('.title-line-2', {
        duration: 1.5,
        opacity: 0,
        scale: 0.5,
        rotation: 10,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.5");
    
    heroTL.from('.title-line-3', {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out"
    }, "-=0.8");
    
    // Subtitle animations
    heroTL.from('.hero-subtitle-enhanced', {
        duration: 1,
        opacity: 0,
        letterSpacing: "20px",
        ease: "power2.out"
    }, "-=0.5");
    
    heroTL.from('.hero-subtitle-secondary', {
        duration: 0.8,
        opacity: 0,
        y: 30,
        ease: "power2.out"
    }, "-=0.3");
    
    // Description block
    heroTL.from('.hero-description-block', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out"
    }, "-=0.5");
    
    // Buttons with magnetic effect
    heroTL.from('.hero-buttons-enhanced .primary-enhanced, .hero-buttons-enhanced .secondary-enhanced', {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        y: 30,
        ease: "back.out(1.7)",
        stagger: 0.1
    }, "-=0.3");
    
    // Credentials floating in
    heroTL.from('.credential-item', {
        duration: 1.2,
        opacity: 0,
        y: 40,
        rotation: 5,
        ease: "power2.out",
        stagger: 0.1
    }, "-=0.5");
}

// ========== ADVANCED SCROLL TRIGGER ANIMATIONS ==========
function initScrollTriggerAnimations() {
    // About section reveal
    gsap.from('.about .section-title-enhanced', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power3.out"
    });
    
    // Portfolio cards cascade
    gsap.from('.portfolio-card-enhanced', {
        scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 0,
        y: 80,
        rotation: 5,
        ease: "power2.out",
        stagger: 0.2
    });
    
    // Section labels appear with rotation
    gsap.from('.section-label-scattered', {
        scrollTrigger: {
            trigger: '.section-label-scattered',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 0,
        rotation: 45,
        scale: 0,
        ease: "back.out(1.7)"
    });
    
    // Section numbers counting animation
    gsap.from('.section-number-scattered', {
        scrollTrigger: {
            trigger: '.section-number-scattered',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        scale: 0,
        rotation: 180,
        ease: "elastic.out(1, 0.5)"
    });
    
    // Journey chapters reveal
    gsap.from('.journey-chapter', {
        scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        opacity: 0,
        x: -100,
        ease: "power2.out",
        stagger: 0.3
    });
}

// ========== ENHANCED FLOATING ELEMENTS ==========
function initFloatingElements() {
    // Create more organic floating movement
    gsap.to('.floating-note', {
        duration: 'random(15, 25)',
        rotation: 'random(-360, 360)',
        x: 'random(-100, 100)',
        y: 'random(-50, 50)',
        ease: "none",
        repeat: -1,
        yoyo: true,
        stagger: {
            each: 2,
            repeat: -1
        }
    });
    
    gsap.to('.floating-academia', {
        duration: 'random(20, 30)',
        rotation: 'random(-180, 180)',
        x: 'random(-80, 80)',
        y: 'random(-40, 40)',
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
            each: 3,
            repeat: -1
        }
    });
    
    // Mouse interaction enhancement
    const floatingElements = document.querySelectorAll('.floating-note, .floating-academia');
    
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                duration: 0.3,
                scale: 1.5,
                rotation: 'random(-45, 45)',
                ease: "power2.out"
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                duration: 0.5,
                scale: 1,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });
}

// ========== ADVANCED CURSOR EFFECTS ==========
function initCursorEffects() {
    const cursor = document.querySelector('.cursor-glow');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    if (!cursor || !cursorTrail) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let trailX = 0, trailY = 0;
    
    // Smooth cursor following with GSAP
    function updateCursor() {
        // Smooth cursor glow
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        gsap.set(cursor, {
            x: cursorX,
            y: cursorY
        });
        
        // Trailing cursor with delay
        trailX += (mouseX - trailX) * 0.05;
        trailY += (mouseY - trailY) * 0.05;
        
        gsap.set(cursorTrail, {
            x: trailX,
            y: trailY
        });
        
        requestAnimationFrame(updateCursor);
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    updateCursor();
    
    // Enhanced hover effects for interactive elements
    const hoverElements = document.querySelectorAll('.cta-button, .portfolio-card-enhanced, .nav-link');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                duration: 0.3,
                scale: 2,
                opacity: 0.8,
                ease: "power2.out"
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                duration: 0.3,
                scale: 1,
                opacity: 0.6,
                ease: "power2.out"
            });
        });
    });
}

// ========== PORTFOLIO CARD ENHANCEMENTS ==========
function initPortfolioAnimations() {
    const portfolioCards = document.querySelectorAll('.portfolio-card-enhanced');
    
    portfolioCards.forEach((card, index) => {
        // Hover animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.4,
                y: -20,
                rotationY: 5,
                rotationX: 5,
                scale: 1.02,
                ease: "power2.out"
            });
            
            // Animate skills tags
            gsap.to(card.querySelectorAll('.enhanced-tags span'), {
                duration: 0.3,
                y: -5,
                ease: "power2.out",
                stagger: 0.05
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                y: 0,
                rotationY: 0,
                rotationX: 0,
                scale: 1,
                ease: "power2.out"
            });
            
            gsap.to(card.querySelectorAll('.enhanced-tags span'), {
                duration: 0.3,
                y: 0,
                ease: "power2.out",
                stagger: 0.05
            });
        });
    });
}

// ========== SPECTACULAR TEXT EFFECTS ==========
function initTextEffects() {
    // Typewriter effect for hero subtitles
    gsap.to('.hero-subtitle-enhanced', {
        duration: 2,
        text: "WHERE BACH MEETS BEBOP",
        ease: "none",
        delay: 2
    });
    
    // Scramble effect for section titles on scroll
    const sectionTitles = document.querySelectorAll('.section-title-enhanced');
    
    sectionTitles.forEach(title => {
        ScrollTrigger.create({
            trigger: title,
            start: 'top 80%',
            onEnter: () => {
                // Text reveal animation
                gsap.from(title.querySelectorAll('.title-word, .title-word-large'), {
                    duration: 1,
                    opacity: 0,
                    y: 50,
                    ease: "power2.out",
                    stagger: 0.2
                });
            }
        });
    });
}

// ========== SMOOTH PAGE TRANSITIONS ==========
function initPageTransitions() {
    // Smooth scroll progress bar
    gsap.to('.scroll-progress-bar', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        },
        width: '100%',
        ease: "none"
    });
    
    // Parallax effect for sections
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        opacity: 0.5,
        ease: "none"
    });
}

// ========== BUTTON MAGNETIC EFFECTS ==========
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.primary-enhanced, .secondary-enhanced');
    
    magneticButtons.forEach(button => {
        let buttonBounds = button.getBoundingClientRect();
        
        button.addEventListener('mouseenter', () => {
            buttonBounds = button.getBoundingClientRect();
        });
        
        button.addEventListener('mousemove', (e) => {
            const x = e.clientX - buttonBounds.left - buttonBounds.width / 2;
            const y = e.clientY - buttonBounds.top - buttonBounds.height / 2;
            
            gsap.to(button, {
                duration: 0.3,
                x: x * 0.2,
                y: y * 0.2,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });
}

// Initialize magnetic buttons after DOM load
document.addEventListener('DOMContentLoaded', initMagneticButtons);

// ========== MOBILE OPTIMIZATIONS ==========
function optimizeForMobile() {
    if (window.innerWidth <= 768) {
        // Reduce animation complexity on mobile
        gsap.globalTimeline.timeScale(0.7);
        
        // Disable cursor effects on mobile
        gsap.set('.cursor-glow, .cursor-trail', { display: 'none' });
    }
}

window.addEventListener('resize', optimizeForMobile);
optimizeForMobile();

console.log('🎭 GSAP Enhanced Animations Loaded Successfully! 🚀');