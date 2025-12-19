const messages = [
    "Your Smile", "Your Kindness", "How you care", "Your Voice", 
    "Your Intelligence", "Your Support", "Your Strength", 
    "The way you laugh", "Your beautiful soul", "Just Being YOU"
];

function startStory() {
    showSection('tree-section');
    typeWriter("To My Love,", "headline", () => {
        typeWriter("Like this tree grows from a small seed, my love for you has grown deeper and stronger every single day...", "quote-p", () => {
            document.querySelector('#tree-section button').style.display = 'block';
        });
        drawTree();
    });
}

function drawTree() {
    const container = document.getElementById('tree-box');
    container.innerHTML = `
        <svg viewBox="0 0 200 200" class="tree-svg">
            <path id="trunk" d="M100,200 Q100,150 100,100" stroke="#5d4037" stroke-width="8" fill="none" />
            <g id="branches"></g>
        </svg>`;
    
    // Simple tree growth animation
    setTimeout(() => {
        for(let i=0; i<30; i++) {
            setTimeout(createLeaf, i * 150);
        }
    }, 1000);
}

function createLeaf() {
    const container = document.getElementById('tree-box');
    const leaf = document.createElement('div');
    leaf.className = 'heart';
    // Position them in a tree shape
    leaf.style.position = 'absolute';
    leaf.style.left = (180 + Math.random() * 100 - 50) + 'px';
    leaf.style.top = (100 + Math.random() * 150) + 'px';
    leaf.style.background = '#ff4d6d';
    leaf.style.width = '15px';
    leaf.style.height = '15px';
    leaf.style.transform = 'rotate(-45deg)';
    container.appendChild(leaf);
}

// Generate 10 Cards
const grid = document.getElementById('cards-grid');
messages.forEach((msg, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-front">Reason #${index + 1}</div>
        <div class="card-back">${msg}</div>
    `;
    card.onclick = () => card.classList.toggle('open');
    grid.appendChild(card);
});

function moveNo() {
    const btn = document.getElementById('no-btn');
    btn.style.left = Math.random() * 80 + '%';
    btn.style.top = Math.random() * 80 + '%';
}

function celebrate() {
    alert("Yay! ❤️ I'm the luckiest person!");
    for(let i=0; i<100; i++) { createConfetti(); }
}

function createConfetti() {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(c);
    // Add animation via JS or CSS
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function typeWriter(text, id, cb) {
    let i = 0;
    const el = document.getElementById(id);
    const timer = setInterval(() => {
        el.innerHTML += text[i];
        i++;
        if(i >= text.length) { clearInterval(timer); cb(); }
    }, 50);
}

function goToCards() { showSection('cards-section'); }
function goToFinal() { showSection('final-section'); }
document.getElementById('envelope').onclick = function() {
    this.style.display = 'none';
    document.getElementById('proposal-content').style.display = 'block';
};
