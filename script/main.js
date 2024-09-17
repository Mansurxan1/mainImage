const images = document.querySelectorAll(".box img");
const mainImage = document.querySelector(".main__image");

images.forEach((img) => {
  img.addEventListener("click", function () {
    mainImage.src = this.src; // Rasmlar URL manzilini pastdagi img tegi ichiga o'rnatadi
  });
});
