

document.addEventListener('DOMContentLoaded', function() {
    const buttonDiv = document.querySelector('.button');

    function redirectToNewPage() {
      // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
      const newPageURL = 'portfolio.html';

      // 현재 창에서 새 HTML 파일 열기
      window.location.href = newPageURL;
    }

    // div에 클릭 이벤트 추가
    buttonDiv.addEventListener('click', redirectToNewPage);
  });

  const talkDiv = document.getElementById('talkDiv');
  const wrapper = document.querySelector('.wrapper');
  
  let isDragging = false;
  let offsetX, offsetY;
  
  talkDiv.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - talkDiv.getBoundingClientRect().left;
    offsetY = e.clientY - talkDiv.getBoundingClientRect().top;
    talkDiv.style.cursor = 'grabbing';
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
    talkDiv.style.cursor = 'grab';
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      talkDiv.style.left = (e.clientX - offsetX) + 'px';
      talkDiv.style.top = (e.clientY - offsetY) + 'px';
    }
  });
  