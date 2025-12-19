const reasons = [
    "Your Smile", "Your Kindness", "How you care", "Your Voice", 
    "Your Intelligence", "Your Support", "Your Strength", 
    "The way you laugh", "Your beautiful soul", "Everything!"
];

function next(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    if(id === 'tree-sec') {
        startTreeSection();
    }
}

function startTreeSection() {
    typeWriter("To My Love,", "headline", () => {
        typeWriter("Just like this tree, my love for you has grown strong and beautiful over time...", "sub-quote", () => {
            document.getElementById('card-btn').style.display = 'block';
        });
        growHearts();
    });
}

function growHearts() {
    const container = document.getElementById('tree-container');
    for(let i=0; i<25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-leaf';
            // Randomly placing hearts on branches
            heart.style.left = (Math.random() * 300 + 70) + 'px';
            heart.style.top = (Math.random() * 200 + 50) + 'px';
            container.appendChild(heart);
        }, i * 200);
    }
}

// Generate Cards
const grid = document.getElementById('cards-grid');
reasons.forEach((text, i) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">Reason #${i+1}</div>
            <div class="card-back">${text}</div>
        </div>
    `;
    card.onclick = () => card.classList.toggle('open');
    grid.appendChild(card);
});

function typeWriter(text, id, cb) {
    let i = 0;
    const el = document.getElementById(id);
    el.innerHTML = "";
    const timer = setInterval(() => {
        el.innerHTML += text[i];
        i++;
        if(i >= text.length) { clearInterval(timer); cb(); }
    }, 50);
}

document.getElementById('envelope').onclick = function() {
    this.style.display = 'none';
    document.getElementById('proposal').style.display = 'block';
};
