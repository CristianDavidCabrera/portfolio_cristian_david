function changeLanguage(lang) {
  document.querySelectorAll("[id]").forEach((element) => {
    let key = element.id;
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

const languageButtons = [
  "toggle-language-es",
  "toggle-language-en",
  "toggle-language-tablet-es",
  "toggle-language-tablet-en",
];

languageButtons.forEach((id) => {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      changeLanguage(id.includes("-es") ? "es" : "en");
    });
  }
});
