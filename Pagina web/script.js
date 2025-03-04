document.querySelector('.btn-cta').addEventListener('click', () => {
    window.location.href = 'https://discord.com/oauth2/authorize?...'; 
});

document.querySelector('.btn-cta.secondary').addEventListener('click', () => {
    window.location.href = 'https://discord.gg/mi-servidor'; 
});

document.addEventListener('DOMContentLoaded', () => {
    showSection('bienvenida');

    const menuLinks = document.querySelectorAll('.sidebar nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  
            const sectionId = event.target.getAttribute('data-section');  
            showSection(sectionId);  
        });
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}


