// Main JavaScript file for the IT Services Website

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.navigation ul');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // In a real implementation, you would send this data to a server
                // For now, we'll just show a success message
                alert('Thank you for your message! We will contact you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});

// Function to handle form submission via email (for static sites)
function submitContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validate required fields
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    // Create mailto link with form data
    const mailtoLink = `mailto:support@devsolutions.pk?subject=${encodeURIComponent(subject || 'Contact from website')}&body=${encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    event.target.reset();
    
    // Show success message
    alert('Thank you for contacting us! We will get back to you soon.');
    
    return true;
}