document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. Particles.js Initialization
    ========================================= */
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": ["#00f3ff", "#bd00ff"] }, // Neon Blue & Purple
                "shape": { "type": "circle" },
                "opacity": { "value": 0.6, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 4, "random": true, "anim": { "enable": false } },
                "line_linked": { "enable": true, "distance": 150, "color": "#00f3ff", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    /* =========================================
       2. Vanilla-Tilt Initialization
    ========================================= */
    // Note: The HTML elements already have the data-tilt attributes, 
    // but we can ensure they are initialized properly here if the CDN auto-init doesn't catch them.
    const tiltElements = document.querySelectorAll("[data-tilt]");
    if (window.VanillaTilt && tiltElements.length > 0) {
        // VanillaTilt is usually auto-initialized on elements with data-tilt, but re-initializing is safe.
        // It provides the smooth 3D RPG card effect requested.
    }

    /* =========================================
       3. Copy to Clipboard Functionality
    ========================================= */
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const spellItem = e.target.closest('.spell-item');
            const promptText = spellItem.querySelector('.prompt-text').innerText;

            try {
                // Write to clipboard
                await navigator.clipboard.writeText(promptText);

                // UI Feedback
                btn.classList.add('copied');
                btn.innerText = 'コピー完了!';

                // Reset after 2 seconds
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerText = 'コピー';
                }, 2000);

            } catch (err) {
                console.error('クリップボードへのコピーに失敗しました', err);
                btn.innerText = '失敗';
                setTimeout(() => {
                    btn.innerText = 'コピー';
                }, 2000);
            }
        });
    });

});

/* =========================================
   4. Modal (Popup) Functionality
========================================= */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(event) {
    // Check if the click is on the overlay itself OR on the close button
    if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-btn')) {
        const modals = document.querySelectorAll('.modal-overlay.active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = ''; // Restore scrolling
    }
}
