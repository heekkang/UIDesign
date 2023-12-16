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


