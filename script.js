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
    
    // ========== GLOW TEXT EFFECTS DISABLED BY REQUEST ==========
    
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
    
    // ========== LOADING ANIMATION DISABLED ==========
    
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

    // ========== VERTICAL NAV SCROLLSPY & SMOOTH SCROLL ==========
    const verticalNavLinks = Array.from(document.querySelectorAll('.vertical-nav .vertical-nav-link'));
    const idToLink = new Map();
    const observedSections = [];

    verticalNavLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#')) {
            const id = href.slice(1);
            const section = document.getElementById(id);
            if (section) {
                idToLink.set(id, link);
                observedSections.push(section);
            }
        }
    });

    let currentActiveId = null;

    const setActiveLink = (id) => {
        if (id && id !== currentActiveId) {
            verticalNavLinks.forEach(l => l.classList.remove('active'));
            const link = idToLink.get(id);
            if (link) {
                link.classList.add('active');
                verticalNavLinks.forEach(l => l.removeAttribute('aria-current'));
                link.setAttribute('aria-current', 'page');
                currentActiveId = id;
            }
        }
    };

    // Smooth scroll for vertical nav
    verticalNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '';
            if (href.startsWith('#')) {
                e.preventDefault();
                const id = href.slice(1);
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveLink(id);
                }
            }
        });
    });

    // Update active link based on scroll position (scrollspy)
    const updateActiveOnScroll = () => {
        const viewportProbeY = window.innerHeight * 0.33; // one-third down the viewport
        let bestId = null;
        let bestDistance = Infinity;

        observedSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top - viewportProbeY);
            // Prefer sections that overlap the probe line
            const overlaps = rect.top <= viewportProbeY && rect.bottom >= viewportProbeY;
            if (overlaps) {
                if (distance < bestDistance) {
                    bestDistance = distance;
                    bestId = section.id;
                }
            }
        });

        // Fallback: pick the topmost section above the probe if none overlaps
        if (!bestId) {
            observedSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= viewportProbeY && viewportProbeY <= rect.bottom) {
                    bestId = section.id;
                }
            });
            if (!bestId) {
                let topmost = null;
                observedSections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= viewportProbeY) {
                        if (!topmost || rect.top > topmost.top) {
                            topmost = { id: section.id, top: rect.top };
                        }
                    }
                });
                if (topmost) bestId = topmost.id;
            }
        }

        if (bestId) setActiveLink(bestId);
    };

    // Throttle with rAF
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initialize on load
    updateActiveOnScroll();
});
/* ========================================== */
/* 3D GALLERY INTERACTIVITY */
/* ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize 3D Gallery
    const gallery3D = document.querySelector('.gallery-3d-nav');
    const hoverZones = document.querySelectorAll('.hover-zone > i');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (gallery3D && hoverZones.length && galleryItems.length) {
        // Set initial center values
        const centerP = Math.ceil(galleryItems.length / 2);
        const centerZ = Math.ceil(hoverZones.length / 2);
        
        gallery3D.style.setProperty('--p', centerP);
        gallery3D.style.setProperty('--z', centerZ);
        
        // Hover zone tracking for 3D effect
        hoverZones.forEach((zone, index) => {
            zone.addEventListener('mouseenter', () => {
                gallery3D.style.setProperty('--z', index + 1);
            });
        });
        
        // Gallery item tracking for 3D effect
        galleryItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                gallery3D.style.setProperty('--p', index + 1);
            });
        });
        
        // Reset to center on mouseleave (not remove)
        gallery3D.addEventListener('mouseleave', () => {
            gallery3D.style.setProperty('--p', centerP);
            gallery3D.style.setProperty('--z', centerZ);
        });
    }
    
    // Gallery Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const allGalleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length && allGalleryItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter gallery items
                allGalleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

/* ========== END 3D GALLERY ========== */

/* ========================================== */
/* COPYRIGHT PROTECTION */
/* ========================================== */

// Disable right-click on images
document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click on all images
    const images = document.querySelectorAll('img, .gallery-img, .gallery-item');
    images.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        });
        
        // Prevent dragging
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    });
    
    // Disable keyboard shortcuts for saving, screenshots, and copying
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+S (Save)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Disable Ctrl+C (Copy)
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Disable Ctrl+X (Cut)
        if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Disable Ctrl+A (Select All)
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Disable Ctrl+Shift+I (DevTools)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
            e.preventDefault();
            return false;
        }
        
        // Disable F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+Shift+C (Inspect Element)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+U (View Source)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }
        
        // Disable screenshot shortcuts
        // Windows: PrtScn, Alt+PrtScn, Win+PrtScn, Win+Shift+S
        if (e.key === 'PrintScreen' || e.key === 'Print') {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Mac: Cmd+Shift+3 (Full screenshot) - using keyCode for better detection
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === '3' || e.key === '#' || e.keyCode === 51)) {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Mac: Cmd+Shift+4 (Partial screenshot)
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === '4' || e.key === '$' || e.keyCode === 52)) {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Mac: Cmd+Shift+5 (Screenshot & recording menu)
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === '5' || e.key === '%' || e.keyCode === 53)) {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Mac: Cmd+Shift+6 (Touch Bar screenshot on MacBook Pro)
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === '6' || e.key === '^' || e.keyCode === 54)) {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
        
        // Windows: Win+Shift+S (Snipping tool) - check for S key with shift
        if (e.shiftKey && (e.key === 's' || e.key === 'S') && (e.metaKey || e.key === 'Meta')) {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
    });
    
    // Also disable copy event directly
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        showCopyrightNotice();
        return false;
    });
    
    // Disable cut event
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        showCopyrightNotice();
        return false;
    });
    
    // Disable text selection on images and gallery
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'IMG' || 
            e.target.closest('.gallery-item') || 
            e.target.closest('.gallery-3d-nav')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Add subtle watermark overlay dynamically
    addWatermarkToImages();
});

// Show copyright notice when someone tries to save, screenshot, or copy
function showCopyrightNotice() {
    // Create or show notice
    let notice = document.getElementById('copyright-notice');
    
    if (!notice) {
        notice = document.createElement('div');
        notice.id = 'copyright-notice';
        notice.innerHTML = `
            <div class="copyright-notice-content">
                <h3>🚫 © All Rights Reserved</h3>
                <p>This content is protected by copyright.</p>
                <p><strong>Screenshots, copying, and downloads are not permitted.</strong></p>
                <p><strong>⚠️ Unauthorized use is monitored and may result in legal action.</strong></p>
                <p>For licensing inquiries, please <a href="copyright.html#licensing">contact us</a>.</p>
            </div>
        `;
        document.body.appendChild(notice);
    }
    
    notice.classList.add('show');
    
    setTimeout(() => {
        notice.classList.remove('show');
    }, 4000);
}

// Add enhanced watermark to gallery images
function addWatermarkToImages() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        // Skip if watermark already exists
        if (item.querySelector('.image-watermark')) return;
        
        // Standard watermark (always visible)
        const watermark = document.createElement('div');
        watermark.className = 'image-watermark';
        watermark.innerHTML = '© 2025';
        item.appendChild(watermark);
        
        // Enhanced hover watermark (more prominent)
        const hoverWatermark = document.createElement('div');
        hoverWatermark.className = 'image-watermark-hover';
        hoverWatermark.innerHTML = '© 2025 All Rights Reserved<br>Unauthorized use prohibited';
        item.appendChild(hoverWatermark);
    });
}

// Licensing Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const licensingForm = document.getElementById('licensingForm');
    
    if (licensingForm) {
        licensingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                inquiryType: document.getElementById('inquiry-type').value,
                artworkInterest: document.getElementById('artwork-interest').value,
                message: document.getElementById('message').value
            };
            
            // Create mailto link (since this is a static site)
            const subject = encodeURIComponent(`Licensing Inquiry: ${formData.inquiryType}`);
            const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Inquiry Type: ${formData.inquiryType}
Artwork Interest: ${formData.artworkInterest || 'N/A'}

Message:
${formData.message}
            `);
            
            // Open email client
            window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
            
            // Show success message
            alert('Thank you! Your email client will open. Please send the pre-filled email, and I will respond within 2-3 business days.');
            
            // Reset form
            licensingForm.reset();
        });
    }
});

/* ========== END COPYRIGHT PROTECTION ========== */

/* ========================================== */
/* CONTACT POPUP FUNCTIONALITY */
/* ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    const contactTrigger = document.getElementById('contactTrigger');
    const contactPopup = document.getElementById('contactPopup');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupClose = document.getElementById('popupClose');
    const popupForm = document.getElementById('popupContactForm');
    const popupSuccess = document.getElementById('popupSuccess');
    
    // Open popup
    function openPopup() {
        contactPopup.classList.add('active');
        popupOverlay.classList.add('active');
        contactTrigger.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Close popup
    function closePopup() {
        contactPopup.classList.remove('active');
        popupOverlay.classList.remove('active');
        contactTrigger.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Reset success message after animation
        setTimeout(() => {
            popupSuccess.classList.remove('show');
        }, 300);
    }
    
    // Event listeners for opening
    if (contactTrigger) {
        contactTrigger.addEventListener('click', openPopup);
    }
    
    // CTA button in contact section
    const ctaContactButton = document.getElementById('ctaContactButton');
    if (ctaContactButton) {
        ctaContactButton.addEventListener('click', openPopup);
    }
    
    // Nav contact button
    const navContactTrigger = document.getElementById('navContactTrigger');
    if (navContactTrigger) {
        navContactTrigger.addEventListener('click', openPopup);
    }
    
    // Event listeners for closing
    if (popupClose) {
        popupClose.addEventListener('click', closePopup);
    }
    
    if (popupOverlay) {
        popupOverlay.addEventListener('click', closePopup);
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactPopup.classList.contains('active')) {
            closePopup();
        }
    });
    
    // Form submission
    if (popupForm) {
        popupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('popup-firstName').value,
                lastName: document.getElementById('popup-lastName').value,
                email: document.getElementById('popup-email').value,
                message: document.getElementById('popup-message').value,
                newsletter: document.getElementById('popup-newsletter').checked,
                terms: document.getElementById('popup-terms').checked
            };
            
            // Validate terms
            if (!formData.terms) {
                alert('Please agree to the Terms of Use and Copyright Policy to continue.');
                return;
            }
            
            // Create mailto link (for static site)
            const subject = encodeURIComponent(`Contact Form: ${formData.firstName} ${formData.lastName}`);
            const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Newsletter Subscription: ${formData.newsletter ? 'Yes' : 'No'}

Message:
${formData.message}

---
Sent from portfolio contact form
            `);
            
            // Open email client
            window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
            
            // Show success message
            popupSuccess.classList.add('show');
            
            // Hide form temporarily
            popupForm.style.display = 'none';
            
            // Reset form and close after delay
            setTimeout(() => {
                popupForm.reset();
                popupForm.style.display = 'block';
                closePopup();
            }, 3000);
        });
    }
    
    // Also open popup when clicking nav contact link
    const contactNavLinks = document.querySelectorAll('a[href="#contact"]');
    contactNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openPopup();
        });
    });
});

/* ========== END CONTACT POPUP ========== */


/* ========== ENHANCED PROTECTION FEATURES ========== */

// Terms of Use Modal - Show on EVERY visit
document.addEventListener('DOMContentLoaded', function() {
    // Always show the terms modal on every page load
    showTermsModal();
    
    // Protection banner removed per user request
    // addProtectionBanner();
});

function showTermsModal() {
    const modal = document.createElement('div');
    modal.id = 'terms-modal';
    modal.className = 'terms-modal';
    modal.innerHTML = `
        <div class="terms-modal-content">
            <div class="terms-modal-header">
                <h2>⚖️ Terms of Use</h2>
            </div>
            <div class="terms-modal-body">
                <p><strong>Welcome to Creative Academic Renaissance!</strong></p>
                <p>Before exploring, please note:</p>
                <ul>
                    <li>✅ All content is protected by copyright</li>
                    <li>🚫 Screenshots, downloads, and reproduction are prohibited</li>
                    <li>⚠️ Unauthorized use is monitored and may result in legal action</li>
                    <li>📧 Licensing options available - please contact for inquiries</li>
                    <li>🎨 Viewing for personal inspiration is welcomed</li>
                </ul>
                <p>By continuing, you agree to respect these terms.</p>
                <div class="terms-modal-footer">
                    <button id="acceptTermsBtn" class="btn-accept-terms">I Accept & Continue</button>
                    <a href="terms.html" target="_blank" class="terms-link">Read Full Terms</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    
    // Show modal with animation
    setTimeout(() => modal.classList.add('show'), 100);
    
    // Accept button handler
    document.getElementById('acceptTermsBtn').addEventListener('click', function() {
        localStorage.setItem('termsAccepted', 'true');
        localStorage.setItem('termsAcceptedDate', new Date().toISOString());
        
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    });
}

function addProtectionBanner() {
    // Find gallery sections
    const gallerySections = document.querySelectorAll('.visuals-section-3d, .gallery-section, #visuals, #gallery');
    
    gallerySections.forEach(section => {
        // Skip if banner already exists
        if (section.querySelector('.protection-banner')) return;
        
        const banner = document.createElement('div');
        banner.className = 'protection-banner';
        banner.innerHTML = `
            <span class="banner-icon">🛡️</span>
            <span class="banner-text">Protected Content - All images are copyrighted and monitored</span>
            <a href="copyright.html" class="banner-link">Learn More</a>
        `;
        
        // Insert at the beginning of the section
        section.insertBefore(banner, section.firstChild);
    });
}

// Track potential unauthorized actions (for evidence)
let protectionLog = [];

function logProtectionEvent(eventType) {
    const event = {
        type: eventType,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        page: window.location.href
    };
    
    protectionLog.push(event);
    
    // Store in sessionStorage for current session
    sessionStorage.setItem('protectionLog', JSON.stringify(protectionLog));
    
    // Optional: Send to analytics or your server
    // console.log('Protection event logged:', event);
}

// Update existing protection events to log
document.addEventListener('contextmenu', function(e) {
    logProtectionEvent('right-click-attempt');
});

// Enhanced logging for all protection attempts
document.addEventListener('keydown', function(e) {
    // Log screenshot attempts
    if (e.key === 'PrintScreen' || e.key === 'Print' ||
        ((e.metaKey || e.ctrlKey) && e.shiftKey && ['3', '4', '5', '6', '#', '$', '%', '^'].includes(e.key))) {
        logProtectionEvent('screenshot-attempt');
    }
    
    // Log save attempts
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        logProtectionEvent('save-attempt');
    }
    
    // Log copy attempts
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        logProtectionEvent('copy-attempt');
    }
    
    // Log cut attempts
    if ((e.ctrlKey || e.metaKey) && (e.key === 'x' || e.key === 'X')) {
        logProtectionEvent('cut-attempt');
    }
    
    // Log select all attempts
    if ((e.ctrlKey || e.metaKey) && (e.key === 'a' || e.key === 'A')) {
        logProtectionEvent('select-all-attempt');
    }
});

// Log direct copy/cut events
document.addEventListener('copy', function(e) {
    logProtectionEvent('copy-event');
});

document.addEventListener('cut', function(e) {
    logProtectionEvent('cut-event');
});

/* ========== END ENHANCED PROTECTION ========== */


