// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
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
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
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