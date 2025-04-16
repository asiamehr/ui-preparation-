// Typing Effect
const text = "HELLO";
let index = 0;
const typingSpeed = 100;
const typingElement = document.getElementById("typing-text");

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}
typeText();

// Heart Rain Effect
const canvas = document.getElementById("heart-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: 0,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    alpha: Math.random()
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 0, 100, 0.7)";
  hearts.forEach((heart, i) => {
    ctx.beginPath();
    ctx.moveTo(heart.x, heart.y);
    ctx.bezierCurveTo(heart.x + heart.size / 2, heart.y - heart.size / 2,
                      heart.x + heart.size, heart.y + heart.size / 3,
                      heart.x, heart.y + heart.size);
    ctx.bezierCurveTo(heart.x - heart.size, heart.y + heart.size / 3,
                      heart.x - heart.size / 2, heart.y - heart.size / 2,
                      heart.x, heart.y);
    ctx.fillStyle = `rgba(255, 0, 100, ${heart.alpha})`;
    ctx.fill();
    heart.y += heart.speed;
    if (heart.y > canvas.height) hearts.splice(i, 1);
  });
}

function animate() {
  drawHearts();
  requestAnimationFrame(animate);
}

setInterval(createHeart, 150);
animate();
function drawLines() {
    const polaroids = document.querySelectorAll('.polaroid');
    const svg = document.getElementById('lines');
    svg.innerHTML = "";
  
    polaroids.forEach((from, i) => {
      if (i < polaroids.length - 1) {
        const to = polaroids[i + 1];
        const fromRect = from.getBoundingClientRect();
        const toRect = to.getBoundingClientRect();
  
        const x1 = fromRect.left + fromRect.width / 2 + window.scrollX;
        const y1 = fromRect.top + fromRect.height / 2 + window.scrollY;
        const x2 = toRect.left + toRect.width / 2 + window.scrollX;
        const y2 = toRect.top + toRect.height / 2 + window.scrollY;
  
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "#c76e94");
        line.setAttribute("stroke-dasharray", "6,4");
        line.setAttribute("stroke-width", "2");
        svg.appendChild(line);
      }
    });
  }
  drawLines();
window.addEventListener('resize', drawLines);
window.addEventListener('scroll', drawLines);

  
document.getElementById('openLetterBtn').addEventListener('click', function() {
    // نمایش نامه
    const letter = document.getElementById('letter');
    letter.classList.remove('hidden');
    
    // پیام تولد رو بعد از 2 ثانیه نمایش بده
    setTimeout(function() {
        document.getElementById('birthdayMessage').classList.remove('hidden');
    }, 2000);
});
function createFlower() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: 0,
    size: Math.random() * 15 + 10,
    speed: Math.random() * 1.5 + 0.5,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.05,
    petals: Math.floor(Math.random() * 3) + 5 // 5-7 petals
  });
}

function drawFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((flower, i) => {
    ctx.save();
    ctx.translate(flower.x, flower.y);
    ctx.rotate(flower.rotation);
    
    // Draw flower center
    ctx.beginPath();
    ctx.arc(0, 0, flower.size * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = '#FFD700'; // Golden center
    ctx.fill();
    
    // Draw petals
    for (let i = 0; i < flower.petals; i++) {
      const angle = (i / flower.petals) * Math.PI * 2;
      ctx.beginPath();
      ctx.ellipse(
        Math.cos(angle) * flower.size * 0.8, 
        Math.sin(angle) * flower.size * 0.8,
        flower.size * 0.5, 
        flower.size * 0.2, 
        angle, 
        0, 
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(255, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 0.8)`;
      ctx.fill();
    }
    
    ctx.restore();
    
    flower.y += flower.speed;
    flower.rotation += flower.rotationSpeed;
    if (flower.y > canvas.height) hearts.splice(i, 1);
  });
}
function createBubble() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    color: `hsla(${Math.random() * 60 + 280}, 70%, 70%, 0.7)`
  });
}

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((bubble, i) => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
    ctx.fillStyle = bubble.color;
    ctx.fill();
    
    // Bubble shine effect
    ctx.beginPath();
    ctx.arc(bubble.x - bubble.size * 0.3, bubble.y - bubble.size * 0.3, bubble.size * 0.2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fill();
    
    bubble.y -= bubble.speed;
    if (bubble.y < -20) hearts.splice(i, 1);
  });
}