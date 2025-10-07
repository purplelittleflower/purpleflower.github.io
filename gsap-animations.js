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
    // Enhanced hero title letter-by-letter animation
    const heroLetters = document.querySelectorAll('.hero-main-title .animate-letters span');
    if (heroLetters.length > 0) {
        // Override CSS animations and use GSAP for better control
        gsap.set(heroLetters, {
            opacity: 0,
            y: 60,
            scale: 0.2,
            rotationY: 90,
            filter: "blur(10px)"
        });

        // Animate letters in spectacular sequence
        gsap.to(heroLetters, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: {
                amount: 1.5,
                from: "start"
            },
            delay: 0.1
        });
    }

    // Create timeline for hero entrance (starts after letters finish)
    const heroTL = gsap.timeline({ delay: 2 });
    
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
    // ========== SOPHISTICATED ABOUT SECTION ANIMATIONS ==========
    
    // 1. Main title "THE RENAISSANCE JOURNEY" with dramatic entrance
    gsap.from('.about .section-title-enhanced', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 2,
        opacity: 0,
        y: 150,
        scale: 0.8,
        rotationX: 45,
        ease: "power3.out"
    });

    // 2. Enhanced subtitle block with staggered reveal
    gsap.from('.enhanced-subtitle-block .subtitle-line', {
        scrollTrigger: {
            trigger: '.enhanced-subtitle-block',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        x: -100,
        ease: "power2.out",
        stagger: 0.3
    });

    gsap.from('.enhanced-subtitle-block .subtitle-line-large', {
        scrollTrigger: {
            trigger: '.enhanced-subtitle-block',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.8,
        opacity: 0,
        scale: 0.5,
        rotation: -10,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5
    });

    // 3. Journey quote with floating quote mark and typewriter effect
    gsap.from('.quote-mark-large', {
        scrollTrigger: {
            trigger: '.journey-quote-enhanced',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 2,
        opacity: 0,
        scale: 0,
        rotation: 180,
        ease: "back.out(1.7)"
    });

    gsap.from('.lead-quote-enhanced', {
        scrollTrigger: {
            trigger: '.journey-quote-enhanced',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 2.5,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        delay: 0.5
    });

    gsap.from('.quote-emphasis', {
        scrollTrigger: {
            trigger: '.journey-quote-enhanced',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        letterSpacing: "10px",
        ease: "power2.out",
        delay: 1
    });

    gsap.from('.quote-attribution', {
        scrollTrigger: {
            trigger: '.journey-quote-enhanced',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 0,
        x: 100,
        ease: "power2.out",
        delay: 1.5
    });

    // 4. Chapter indicators with sequential activation
    gsap.from('.chapter-indicators .indicator', {
        scrollTrigger: {
            trigger: '.chapter-indicators',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 0,
        scale: 0,
        rotation: 360,
        ease: "back.out(1.7)",
        stagger: 0.2
    });

    // 5. Journey chapters with spectacular 3D entrance
    gsap.from('.journey-chapter', {
        scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.8,
        opacity: 0,
        x: -200,
        rotationY: -45,
        rotationX: 20,
        scale: 0.8,
        ease: "power3.out",
        stagger: 0.4,
        clearProps: "transform" // Clear transforms after animation
    });

    // 6. Chapter headers with individual animations
    gsap.from('.chapter-meta span', {
        scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        opacity: 0,
        y: -30,
        ease: "bounce.out",
        stagger: 0.1,
        delay: 0.5
    });

    gsap.from('.chapter-title-large', {
        scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        scale: 0.7,
        rotation: -5,
        ease: "back.out(1.2)",
        stagger: 0.3,
        delay: 0.8
    });

    gsap.from('.chapter-subtitle', {
        scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 0,
        x: 50,
        ease: "power2.out",
        stagger: 0.3,
        delay: 1.2
    });

    // 7. Highlight badges with floating animation
    gsap.from('.highlight-badge', {
        scrollTrigger: {
            trigger: '.journey-highlights-enhanced',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.3,
        opacity: 0,
        y: 40,
        scale: 0.8,
        rotation: 10,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.15
    });

    // 8. Achievement stats with counting animation
    gsap.from('.mini-stat-enhanced', {
        scrollTrigger: {
            trigger: '.achievement-stats-enhanced',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        scale: 0,
        ease: "back.out(1.7)",
        stagger: 0.2
    });

    // Animate stat numbers with counting effect
    document.querySelectorAll('.stat-number-large').forEach((stat, index) => {
        const finalValue = parseInt(stat.textContent);
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            delay: 0.5 + (index * 0.2)
        });
    });

    // 9. Current focus items with wave animation
    gsap.from('.focus-item-large', {
        scrollTrigger: {
            trigger: '.current-focus-enhanced',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        opacity: 0,
        y: 30,
        rotation: 5,
        ease: "power2.out",
        stagger: 0.1
    });

    // 10. Sidebar cards with 3D flip entrance
    gsap.from('.essence-card-enhanced', {
        scrollTrigger: {
            trigger: '.journey-sidebar',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.8,
        opacity: 0,
        rotationY: 180,
        rotationX: 45,
        scale: 0.5,
        ease: "power3.out"
    });

    gsap.from('.experience-overview-enhanced', {
        scrollTrigger: {
            trigger: '.journey-sidebar',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.8,
        opacity: 0,
        rotationY: -180,
        rotationX: -45,
        scale: 0.5,
        ease: "power3.out",
        delay: 0.3
    });

    // 11. Experience numbers with spectacular entrance
    gsap.from('.exp-number-huge', {
        scrollTrigger: {
            trigger: '.experience-grid-enhanced',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 2,
        opacity: 0,
        scale: 0,
        rotation: 720,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.2,
        delay: 0.5
    });

    // 12. Creative pursuits with bouncy entrance
    gsap.from('.pursuit-enhanced', {
        scrollTrigger: {
            trigger: '.creative-pursuits-enhanced',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        opacity: 0,
        y: 50,
        scale: 0.8,
        ease: "bounce.out",
        stagger: 0.1
    });

    // 13. Add continuous floating animations for cards
    gsap.to('.tilt-3d', {
        duration: 'random(3, 6)',
        y: 'random(-10, 10)',
        rotation: 'random(-2, 2)',
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
            each: 1,
            repeat: -1
        }
    });

    // Rest of existing scroll trigger animations...
    
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
    
    // ========== SOPHISTICATED ABOUT SECTION HOVER EFFECTS ==========
    
    // Journey chapters interactive hover
    document.querySelectorAll('.journey-chapter').forEach(chapter => {
        chapter.addEventListener('mouseenter', () => {
            gsap.to(chapter, {
                duration: 0.5,
                scale: 1.02,
                rotationY: 5,
                rotationX: 2,
                z: 50,
                ease: "power2.out",
                transformOrigin: "center center"
            });
            
            // Animate highlight badges
            gsap.to(chapter.querySelectorAll('.highlight-badge, .focus-item-large'), {
                duration: 0.3,
                y: -10,
                scale: 1.05,
                ease: "back.out(2)",
                stagger: 0.05
            });
        });
        
        chapter.addEventListener('mouseleave', () => {
            gsap.to(chapter, {
                duration: 0.5,
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                ease: "power2.out",
                transformOrigin: "center center"
            });
            
            gsap.to(chapter.querySelectorAll('.highlight-badge, .focus-item-large'), {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: "power2.out",
                stagger: 0.05
            });
        });
    });
    
    // Sidebar cards interactive effects
    document.querySelectorAll('.essence-card-enhanced, .experience-overview-enhanced').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.4,
                scale: 1.05,
                rotationY: 10,
                rotationX: 5,
                z: 30,
                ease: "power2.out"
            });
            
            // Animate pursuit items or experience items
            gsap.to(card.querySelectorAll('.pursuit-enhanced, .exp-item-enhanced'), {
                duration: 0.3,
                scale: 1.1,
                rotation: 'random(-5, 5)',
                ease: "elastic.out(1, 0.5)",
                stagger: 0.05
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                scale: 1,
                rotationY: 0,
                rotationX: 0,
                z: 0,
                ease: "power2.out"
            });
            
            gsap.to(card.querySelectorAll('.pursuit-enhanced, .exp-item-enhanced'), {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: "power2.out",
                stagger: 0.05
            });
        });
    });
    
    // Quote mark interactive rotation
    const quoteMark = document.querySelector('.quote-mark-large');
    if (quoteMark) {
        quoteMark.addEventListener('mouseenter', () => {
            gsap.to(quoteMark, {
                duration: 0.8,
                rotation: 360,
                scale: 1.2,
                ease: "elastic.out(1, 0.5)"
            });
        });
        
        quoteMark.addEventListener('mouseleave', () => {
            gsap.to(quoteMark, {
                duration: 0.5,
                rotation: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
    }
    
    // Chapter indicators interactive effects
    document.querySelectorAll('.chapter-indicators .indicator').forEach((indicator, index) => {
        indicator.addEventListener('mouseenter', () => {
            gsap.to(indicator, {
                duration: 0.3,
                scale: 1.3,
                rotation: 180,
                ease: "back.out(2)"
            });
        });
        
        indicator.addEventListener('mouseleave', () => {
            gsap.to(indicator, {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });
    
    // Experience numbers pulse effect on hover
    document.querySelectorAll('.exp-number-huge').forEach(number => {
        number.addEventListener('mouseenter', () => {
            gsap.to(number, {
                duration: 0.4,
                scale: 1.2,
                color: "#000000",
                ease: "elastic.out(1, 0.5)"
            });
        });
        
        number.addEventListener('mouseleave', () => {
            gsap.to(number, {
                duration: 0.4,
                scale: 1,
                color: "#666666",
                ease: "power2.out"
            });
        });
    });
    
    // Mouse interaction enhancement for existing floating elements
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
    
    // Enhanced letter-by-letter animations for section titles on scroll
    const sectionTitles = document.querySelectorAll('.section-title-enhanced');
    
    sectionTitles.forEach(title => {
        const letters = title.querySelectorAll('.animate-letters span');
        
        if (letters.length > 0) {
            // Set initial state for letters
            gsap.set(letters, {
                opacity: 0,
                y: 50,
                scale: 0.3,
                rotationX: 90
            });

            ScrollTrigger.create({
                trigger: title,
                start: 'top 80%',
                onEnter: () => {
                    // Letter-by-letter reveal animation
                    gsap.to(letters, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotationX: 0,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        stagger: {
                            amount: 0.6,
                            from: "start"
                        }
                    });
                },
                onLeaveBack: () => {
                    gsap.to(letters, {
                        opacity: 0,
                        y: 50,
                        scale: 0.3,
                        rotationX: 90,
                        duration: 0.5,
                        stagger: {
                            amount: 0.3,
                            from: "end"
                        }
                    });
                }
            });

            // Add interactive hover effects for individual letters
            letters.forEach(letter => {
                letter.addEventListener('mouseenter', () => {
                    gsap.to(letter, {
                        y: -10,
                        scale: 1.2,
                        duration: 0.3,
                        ease: "back.out(2)"
                    });
                });

                letter.addEventListener('mouseleave', () => {
                    gsap.to(letter, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "back.out(2)"
                    });
                });
            });
        } else {
            // Fallback for titles without letter spans
            ScrollTrigger.create({
                trigger: title,
                start: 'top 80%',
                onEnter: () => {
                    gsap.from(title.querySelectorAll('.title-word, .title-word-large'), {
                        duration: 1,
                        opacity: 0,
                        y: 50,
                        ease: "power2.out",
                        stagger: 0.2
                    });
                }
            });
        }
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