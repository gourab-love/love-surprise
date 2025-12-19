const reasons = ["Your Smile", "Your Eyes", "How you care", "Your Voice", "Your Kindness", "The way you laugh", "Your Support", "Everything", "Your Soul", "Just You ❤️"];

function next(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id === 'tree-sec') startTree();
    if(id === 'scratch-sec') initScratch();
}

function startTree() {
    // Clear previous if any
    document.getElementById("headline").innerHTML = "";
    document.getElementById("sub-quote").innerHTML = "";
    
    typeWriter("To My Love,", "headline", () => {
        typeWriter("In a world full of temporary things, you are my forever. Just like this tree, our bond grows deeper every day, weather-proof and beautiful. You are the soul that makes my life worth living...", "sub-quote", () => {
            document.getElementById('to-cards').classList.remove('hidden');
        });
        growHearts();
    });
}

function growHearts() {
    const container = document.getElementById('tree-container');
    for(let i=0; i<30; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'heart-leaf';
            // Randomly placing hearts within tree bounds
            h.style.left = (Math.random() * 60 + 20) + '%'; 
            h.style.top = (Math.random() * 50 + 10) + '%';
            container.appendChild(h);
        }, i * 100);
    }
}

// Cards
const grid = document.getElementById('cards-grid');
reasons.forEach((text, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div class="card-inner"><div class="card-front">#${i+1}</div><div class="card-back">${text}</div></div>`;
    card.onclick = () => card.classList.toggle('open');
    grid.appendChild(card);
});

// Slider
document.getElementById('love-slider').oninput = function() {
    let v = this.value;
    document.getElementById('meter-fill').style.width = v + "%";
    if(v == 100) {
        document.getElementById('meter-status').innerText = "Infinity ❤️";
        document.getElementById('meter-next').classList.remove('hidden');
    }
};

// Map Connection Fixed
function connectMap() {
    const line = document.getElementById('map-line-path');
    line.setAttribute("x2", "80%"); // Connects dot to dot
    setTimeout(() => document.getElementById('map-next').classList.remove('hidden'), 2000);
}

// Scratch Fix
function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(0, 0, 400, 200);
    ctx.globalCompositeOperation = 'destination-out';
    
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fill();
    };
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('touchmove', scratch);
}

function releaseHearts() {
    for(let i=0; i<20; i++) {
        const h = document.createElement('div');
        h.innerHTML = "❤️";
        h.className = "floating-heart";
        h.style.cssText = `position:fixed; left:${Math.random()*100}vw; bottom:0; font-size:2rem; transition:3s linear; z-index:999;`;
        document.body.appendChild(h);
        setTimeout(() => { h.style.transform = `translateY(-110vh) rotate(${Math.random()*360}deg)`; h.style.opacity="0"; }, 100);
        setTimeout(() => h.remove(), 3000);
    }
}

function openFinal() {
    document.getElementById('envelope').classList.add('hidden');
    document.getElementById('proposal').classList.remove('hidden');
}

function moveNo() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    btn.style.left = `calc(50% + ${x}px)`;
    btn.style.top = `calc(50% + ${y}px)`;
}

function celebrate() { alert("I Love You So Much! ❤️ You've made me the happiest!"); }

function typeWriter(t, id, cb) {
    let i = 0; const el = document.getElementById(id);
    const timer = setInterval(() => {
        el.innerHTML += t[i]; i++;
        if(i >= t.length) { clearInterval(timer); if(cb) cb(); }
    }, 40);
}
