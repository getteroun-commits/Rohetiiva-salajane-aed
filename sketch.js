// Rohetiiva salajase aia interaktsioonid
const wishButton = document.getElementById("wishButton");
const wishNote = document.getElementById("wishNote");
const confettiButton = document.getElementById("confettiButton");

wishButton.addEventListener("click", () => {
  const isVisible = wishNote.classList.toggle("show");
  wishButton.textContent = isVisible ? "🌙 Peida salajane soov" : "🌟 Ava salajane soov";
  if (isVisible) sprinkle(32);
});

confettiButton.addEventListener("click", () => sprinkle(90));

function sprinkle(amount) {
  const colors = ["#f6d879", "#f4a9b8", "#b8e5b1", "#b5d9ff", "#d5b7ff", "#fff6d9"];
  for (let i = 0; i < amount; i++) {
    const bit = document.createElement("span");
    bit.className = "confetti";
    bit.style.left = Math.random() * 100 + "vw";
    bit.style.background = colors[Math.floor(Math.random() * colors.length)];
    bit.style.animationDuration = (2.3 + Math.random() * 3.5) + "s";
    bit.style.animationDelay = (Math.random() * .7) + "s";
    bit.style.setProperty("--drift", (Math.random() * 220 - 110) + "px");
    bit.style.width = (5 + Math.random() * 7) + "px";
    bit.style.height = (5 + Math.random() * 7) + "px";
    document.body.appendChild(bit);
    bit.addEventListener("animationend", () => bit.remove());
  }
}

// Kontrollime piltide laadimist ja anname vajadusel täpse vea.
document.querySelectorAll(".butterflies img").forEach((img) => {
  img.addEventListener("error", () => {
    console.error("Pildi laadimine ebaõnnestus:", img.getAttribute("src"));
    img.style.objectFit = "contain";
    img.alt = "Pilt ei laaditud: " + img.getAttribute("src");
  });
});
