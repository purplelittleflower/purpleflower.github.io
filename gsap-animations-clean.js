// ========== CLEAN GSAP ANIMATIONS ==========

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎭 GSAP Animations Initialized!');
    
    // Initialize animations with fallbacks
    initHeroAnimations();
    initScrollTriggerAnimations();
    initFloatingElements();
    initCursorEffects();
    initPortfolioAnimations();
    initTextEffects();
    initPageTransitions();
    initVerticalNavigation();
    initInteractivePortfolio();
});

// ========== CLEAN HERO ANIMATIONS ==========
function initHeroAnimations() {
    console.log('🎯 Initializing clean hero animations...');
    
    // Make everything visible first (no more emergency hacks)
    const heroTitle = document.querySelector('.hero-main-title');
    const heroLetters = document.querySelectorAll('.hero-main-title .animate-letters span');
    const heroSubtitles = document.querySelectorAll('.hero-subtitle-enhanced, .hero-subtitle-secondary');
    const heroDescription = document.querySelector('.hero-description-enhanced');
    const scatteredText = document.querySelectorAll('.scattered-text');
    
    // Ensure visibility without breaking layout
    if (heroTitle) heroTitle.style.opacity = '1';
    heroLetters.forEach(letter => letter.style.opacity = '1');
    heroSubtitles.forEach(subtitle => subtitle.style.opacity = '1');
    if (heroDescription) heroDescription.style.opacity = '1';
    scatteredText.forEach(text => text.style.opacity = '1');
    
    console.log('✅ Hero elements made visible');
    
    // Simple animations if GSAP works
    if (typeof gsap !== 'undefined') {
        try {
            // Gentle letter animation
            if (heroLetters.length > 0) {
                gsap.from(heroLetters, {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power2.out",
                    delay: 0.3
                });
            }
            
            // Subtitle animations
            gsap.from('.hero-subtitle-enhanced', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: 1
            });
            
            gsap.from('.hero-subtitle-secondary', {
                opacity: 0,
                y: 15,
                duration: 0.6,
                delay: 1.2
            });
        } catch (error) {
            console.log('Animations failed but content is visible:', error);
        }
    }
}

// ========== OTHER FUNCTIONS PLACEHOLDER ==========
function initScrollTriggerAnimations() {
    // Scroll animations here
}

function initFloatingElements() {
    // Floating animations here  
}

function initCursorEffects() {
    // Cursor effects here
}

function initPortfolioAnimations() {
    // Portfolio animations here
}

function initTextEffects() {
    // Text effects here
}

function initPageTransitions() {
    // Page transitions here
}

function initVerticalNavigation() {
    // Navigation here
}

function initInteractivePortfolio() {
    // Interactive portfolio here
}

console.log('🎭 Clean GSAP Animations Loaded! 🚀');