document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (!menuButton || !navigation) {
    console.error("Botão ou navegação não encontrados.");
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  })
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const lightThemeToggle = document.querySelector("#light-theme-toggle");
const darkThemeToggle = document.querySelector("#dark-theme-toggle");

function setTheme(theme) {
  document.body.classList.remove("sixties-theme", "light-theme", "dark-theme");
  document.body.classList.add(theme);
  const isSixties = theme === "sixties-theme";
  const isLight = theme === "light-theme";
  const isDark = theme === "dark-theme";
  if (theme === "sixties-theme") {
    lightThemeToggle.textContent = "🌞";
    darkThemeToggle.textContent = "🌙";
  }
  else if (theme === "light-theme") {
    lightThemeToggle.textContent = "💿";
    darkThemeToggle.textContent = "🌙";
  }
  else if (theme === "dark-theme") {
    lightThemeToggle.textContent = "🌞";
    darkThemeToggle.textContent = "💿";
  }
}

if (lightThemeToggle) {
  lightThemeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-theme");
    setTheme(isLight ? "sixties-theme" : "light-theme");
  });
}

if (darkThemeToggle) {
  darkThemeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-theme");
    setTheme(isDark ? "sixties-theme" : "dark-theme");
  });
}
