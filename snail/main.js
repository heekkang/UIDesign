document.addEventListener('DOMContentLoaded', function() {
  let isZoomed = false;

  window.addEventListener('wheel', function(event) {
    event.preventDefault(); // 기본 스크롤 이벤트 방지

    const filter1 = document.querySelector('.filter1');

    if (event.deltaY > 0 && !isZoomed) {
      filter1.classList.add('zoomed');
      isZoomed = true;
    } else if (event.deltaY < 0 && isZoomed) {
      filter1.classList.remove('zoomed');
      isZoomed = false;
    }
  });
});