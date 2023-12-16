document.addEventListener('DOMContentLoaded', function() {
    const buttonDiv = document.querySelector('.button');

    function redirectToNewPage() {
      // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
      const newPageURL = 'library.html';

      // 현재 창에서 새 HTML 파일 열기
      window.location.href = newPageURL;
    }

    // div에 클릭 이벤트 추가
    buttonDiv.addEventListener('click', redirectToNewPage);
  });



  // DOM 요소를 가져옵니다.
const talkDiv = document.getElementById('talkDiv');
const container = document.getElementById('container');

let isDragging = false;
let offsetX, offsetY;

// 마우스 클릭 이벤트를 추가합니다.
talkDiv.addEventListener('mousedown', (e) => {
  isDragging = true;

  // 클릭한 위치의 좌표 값을 가져옵니다.
  offsetX = e.clientX - talkDiv.getBoundingClientRect().left;
  offsetY = e.clientY - talkDiv.getBoundingClientRect().top;
});

// 마우스를 놓았을 때 이벤트를 추가합니다.
document.addEventListener('mouseup', () => {
  isDragging = false;
});

// 마우스를 따라 움직이는 함수
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    // div를 마우스 위치로 이동시킵니다.
    talkDiv.style.left = (e.clientX - offsetX) + 'px';
    talkDiv.style.top = (e.clientY - offsetY) + 'px';
  }
});
