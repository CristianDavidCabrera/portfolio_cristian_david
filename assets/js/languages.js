function changeLanguage(lang) {
  document.querySelectorAll("[id]").forEach((element) => {
    let key = element.id;
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

document
  .getElementById("toggle-language")
  .addEventListener("click", function () {
    let currentLang = document.documentElement.lang === "es" ? "en" : "es";
    document.documentElement.lang = currentLang;
    changeLanguage(currentLang);
  });


  document
  .getElementById("toggle-language-tablet")
  .addEventListener("click", function () {
    let currentLangTablet = document.documentElement.lang === "es" ? "en" : "es";
    document.documentElement.lang = currentLangTablet;
    changeLanguage(currentLangTablet);
  });