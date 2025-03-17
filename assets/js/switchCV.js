document.addEventListener("DOMContentLoaded", function () {
  const cvDownloadBtn = document.getElementById("cv-download");
  let currentLanguage = "es";

  function updateCvLink() {
    const cvPath =
      currentLanguage === "es"
        ? "assets/files/CV_Cristian_David_ES.pdf"
        : "assets/files/CV_Cristian_David_EN.pdf";
    cvDownloadBtn.setAttribute("href", cvPath);
  }

  document
    .getElementById("toggle-language-es")
    .addEventListener("click", function (e) {
      e.preventDefault();
      currentLanguage = "es";
      updateCvLink();
    });

  document
    .getElementById("toggle-language-en")
    .addEventListener("click", function (e) {
      e.preventDefault();
      currentLanguage = "en";
      updateCvLink();
    });

  updateCvLink();
});
