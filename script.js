// Basic Script for Form Handling (Example)

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lead-form');
    const formResponse = document.getElementById('form-response');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Basic validation (can be enhanced)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                formResponse.textContent = 'Please fill in required fields (Name and Email).';
                formResponse.style.color = 'red';
                return;
            }

            // Simulate form submission (replace with actual backend call)
            console.log('Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', document.getElementById('phone').value);
            console.log('Coverage:', document.getElementById('coverage').value);
            console.log('Message:', document.getElementById('message').value);

            // Show success message
            formResponse.textContent = 'Thank you! Your quote request has been received. We will contact you shortly.';
            formResponse.style.color = 'green';

            // Optionally clear the form
            form.reset();

            // Hide message after a few seconds
            setTimeout(() => {
                formResponse.textContent = '';
            }, 5000);
        });
    }

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
