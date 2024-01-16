document.addEventListener('DOMContentLoaded', function() {
    const buttonDiv = document.querySelector('.close-btn');

    function redirectToNewPage() {
      // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
      const newPageURL = 'main.html';

      // 현재 창에서 새 HTML 파일 열기
      window.location.href = newPageURL;
    }

    // div에 클릭 이벤트 추가
    buttonDiv.addEventListener('click', redirectToNewPage);
  });


  document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage = document.getElementById('image');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'heekyung.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage.addEventListener('click', openNewPage);
});

document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage1 = document.getElementById('que');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'question.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage1.addEventListener('click', openNewPage);
});

document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage2 = document.getElementById('kimsun');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'kimsun.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage2.addEventListener('click', openNewPage);
});

document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage3 = document.getElementById('seoyoung');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'seoyoung.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage3.addEventListener('click', openNewPage);
});

document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage4 = document.getElementById('center');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'center.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage4.addEventListener('click', openNewPage);
});


document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage5 = document.getElementById('jaehyun');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'jaehyun.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage5.addEventListener('click', openNewPage);
});

document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage6 = document.getElementById('clock');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'heekyungClock.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage6.addEventListener('click', openNewPage);
});

document.addEventListener('DOMContentLoaded', function () {
    // 이미지 요소 가져오기
    var myImage7 = document.getElementById('seoyun');

    // 이미지를 클릭했을 때 실행될 함수
    function openNewPage() {
        // 새로운 HTML 파일 열기
        window.location.href = 'seoyun.html';
    }

    // 이미지에 클릭 이벤트 리스너 추가
    myImage7.addEventListener('click', openNewPage);
});