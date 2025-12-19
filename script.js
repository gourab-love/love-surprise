const reasons = ["Your Smile", "Your Eyes", "How you care", "Your Voice", "Your Kindness", "Your Laugh", "Your Support", "Everything", "Your Soul", "Just You ❤️"];

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
        typeWriter("In a world full of temporary things, you are my forever. Just like this tree, our bond grows deeper every day...", "sub-quote", () => {
            document.getElementById('to-cards').classList.remove('hidden');
        });
        growHearts();
    });
}

function connectMap() {
    const line = document.getElementById('map-line');
    line.setAttribute("x2", "80%"); // Line connects to second dot
    line.style.transition = "stroke-dashoffset 2s ease-in-out"; 
    setTimeout(() => document.getElementById('map-next').classList.remove('hidden'), 2000);
}

function moveNo() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    // Keeping it away from the YES button
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

// Remaining helper functions (growHearts, typeWriter, cards, etc. same as before)
// ... (Add the growHearts and other helpers from previous scripts)
