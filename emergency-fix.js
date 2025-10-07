// Emergency fix to make hero content visible
console.log('🚨 Emergency fix script loading...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚨 Emergency fix script executing...');
    
    // Force visibility of hero elements with timeout to ensure DOM is ready
    setTimeout(() => {
        console.log('🚨 Applying emergency visibility fixes...');
        
        const heroSection = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroTitle = document.querySelector('.hero-main-title');
        const titleLines = document.querySelectorAll('.title-line-1, .title-line-2, .title-line-3');
        const allHeroElements = document.querySelectorAll('.hero, .hero *, .hero-content, .hero-content *');
        
        console.log('Hero section found:', !!heroSection);
        console.log('Hero content found:', !!heroContent);
        console.log('Hero title found:', !!heroTitle);
        console.log('Title lines found:', titleLines.length);
        console.log('All hero elements found:', allHeroElements.length);
        
        // Nuclear option: make everything visible
        allHeroElements.forEach((el, index) => {
            if (el) {
                el.style.cssText = `
                    opacity: 1 !important;
                    visibility: visible !important;
                    display: ${el.tagName === 'SPAN' ? 'inline' : 'block'} !important;
                    transform: none !important;
                    animation: none !important;
                    color: white !important;
                    position: relative !important;
                    z-index: 1000 !important;
                `;
                console.log(`Fixed element ${index}:`, el.tagName, el.className);
            }
        });
        
        // Special handling for main title
        if (heroTitle) {
            heroTitle.style.cssText = `
                opacity: 1 !important;
                visibility: visible !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                color: white !important;
                position: relative !important;
                z-index: 1001 !important;
                font-size: 4rem !important;
                margin: 2rem 0 !important;
            `;
            
            // Add fallback text if needed
            if (heroTitle.textContent.trim() === '') {
                heroTitle.innerHTML = `
                    <span style="color: white; font-size: 3rem; opacity: 1 !important;">CREATIVE</span>
                    <span style="color: white; font-size: 4rem; opacity: 1 !important;">ACADEMIC</span>
                    <span style="color: white; font-size: 3.5rem; opacity: 1 !important;">RENAISSANCE</span>
                `;
            }
        }
        
        console.log('✅ Emergency fix applied!');
        
    }, 100);
    
    // Also try after a longer delay
    setTimeout(() => {
        console.log('🚨 Applying delayed emergency fixes...');
        const heroTitle = document.querySelector('.hero-main-title');
        if (heroTitle) {
            heroTitle.style.cssText = `
                opacity: 1 !important;
                visibility: visible !important;
                display: flex !important;
                flex-direction: column !important;
                color: white !important;
                font-size: 4rem !important;
                text-align: center !important;
                position: relative !important;
                z-index: 2000 !important;
                margin: 2rem auto !important;
            `;
        }
    }, 2000);
});