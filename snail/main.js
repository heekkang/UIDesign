document.addEventListener('DOMContentLoaded', function() {
    let isZoomed = false;

    document.addEventListener('wheel', function(event) {
      // 스크롤 이벤트 발생 시
      if (event.deltaY > 0 && !isZoomed) {
        // 스크롤 다운 및 현재 줌 인 상태가 아닌 경우
        document.body.classList.add('zoomed');
        isZoomed = true;
      } else if (event.deltaY < 0 && isZoomed) {
        // 스크롤 업 및 현재 줌 인 상태인 경우
        document.body.classList.remove('zoomed');
        isZoomed = false;
      }
    });
  });