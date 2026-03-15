// Language Switcher and Translation Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'fr';
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Set initial language
        this.setLanguage(this.currentLang, false);

        // Setup language switcher buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });

        // Setup smooth scroll
        this.setupSmoothScroll();

        // Setup gallery animations
        this.setupGalleryAnimations();
    }

    setLanguage(lang, animate = true) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, defaulting to French`);
            lang = 'fr';
        }

        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update document title and meta description
        document.title = translations[lang].title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations[lang].description);
        }

        // Update all translatable elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Add fade effect if animate is true
        if (animate) {
            document.body.style.opacity = '0.95';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        }

        // Reload Facebook SDK with correct language
        this.reloadFacebookSDK(lang);
    }

    reloadFacebookSDK(lang) {
        // Map language codes to Facebook locale codes
        const fbLocales = {
            'fr': 'fr_FR',
            'en': 'en_US',
            'nl': 'nl_NL'
        };

        const locale = fbLocales[lang] || 'fr_FR';

        // Remove existing Facebook SDK
        const existingScript = document.querySelector('script[src*="connect.facebook.net"]');
        if (existingScript) {
            existingScript.remove();
        }

        // Clear Facebook root
        const fbRoot = document.getElementById('fb-root');
        if (fbRoot) {
            fbRoot.innerHTML = '';
        }

        // Delete Facebook SDK instance
        if (window.FB) {
            delete window.FB;
        }

        // Reload Facebook SDK with new locale
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = `https://connect.facebook.net/${locale}/sdk.js#xfbml=1&version=v19.0`;

        script.onload = () => {
            // Parse XFBML elements again
            if (window.FB) {
                window.FB.XFBML.parse();
            }
        };

        document.body.appendChild(script);
    }

    setupSmoothScroll() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupGalleryAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    }
}

// Initialize the language manager when script loads
const languageManager = new LanguageManager();
