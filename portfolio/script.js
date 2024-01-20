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


  
  document.addEventListener('DOMContentLoaded', function() {
    const buttonDiv1 = document.querySelector('.button1');

    function redirectToNewPage() {
      // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
      const newPageURL = 'etc.html';

      // 현재 창에서 새 HTML 파일 열기
      window.location.href = newPageURL;
    }

    // div에 클릭 이벤트 추가
    buttonDiv1.addEventListener('click', redirectToNewPage);
  });





  document.addEventListener('DOMContentLoaded', function () {
    // 이미지 클릭 시 모달 열기
    var modalTriggers = document.querySelectorAll('.modal-trigger');
    var modal = document.querySelector('.modal');
    var modalImage = modal.querySelector('.modal-content');
    var modalClose = modal.querySelector('.close');

    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImage.src = trigger.src;
      });
    });

    // 모달 닫기
    modalClose.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });