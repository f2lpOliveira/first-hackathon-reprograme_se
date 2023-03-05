function increaseFontSize() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
  const currentFontSizeMain = parseFloat(
    window.getComputedStyle(main).fontSize
  );
  const newFontSize = currentFontSize + 1;
  const newFontSizeMain = currentFontSizeMain + 1;
  body.style.fontSize = `${newFontSize}px`;
  main.style.fontSize = `${newFontSizeMain}px`;
  localStorage.setItem("fontSize", newFontSize);
  localStorage.setItem("fontSize", newFontSizeMain);
}

// Diminui a fonte em 1 pixel
function decreaseFontSize() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
  const currentFontSizeMain = parseFloat(
    window.getComputedStyle(main).fontSize
  );
  const newFontSize = currentFontSize - 1;
  const newFontSizeMain = currentFontSizeMain - 1;
  body.style.fontSize = `${newFontSize}px`;
  main.style.fontSize = `${newFontSizeMain}px`;
  localStorage.setItem("fontSize", newFontSize);
  localStorage.setItem("fontSize", newFontSizeMain);
}

// Alterna o tema entre claro e escuro
function toggleTheme() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  body.classList.toggle("dark");
  main.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
}

// Verifica se as preferências estão armazenadas no localStorage e aplica-as
const fontSize = localStorage.getItem("fontSize");
if (fontSize) {
  document.querySelector("body").style.fontSize = `${fontSize}px`;
}

const theme = localStorage.getItem("theme");
if (theme) {
  document.querySelector("body").classList.add(theme);
}
