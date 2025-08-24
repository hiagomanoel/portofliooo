const toggle = document.getElementById('modeToggle');
const body = document.body;
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
} else {
  toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const darkModeEnabled = body.classList.contains("dark");
  localStorage.setItem("darkMode", darkModeEnabled);
  toggle.textContent = darkModeEnabled ? "☀️" : "🌙";
});

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('hidden');

  
});