const reasons = ["Your Smile", "Your Eyes", "How you care", "Your Voice", "Your Kindness", "The way you laugh", "Your Support", "Everything", "Your Soul", "Just You ❤️"];

function next(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id === 'tree-sec') startTree();
    if(id === 'scratch-sec') initScratch();
}

function startTree() {
    typeWriter("To My Love,", "headline", () => {
        typeWriter("My love for you grows like this tree...", "sub-quote", () => {
            document.getElementById('to-cards').classList.remove('hidden');
        });
        growHearts();
    });
}

function growHearts() {
    const container = document.getElementById('tree-container');
    for(let i=0; i<20; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'heart-leaf';
            h.style.left = (Math.random() * 250 + 50) + 'px';
            h.style.top = (Math.random() * 200 + 50) + 'px';
            container.appendChild(h);
        }, i * 200);
    }
}

// Generate Cards
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
        document.getElementById('meter-status').innerText = "Infinity ❤️";
        document.getElementById('meter-next').classList.remove('hidden');
    }
};

// Jar Hearts
function releaseHearts() {
    for(let i=0; i<10; i++) {
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

function connectMap() {
    document.getElementById('map-line').style.width = "80%";
    setTimeout(() => document.getElementById('map-next').classList.remove('hidden'), 2000);
}

function initScratch() {
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(0, 0, 300, 150);
    ctx.globalCompositeOperation = 'destination-out';
    canvas.onmousemove = (e) => {
        const r = canvas.getBoundingClientRect();
        ctx.beginPath();
        ctx.arc(e.clientX - r.left, e.clientY - r.top, 20, 0, Math.PI*2);
        ctx.fill();
    };
}

function typeWriter(t, id, cb) {
    let i = 0; const el = document.getElementById(id);
    const timer = setInterval(() => {
        el.innerHTML += t[i]; i++;
        if(i >= t.length) { clearInterval(timer); if(cb) cb(); }
    }, 50);
}

function openFinal() {
    document.getElementById('envelope').classList.add('hidden');
    document.getElementById('proposal').classList.remove('hidden');
}

function moveNo() {
    const btn = document.getElementById('no-btn');
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
}

function celebrate() { alert("I Love You Forever! ❤️"); }
