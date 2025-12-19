document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const quote = "Every moment with you is like a beautiful dream...";
    
    // Start Journey
    startBtn.addEventListener('click', () => {
        switchSection('welcome-screen', 'tree-section');
        typeWriter(quote, 'typewriter-quote', startTree);
    });

    // Final Surprise
    document.getElementById('final-trigger').addEventListener('click', () => {
        switchSection('memory-section', 'final-section');
    });

    // Envelope Logic
    document.getElementById('envelope').addEventListener('click', () => {
        document.getElementById('letter-content').classList.toggle('hidden');
    });

    // Gift Logic
    document.getElementById('gift').addEventListener('click', () => {
        document.getElementById('proposal').classList.remove('hidden');
    });

    // No Button Runaway
    const noBtn = document.getElementById('no-btn');
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Functions
    function switchSection(oldId, newId) {
        document.getElementById(oldId).classList.remove('active');
        document.getElementById(newId).classList.add('active');
    }

    function typeWriter(text, elementId, callback) {
        let i = 0;
        const el = document.getElementById(elementId);
        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            } else if (callback) callback();
        }
        type();
    }

    function startTree() {
        document.getElementById('trunk').style.height = '200px';
        setTimeout(() => {
            for(let i=0; i<30; i++) {
                setTimeout(createHeart, i * 200);
            }
            // Show memories after tree
            setTimeout(() => {
                document.getElementById('memory-section').classList.add('active');
            }, 6000);
        }, 1000);
    }

    function createHeart() {
        const leaf = document.createElement('div');
        leaf.className = 'heart';
        leaf.style.left = (Math.random() * 200 - 100 + window.innerWidth/2) + 'px';
        leaf.style.top = (Math.random() * 150 + 200) + 'px';
        document.getElementById('leaves-container').appendChild(leaf);
    }
});
