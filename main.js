// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    icon.classList.toggle('fa-sun', savedTheme === 'dark-mode');
    icon.classList.toggle('fa-moon', savedTheme === 'light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
    icon.classList.toggle('fa-sun', isDark);
    icon.classList.toggle('fa-moon', !isDark);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// // Form Submission
// const contactForm = document.getElementById('contact-form');

// contactForm?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const formData = new FormData(contactForm);
//     const data = Object.fromEntries(formData);

//     // Add your form submission logic here
//     // For example, sending to an API endpoint
//     try {
//         // Simulate form submission
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         alert('Message sent successfully!');
//         contactForm.reset();
//     } catch (error) {
//         alert('Error sending message. Please try again.');
//     }
// });

// // Intersection Observer for Animations
// const observerOptions = {
//     threshold: 0.1
// };

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Initialize EmailJS (replace with your Public Key)
    emailjs.init("H0sxjJf51HC7stcqd");

    try {
        await emailjs.send("service_odwmtxo", "template_mkxb5dd", {
            user_name: data.name, // Replace with your form field names
            user_email: data.email,
            message: data.message
        });

        alert("Message sent successfully!");
        contactForm.reset();
    } catch (error) {
        alert("Error sending message. Please try again.");
        console.error("EmailJS Error:", error);
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Skill bars animation
const skillLevels = document.querySelectorAll('.skill-level');
skillLevels.forEach(skill => {
    observer.observe(skill);
});
