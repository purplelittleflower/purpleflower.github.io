// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MAGICAL CURSOR EFFECTS ========== 
    const cursorGlow = document.querySelector('.cursor-glow');
    const cursorTrail = document.querySelector('.cursor-trail');
    const floatingElements = document.querySelectorAll('.floating-note, .floating-academia');
    
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    // Cursor tracking
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update cursor glow position
        cursorGlow.style.left = mouseX - 10 + 'px';
        cursorGlow.style.top = mouseY - 10 + 'px';
        
        // Smooth trail following
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        cursorTrail.style.left = trailX - 4 + 'px';
        cursorTrail.style.top = trailY - 4 + 'px';
        
        // Floating elements attraction
        floatingElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;
            const distance = Math.sqrt(Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2));
            
            if (distance < 100) {
                const pullStrength = (100 - distance) / 100;
                const pullX = (mouseX - elementX) * pullStrength * 0.3;
                const pullY = (mouseY - elementY) * pullStrength * 0.3;
                element.style.transform = `translate(${pullX}px, ${pullY}px) scale(${1 + pullStrength * 0.2})`;
                element.style.opacity = 0.7 + pullStrength * 0.3;
            } else {
                element.style.transform = '';
                element.style.opacity = '';
            }
        });
    });
    
    // ========== 3D TILT EFFECTS ========== 
    const tiltElements = document.querySelectorAll('.tilt-3d');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -15;
            const rotateY = (x - centerX) / centerX * 15;
            
            element.style.setProperty('--tilt-x', rotateX + 'deg');
            element.style.setProperty('--tilt-y', rotateY + 'deg');
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.setProperty('--tilt-x', '0deg');
            element.style.setProperty('--tilt-y', '0deg');
        });
    });
    
    // ========== MAGNETIC HOVER EFFECTS ========== 
    const magneticElements = document.querySelectorAll('.magnetic, .cta-button');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.setProperty('--magnetic-x', x * 0.3 + 'px');
            element.style.setProperty('--magnetic-y', y * 0.3 + 'px');
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.setProperty('--magnetic-x', '0px');
            element.style.setProperty('--magnetic-y', '0px');
        });
    });
    
    // ========== SCROLL PROGRESS INDICATOR ========== 
    const scrollProgressBar = document.querySelector('.scroll-progress-bar');
    
    const updateScrollProgress = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgressBar.style.width = scrollPercent + '%';
    };
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // ========== SCROLL REVEAL ANIMATIONS ========== 
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // ========== PARALLAX SCROLLING ========== 
    const parallaxElements = document.querySelectorAll('.parallax-section');
    
    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const rate = scrolled * -0.5 * (index + 1);
            element.style.transform = `translateY(${rate}px)`;
        });
    };
    
    window.addEventListener('scroll', updateParallax);
    
    // ========== FLOATING ELEMENTS ENHANCED MOVEMENT ========== 
    const enhanceFloatingMovement = () => {
        floatingElements.forEach((element, index) => {
            const time = Date.now() * 0.001;
            const x = Math.sin(time + index) * 20;
            const y = Math.cos(time + index * 0.5) * 30;
            
            if (!element.style.transform.includes('translate(')) {
                element.style.transform += ` translate(${x}px, ${y}px)`;
            }
        });
        
        requestAnimationFrame(enhanceFloatingMovement);
    };
    
    enhanceFloatingMovement();
    
    // ========== GLOW TEXT EFFECTS ON SCROLL ========== 
    const addGlowToVisibleElements = () => {
        const elements = document.querySelectorAll('h1, h2, h3');
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                element.classList.add('glow-text');
            } else {
                element.classList.remove('glow-text');
            }
        });
    };
    
    window.addEventListener('scroll', addGlowToVisibleElements);
    
    // ========== LIQUID BACKGROUND EFFECTS ========== 
    const addLiquidEffects = () => {
        const cards = document.querySelectorAll('.portfolio-card, .research-card, .journey-chapter');
        
        cards.forEach(card => {
            card.classList.add('liquid-bg');
        });
    };
    
    addLiquidEffects();
    
    // ========== SOPHISTICATED HAMBURGER MENU ========== 
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenuOverlay = document.querySelector('.nav-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    // Toggle menu function
    const toggleMenu = () => {
        const isActive = hamburgerMenu.classList.contains('active');
        
        if (isActive) {
            // Close menu
            hamburgerMenu.classList.remove('active');
            navMenuOverlay.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
            
            // Add closing animation to menu items
            mobileNavLinks.forEach((link, index) => {
                link.style.transitionDelay = `${(mobileNavLinks.length - index - 1) * 0.1}s`;
            });
        } else {
            // Open menu
            hamburgerMenu.classList.add('active');
            navMenuOverlay.classList.add('active');
            hamburgerMenu.setAttribute('aria-expanded', 'true');
            body.style.overflow = 'hidden';
            
            // Reset animation delays for opening
            mobileNavLinks.forEach((link, index) => {
                link.style.transitionDelay = `${(index + 1) * 0.1}s`;
            });
        }
    };
    
    // Hamburger menu click event
    hamburgerMenu.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside (on overlay)
    navMenuOverlay.addEventListener('click', (e) => {
        if (e.target === navMenuOverlay) {
            toggleMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && hamburgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // ========== LOADING ANIMATION ========== 
    // Add page entrance animation
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.body.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100);
    
    // ========== ENHANCED SCROLL ANIMATIONS ==========
    
    // Advanced Intersection Observer with stagger effects
    const createScrollAnimation = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay for multiple elements
                    const delay = entry.target.dataset.delay || 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, delay);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        return observer;
    };
    
    const scrollObserver = createScrollAnimation();
    
    // Add animation classes to elements
    const addScrollAnimations = () => {
        // Animate sections with fade in from bottom
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.classList.add('animate-on-scroll');
            section.dataset.delay = index * 100;
            scrollObserver.observe(section);
        });
        
        // Animate portfolio cards with scale effect
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        portfolioCards.forEach((card, index) => {
            card.classList.add('scale-in');
            card.dataset.delay = index * 150;
            scrollObserver.observe(card);
        });
        
        // Animate stats with slide effects
        const stats = document.querySelectorAll('.stat');
        stats.forEach((stat, index) => {
            if (index % 2 === 0) {
                stat.classList.add('slide-in-left');
            } else {
                stat.classList.add('slide-in-right');
            }
            stat.dataset.delay = index * 200;
            scrollObserver.observe(stat);
        });
        
        // Animate timeline items alternately
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            if (index % 2 === 0) {
                item.classList.add('slide-in-left');
            } else {
                item.classList.add('slide-in-right');
            }
            item.dataset.delay = index * 100;
            scrollObserver.observe(item);
        });
        
        // Animate academic items
        const academicItems = document.querySelectorAll('.study-item, .academic-item');
        academicItems.forEach((item, index) => {
            item.classList.add('animate-on-scroll');
            item.dataset.delay = index * 150;
            scrollObserver.observe(item);
        });
    };
    
    // Initialize animations
    addScrollAnimations();
    
    // Smooth scrolling for navigation links with loading animation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Add loading effect to clicked link
                const originalText = this.textContent;
                this.innerHTML = '<span class="loading"></span>';
                
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Restore link text after scroll
                setTimeout(() => {
                    this.textContent = originalText;
                }, 600);
            }
        });
    });
    
    // ========== ENHANCED CTA BUTTON FUNCTIONALITY ==========
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Enhanced button loading state
            const originalText = this.textContent;
            this.innerHTML = '<span class="loading"></span> Loading...';
            this.disabled = true;
            
            // Navigate with delay for visual feedback
            setTimeout(() => {
                if (originalText.includes('Journey')) {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                        const offsetTop = aboutSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } else if (originalText.includes('Portfolio')) {
                    const portfolioSection = document.getElementById('portfolio');
                    if (portfolioSection) {
                        const offsetTop = portfolioSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        const offsetTop = contactSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
                
                // Restore button after scroll
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 800);
            }, 300);
        });
        
        // Add hover sound effect simulation
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // ========== ENHANCED SCROLL EFFECTS ==========
    
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const header = document.querySelector('header');
        
        // Enhanced header scroll effect
        if (scrolled > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
        
        // Show/hide back to top button
        if (scrolled > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
        
        // Keep hero section stable (removed parallax that was causing text to fall)
    });
    
    // Back to top button click handler
    backToTopButton.addEventListener('click', function() {
        // Add loading state
        this.innerHTML = '<span class="loading"></span>';
        this.disabled = true;
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Restore button after scroll
        setTimeout(() => {
            this.innerHTML = '<span>↑</span>';
            this.disabled = false;
        }, 800);
    });
    
    // ========== ENHANCED FORM INTERACTIONS ==========
    
    // Enhanced form animations
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    formInputs.forEach(input => {
        // Add focus animations
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            this.parentElement.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        });
        
        // Add typing animation
        input.addEventListener('input', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Add scroll-triggered counter animation for stats
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat .number');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            let current = 0;
            const increment = target / 50;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Start animation when element is visible
            scrollObserver.observe(counter.parentElement);
            counter.parentElement.addEventListener('animateIn', updateCounter);
        });
    };
    
    animateCounters();
    
    // Mobile menu toggle (basic implementation)
    const createMobileMenu = function() {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('nav');
            const navLinks = document.querySelector('.nav-links');
            
            if (!document.querySelector('.mobile-menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.className = 'mobile-menu-toggle';
                menuToggle.innerHTML = '☰';
                menuToggle.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #333;
                `;
                
                menuToggle.addEventListener('click', function() {
                    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                    if (navLinks.style.display === 'flex') {
                        navLinks.style.cssText = `
                            display: flex !important;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            right: 0;
                            background: white;
                            flex-direction: column;
                            padding: 1rem;
                            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                        `;
                    }
                });
                
                nav.appendChild(menuToggle);
            }
        }
    };
    
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});