document.addEventListener("DOMContentLoaded", () => {
  console.log("Página de IEI Pitágoras cargada");
  const carouselEl = document.getElementById('carouselNosotros');
  if (carouselEl) {
    new bootstrap.Carousel(carouselEl, {
      interval: 1500, /* cambio cada # segundos */
      ride: 'carousel'
    });
  }
});
