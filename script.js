const menButton = document.getElementById("men");
const womenButton = document.getElementById("women");
const kidsButton = document.getElementById("kids");
const menSection = document.getElementById("men-section");
const womenSection = document.getElementById("women-section");
const kidsSection = document.getElementById("kids-section");

menButton.addEventListener("click", () => {
  menSection.style.display = "block";
  womenSection.style.display = "none";
  kidsSection.style.display = "none";
});

womenButton.addEventListener("click", () => {
  menSection.style.display = "none";
  womenSection.style.display = "block";
  kidsSection.style.display = "none";
});

womenButton.addEventListener("click", () => {
    menSection.style.display = "none";
    womenSection.style.display = "none";
    kidsSection.style.display = "block";
  });

document.getElementById("men").addEventListener("click", () => {
  document.getElementById("men-section").style.display = "flex";
  document.getElementById("women-section").style.display = "none";
  document.getElementById("kids-section").style.display = "none";
});

document.getElementById("women").addEventListener("click", () => {
  document.getElementById("men-section").style.display = "none";
  document.getElementById("women-section").style.display = "flex";
  document.getElementById("kids-section").style.display = "none";
});

document.getElementById("kids").addEventListener("click", () => {
  document.getElementById("men-section").style.display = "none";
  document.getElementById("women-section").style.display = "none";
  document.getElementById("kids-section").style.display = "flex";
});
