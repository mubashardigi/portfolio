/* Gravity sparks effect */
document.querySelectorAll(".btn").forEach(btn => {
  let interval;
  btn.addEventListener("mouseenter", () => {
    interval = setInterval(() => spawnParticles(btn), 120);
  });
  btn.addEventListener("mouseleave", () => clearInterval(interval));
});

function spawnParticles(btn) {
  const rect = btn.getBoundingClientRect();
  for (let i = 0; i < 4; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    const xStart = Math.random() * rect.width;
    const yStart = Math.random() * rect.height;
    particle.style.left = xStart + "px";
    particle.style.top = yStart + "px";
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 80 + 30;
    particle.style.setProperty("--x", `${Math.cos(angle) * radius}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * radius}px`);
    btn.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
}

/* Neon -> About Card Toggle */
const imageBox = document.getElementById("imageBox");
const aboutCard = document.getElementById("aboutCard");
imageBox.addEventListener("mouseenter", () => {
  imageBox.style.animation = "none";
  imageBox.style.display = "none";
  aboutCard.style.display = "flex";
});
aboutCard.addEventListener("mouseleave", () => {
  aboutCard.style.display = "none";
  imageBox.style.display = "inline-block";
  imageBox.style.animation = "spin 2s linear infinite";
});