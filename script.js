const reasons = ["Your Smile", "Your Eyes", "How you care", "Your Voice", "Your Kindness", "The way you laugh", "Your Support", "Everything", "Your Soul", "Just You ❤️"];

function next(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id === 'tree-sec') startTree();
    if(id === 'scratch-sec') initScratch();
}

function startTree() {
    document.getElementById("headline").innerText = "";
    document.getElementById("sub-quote").innerText = "";
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
            h.className = 'h-leaf';
            h.style.left = (Math.random() * 60 + 20) + '%';
            h.style.top = (Math.random() * 50 + 10) + '%';
            container.appendChild(h);
        }, i * 150);
    }
}

// Cards Grid
const grid = document.getElementById('cards-grid');
reasons.forEach((text, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div class="card-inner"><div class="card-f">#${i+1}</div><div class="card-b">${text}</div></div>`;
    card.onclick = () => card.classList.toggle('open');
    grid.appendChild(card);
});

// Love Meter Slider
document.getElementById('love-slider').oninput = function() {
    let v = this.value;
    document.getElementById('meter-fill').style.width = v + "%";
    if(v == 100) {
        document.getElementById('meter-next').classList.remove('hidden');
    }
};

function connectMap() {
    document.getElementById('map-line').setAttribute("x2", "85%");
    setTimeout(() => document.getElementById('map-next').classList.remove('hidden'), 2000);
}

function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(0, 0, 350, 180);
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
        h.style.bottom = "0";
        h.style.fontSize = "2rem";
        h.style.transition = "3s";
        document.body.appendChild(h);
        setTimeout(() => { h.style.transform = "translateY(-100vh)"; h.style.opacity = "0"; }, 100);
        setTimeout(() => h.remove(), 3000);
    }
}

function moveNo() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 200 - 100;
    btn.style.transform = `translate(${x}px, ${y}px)`;
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

function celebrate() { alert("I Love You Forever! ❤️"); }
