/**
* Evoo - Main JavaScript
* Enhanced interactions and animations for premium tech-forward design
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with offset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          preloader.remove()
        }, 500);
      }, 500);
    });
  }

  /**
   * Initialize AOS (Animate On Scroll)
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 50
    })
  });

  /**
   * Reveal animations on scroll
   */
  const revealElements = select('.reveal', true);
  if (revealElements.length > 0) {
    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  }

  /**
   * Parallax effect for hero background
   */
  const heroSection = select('#hero');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      
      if (scrolled < window.innerHeight) {
        heroSection.style.backgroundPositionY = `${rate}px`;
      }
    });
  }

  /**
   * Smooth reveal for pricing cards
   */
  const pricingBoxes = select('.pricing .box', true);
  if (pricingBoxes.length > 0) {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const pricingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          pricingObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    pricingBoxes.forEach(box => {
      box.style.opacity = '0';
      box.style.transform = 'translateY(30px)';
      box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      pricingObserver.observe(box);
    });
  }

  /**
   * Feature cards hover effect enhancement
   */
  const featureCards = select('.feature-card', true);
  if (featureCards.length > 0) {
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  /**
   * Button ripple effect
   */
  const buttons = select('.btn-buy, .hero-cta, .cta-button, .btn-learn-more', true);
  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
          left: ${x}px;
          top: ${y}px;
          width: 100px;
          height: 100px;
          margin-left: -50px;
          margin-top: -50px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Add ripple animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  /**
   * Glightbox initialization
   */
  const glightboxElements = select('.glightbox', true);
  if (glightboxElements.length > 0 && typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Swiper initialization for testimonials (if exists)
   */
  const swiperElements = select('.swiper', true);
  if (swiperElements.length > 0 && typeof Swiper !== 'undefined') {
    swiperElements.forEach(swiper => {
      new Swiper(swiper, {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });
    });
  }

  /**
   * Isotope layout initialization (if portfolio exists)
   */
  const portfolioContainer = select('.portfolio-container');
  if (portfolioContainer && typeof Isotope !== 'undefined') {
    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    });
  }

  /**
   * Portfolio lightbox
   */
  const portfolioLightboxElements = select('.portfolio-lightbox', true);
  if (portfolioLightboxElements.length > 0 && typeof GLightbox !== 'undefined') {
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  }

  /**
   * Counter animation for stats (if exists)
   */
  const counters = select('.counter, .purecounter', true);
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target')) || 0;
          const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
          
          let start = 0;
          const startTime = performance.now();
          
          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            counter.textContent = current;
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };
          
          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
  }

  /**
   * Form validation enhancement (if contact form exists)
   */
  const contactForm = select('.php-email-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const loading = this.querySelector('.loading');
      const errorMessage = this.querySelector('.error-message');
      const sentMessage = this.querySelector('.sent-message');
      
      if (loading) loading.style.display = 'block';
      if (errorMessage) errorMessage.style.display = 'none';
      if (sentMessage) sentMessage.style.display = 'none';
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        if (loading) loading.style.display = 'none';
        if (sentMessage) sentMessage.style.display = 'block';
        this.reset();
      }, 1500);
    });
  }

  /**
   * Typing effect for hero headline (optional enhancement)
   */
  const heroHeadline = select('#hero h1');
  if (heroHeadline && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const originalText = heroHeadline.textContent;
    heroHeadline.textContent = '';
    
    let charIndex = 0;
    const typeWriter = () => {
      if (charIndex < originalText.length) {
        heroHeadline.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 800);
  }

})();
