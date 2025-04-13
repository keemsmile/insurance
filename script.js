// Basic Script for Form Handling (Example)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lead-form');
    const formResponse = document.getElementById('form-response');

     // --- Optional: Smooth Scrolling --- 
    const navLinks = document.querySelectorAll('.navbar nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position considering fixed navbar height if necessary
                // let navbarHeight = document.querySelector('.navbar').offsetHeight;
                // let elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                // let offsetPosition = elementPosition - navbarHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust offset as needed (e.g., navbar height)
                    behavior: 'smooth'
                });
            }
        });
    });

     // --- Optional: Active Nav Link Highlighting on Scroll --- 
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('.navbar nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust offset for navbar height + some buffer
            if (pageYOffset >= (sectionTop - sectionHeight / 3 - 70)) { 
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
        // Special case for top of page
        if (pageYOffset < sections[0].offsetTop - 100) {
             navLi.forEach(a => a.classList.remove('active'));
             document.querySelector('.navbar nav ul li a[href="#hero"]').classList.add('active');
        }
    });


});
