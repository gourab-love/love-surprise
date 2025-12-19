const reasons = ["Your Smile", "Your Eyes", "How you care", "Your Voice", "Your Kindness", "The way you laugh", "Your Support", "Everything", "Your Soul", "Just You ❤️"];

function next(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id === 'tree-sec') startTree();
    if(id === 'scratch-sec') initScratch();
}

function startTree() {
    typeWriter("To My Love,", "headline", () => {
        // Updated longer, more special text
        typeWriter("In a world full of temporary things, you are my forever. Just like this tree, our bond grows deeper every day, weather-proof and beautiful. You aren't just a part of my life; you are the soul that makes it worth living...", "sub-quote", () => {
            document.getElementById('to-cards').classList.remove('hidden');
        });
        growHearts();
    });
}

function growHearts() {
    const container = document.getElementById('tree-container');
    for(let i=0; i<25; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'heart-leaf';
            h.style.left = (Math.random() * 300 + 50) + 'px';
            h.style.top = (Math.random() * 250 + 50) + 'px';
            container.appendChild(h);
        }, i * 150);
    }
}

// Cards Logic
const grid = document.getElementById('cards-grid');
reasons.forEach((text, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div class="card-inner"><div class="card-front">#${i+1}</div><div class="card-back">${text}</div></div>`;
    card.onclick = () => card.classList.toggle('open');
    grid.appendChild(card);
});

// Love Meter
document.getElementById('love-slider').oninput = function() {
    let v = this.value;
    document.getElementById('meter-fill').style.width = v + "%";
    if(v == 100) {
        document.getElementById('meter-status').innerText = "Infinity and Beyond! ❤️";
        document.getElementById('meter-next').classList.remove('hidden');
    }
};

// Map Connection Fix
function connectMap() {
    const line = document.getElementById('map-line-new');
    line.setAttribute("x2", "85%"); // Connects exactly to the second dot
    line.style.strokeDashoffset = "0";
    setTimeout(() => document.getElementById('map-next').classList.remove('hidden'), 2000);
}

// Scratch Card
function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#d1d1d1';
    ctx.fillRect(0, 0, 300, 150);
    ctx.globalCompositeOperation = 'destination-out';
    canvas.onmousemove = (e) => {
        const r = canvas.getBoundingClientRect();
        ctx.beginPath();
        ctx.arc(e.clientX - r.left, e.clientY - r.top, 20, 0, Math.PI*2);
        ctx.fill();
    };
}

function releaseHearts() {
    for(let i=0; i<15; i++) {
        const h = document.createElement('div');
        h.innerHTML = "❤️";
        h.style.position = "fixed";
        h.style.left = Math.random() * 100 + "vw";
        h.style.bottom = "-50px";
        h.style.fontSize = (Math.random() * 2 + 1) + "rem";
        h.style.transition = "transform 3s linear, opacity 3s";
        document.body.appendChild(h);
        setTimeout(() => { h.style.transform = "translateY(-110vh)"; h.style.opacity = "0"; }, 100);
        setTimeout(() => h.remove(), 3000);
    }
}

function typeWriter(t, id, cb) {
    let i = 0; const el = document.getElementById(id);
    const timer = setInterval(() => {
        el.innerHTML += t[i]; i++;
        if(i >= t.length) { clearInterval(timer); if(cb) cb(); }
    }, 40);
}

function openFinal() {
    document.getElementById('envelope').classList.add('hidden');
    document.getElementById('proposal').classList.remove('hidden');
}

function moveNo() {
    const btn = document.getElementById('no-btn');
    // Limited range so it stays somewhat nearby but unreachable
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

function celebrate() {
    alert("I Knew it! You've made me the happiest person! ❤️");
}
