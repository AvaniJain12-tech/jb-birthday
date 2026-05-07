// ==========================================
// DIGITAL MEMORY JAR — janvi.js
// ==========================================

// ELEMENTS
const memoryDisplay = document.getElementById("memoryDisplay");
const memoryMessage = document.getElementById("memoryMessage");
const memoryImage = document.getElementById("memoryImage");
const memoryDate = document.getElementById("memoryDate");
const cardBgOverlay = document.getElementById("cardBgOverlay");

const bgMusic = document.getElementById("bgMusic");
const musicIcon = document.getElementById("musicIcon");
const musicWave = document.getElementById("musicWave");

const vaultModal = document.getElementById("vaultModal");
const vaultDisplay = document.getElementById("vaultDisplay");
const vaultMessage = document.getElementById("vaultMessage");

const errorPopup = document.getElementById("errorPopup");
const errorText = document.getElementById("errorText");

const cursorGlow = document.getElementById("cursorGlow");

// ==========================================
// LOADING SCREEN
// ==========================================

window.addEventListener("load", () => {

  setTimeout(() => {
    document
      .getElementById("loadingScreen")
      .classList.add("hidden");
  }, 2200);

});

// ==========================================
// CUSTOM CURSOR
// ==========================================

document.addEventListener("mousemove", (e) => {

  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";

});

// ==========================================
// MEMORIES DATABASE
// ==========================================

const memories = {

  stressed: {
    text: "You survived every difficult chapter so far. That's not luck. That's strength.",
    image: "janvi2.jpeg",
    date: "for your difficult days 🌿"
  },

  sad: {
    text: "If the world feels heavy today, remember there are still tiny beautiful things waiting for you.",
    image: "janvi3.jpeg",
    date: "for your midnight thoughts 🌙"
  },

  serotonin: {
    text: "Emergency serotonin activated. Drink water. Eat snacks. You are iconic.",
    image: "janvi2.jpeg",
    date: "instant happiness protocol ✨"
  },

  future: {
    text: "Plot twist: the future version of you becomes everything you dreamed of.",
    image: "janvi1.jpeg",
    date: "a note from the future 💌"
  },

  capsule: {
    text: "Open this again after graduation. You'll realize how much you've grown.",
    image: "janvi1.jpeg",
    date: "time capsule ⏳"
  }

};

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

function typeWriter(text, element, speed = 35) {

  element.innerHTML = "";
  let i = 0;

  function typing() {

    if (i < text.length) {

      element.innerHTML += text.charAt(i);

      i++;

      setTimeout(typing, speed);

    }

  }

  typing();

}

// ==========================================
// OPEN MEMORY
// ==========================================

function openMemory(type) {

  memoryDisplay.style.display = "block";

  let memory;

  if (type === "random" || type === "surprise") {

    const keys = Object.keys(memories);

    const randomKey =
      keys[Math.floor(Math.random() * keys.length)];

    memory = memories[randomKey];

  } else {

    memory = memories[type];

  }

  if (!memory) return;

  memoryImage.src = memory.image;

  cardBgOverlay.style.backgroundImage =
    `url(${memory.image})`;

  memoryDate.innerHTML = memory.date;

  typeWriter(memory.text, memoryMessage);

  launchConfetti();

  memoryDisplay.scrollIntoView({
    behavior: "smooth"
  });

}

// ==========================================
// CLOSE MEMORY
// ==========================================

function closeMemory() {

  memoryDisplay.style.display = "none";

}

// ==========================================
// MUSIC TOGGLE
// ==========================================

function toggleMusic() {

  if (bgMusic.paused) {

    bgMusic.play();

    musicIcon.innerHTML = "❚❚";

    musicWave.classList.add("active");

  } else {

    bgMusic.pause();

    musicIcon.innerHTML = "▶";

    musicWave.classList.remove("active");

  }

}

// ==========================================
// VAULT FUNCTIONS
// ==========================================

function openVaultPrompt() {

  vaultModal.style.display = "flex";

}

function closeVault() {

  vaultModal.style.display = "none";

}

function closeVaultDisplay() {

  vaultDisplay.style.display = "none";

}

function checkVaultPassword() {

  const password =
    document.getElementById("vaultInput").value;

  if (password === "08/05/2007") {

    vaultModal.style.display = "none";

    vaultDisplay.style.display = "flex";

    vaultMessage.innerHTML =
      "Secret unlocked: you changed my life in ways you'll probably never fully understand. 🌸";

    launchMegaConfetti();

  } else {

    showError(
      "that's not quite right, darling 🌙"
    );

  }

}

// ==========================================
// ERROR POPUP
// ==========================================

function showError(text) {

  errorText.innerHTML = text;

  errorPopup.style.display = "flex";

  setTimeout(() => {

    errorPopup.style.display = "none";

  }, 3000);

}

// ==========================================
// EASTER EGG
// ==========================================

function triggerEasterEgg() {

  launchMegaConfetti();

  alert(
    "🌸 secret unlocked: you're loved more than you know."
  );

}

// ==========================================
// SIMPLE CONFETTI
// ==========================================

function launchConfetti() {

  const canvas =
    document.getElementById("confettiCanvas");

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 120; i++) {

    ctx.fillStyle =
      `hsl(${Math.random() * 360},100%,70%)`;

    ctx.beginPath();

    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 4,
      0,
      Math.PI * 2
    );

    ctx.fill();

  }

  setTimeout(() => {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

  }, 1200);

}

// ==========================================
// MEGA CONFETTI
// ==========================================

function launchMegaConfetti() {

  launchConfetti();

  setTimeout(launchConfetti, 300);

  setTimeout(launchConfetti, 600);

}

// ==========================================
// STARS BACKGROUND
// ==========================================

const canvas =
  document.getElementById("starsCanvas");

const ctx =
  canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for (let i = 0; i < 160; i++) {

  stars.push({

    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.3

  });

}

function animateStars() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "white";

  stars.forEach((star) => {

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.radius,
      0,
      Math.PI * 2
    );

    ctx.fill();

    star.y += star.speed;

    if (star.y > canvas.height) {

      star.y = 0;

    }

  });

  requestAnimationFrame(animateStars);

}

animateStars();

// ==========================================
// RESIZE FIX
// ==========================================

window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});