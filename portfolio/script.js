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



  const images = ['img/서대문1_독립.png', 'img/이미지.png']; // 이미지 경로 배열
  let currentImage = 0; // 현재 이미지 인덱스

  function changeImage() {
    const image = document.getElementById('orange');
    currentImage = (currentImage + 1) % images.length; // 다음 이미지 인덱스 계산
    image.src = images[currentImage]; // 다음 이미지로 변경
  }

  const images2 = ['img/대지 1 사본.png', 'img/대지 1.png']; // 이미지 경로 배열
  let currentImage2 = 0; // 현재 이미지 인덱스

  function changeImage2() {
    const image2 = document.getElementById('blue');
    currentImage2 = (currentImage2 + 1) % images2.length; // 다음 이미지 인덱스 계산
   
  }