function changeLanguage(lang) {
  document.querySelectorAll("[id]").forEach((element) => {
    let key = element.id;
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

//Para DESKTOP

document
  .getElementById("toggle-language-es")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeLanguage("es");
  });

document
  .getElementById("toggle-language-en")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeLanguage("en");
  });

//Para el sidebar del movil y la tablet

document
  .getElementById("toggle-language-tablet-es")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeLanguage("es");
  });

document
  .getElementById("toggle-language-tablet-en")
  .addEventListener("click", function (event) {
    event.preventDefault();
    changeLanguage("en");
  });
