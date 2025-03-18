document.addEventListener("DOMContentLoaded", function () {
  const cvDownloadBtn = document.getElementById("cv-download");
  let currentLanguage = "es";
  const languageToggles = [
    "toggle-language-es", "toggle-language-en",
    "toggle-language-tablet-es", "toggle-language-tablet-en"
  ];

  function updateCvLink() {
    const cvPath = `assets/files/CV_Cristian_David_${currentLanguage.toUpperCase()}.pdf`;
    cvDownloadBtn.setAttribute("href", cvPath);
  }

  function setLanguage(lang) {
    return function (event) {
      event.preventDefault();
      currentLanguage = lang;
      updateCvLink();
    };
  }

  languageToggles.forEach(id => {
    const lang = id.includes("-en") ? "en" : "es";
    document.getElementById(id)?.addEventListener("click", setLanguage(lang));
  });

  updateCvLink();
});
