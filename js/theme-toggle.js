document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const button = document.createElement("button");
  button.className = "theme-toggle";
  button.textContent = "🌙 Тёмная тема";

  // Добавляем кнопку на страницу
  document.body.appendChild(button);

  // Проверяем сохранённую тему
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    button.textContent = "☀️ Светлая тема";
  }

  // Обработчик клика
  button.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const isDark = body.classList.contains("dark-theme");
    button.textContent = isDark ? "☀️ Светлая тема" : "🌙 Тёмная тема";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});