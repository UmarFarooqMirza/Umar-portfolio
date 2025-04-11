// Typing Effect Animation
const typingText = document.querySelector('.typing-effect');
const phrases = [
    'Python Developer', 
    'Data Analyst', 
    'Web Developer'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

// ===== Hamburger Menu Functionality =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isEnd = true;
        isDeleting = true;
        setTimeout(type, 1500); // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500); // Pause before typing next phrase
    } else {
        const typingSpeed = isDeleting ? 100 : 150;
        setTimeout(type, typingSpeed);
    }
}
// togglebar(max-width 425px)
function toggleNavBar(){
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("open")
}


// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});


// Back to Top Button
const backToTopButton = document.createElement('a');
backToTopButton.href = '#home';
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Add current year to footer (add this element to your HTML)
const yearElement = document.createElement('div');
yearElement.id = 'year';
document.querySelector('footer').prepend(yearElement);

// Project Modal functionality
// const projects = document.querySelectorAll('.project');
// projects.forEach(project => {
//     project.addEventListener('click', () => {
//         const title = project.querySelector('h3').textContent;
//         const description = project.querySelector('p').textContent;
        
//         // Create modal
//         const modal = document.createElement('div');
//         modal.className = 'project-modal';
//         modal.innerHTML = `
//             <div class="modal-content">
//                 <span class="close-modal">&times;</span>
//                 <h3>${title}</h3>
//                 <p>${description}</p>
//                 <a href="#" class="btn">View Project</a>
//             </div>
//         `;
        
//         document.body.appendChild(modal);
        
//         // Close modal
//         modal.querySelector('.close-modal').addEventListener('click', () => {
//             modal.remove();
//         });
        
//         // Close when clicking outside
//         modal.addEventListener('click', (e) => {
//             if (e.target === modal) {
//                 modal.remove();
//             }
//         });
//     });
// });

// ------------------------------------------

// Project Modal functionality
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h3').textContent;
        const description = project.querySelector('p').innerHTML;
        const projectLink = project.getAttribute('data-link');

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>${title}</h3>
                <p>${description}</p>
                <a href="${projectLink}" class="btn" target="_blank">View Project</a>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        // Close when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});





// Add some CSS for the modal (you can add this to your CSS file)
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .project-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    }
    
    .modal-content {
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
        max-width: 600px;
        position: relative;
    }
    
    .close-modal {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 1.5rem;
        cursor: pointer;
    }
    
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .back-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .dark-mode-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1001;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
document.head.appendChild(modalStyle);
