function duplicateCarouselItems(carouselId, minPerSlide) {
  const carouselItems = document.querySelectorAll(`${carouselId} .carousel-item`);
  if (typeof carouselItems !== "null") {
    carouselItems.forEach((el) => {
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = carouselItems[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }
}

duplicateCarouselItems("#recipeCarousel1", 4);
duplicateCarouselItems("#recipeCarousel2", 4);
