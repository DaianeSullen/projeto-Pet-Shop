/* -------- CARROSSEL AUTOMÁTICO -------- */
let i = 0;
const slides = document.querySelector('slide');
imgs = document.querySelectorAll('.slides img');
const total = imgs.length;
function mostrarSlide() {
    slides.style.transform = 'translateX(${-i * 100}%)';
}
document.querySelector('.direita').addEventListener('click',() => {
  i = (i + 1)% total;
mostrarSlide();
});
document.querySelector('.esquerda').addEventListener('click',() => {
  i = (i - 1)% total;
mostrarSlide();
});
/* -------- FILTRO -------- */
function filterItems(category) {
let cards = document.querySelectorAll("#productGrid .card");

cards.forEach(item => {
if (category === "all") {
item.style.display = "block";
} else {
item.style.display = item.dataset.category.includes(category)
? "block"
: "none";
}
});
}