var overlayButton = document.getElementById('overlay-button');
overlayButton.addEventListener('click', function() {
  showOverlay();
});

var overlayClose = document.getElementById('overlay-close');
overlayClose.addEventListener('click', function() {
  hideOverlay();
});

function showOverlay() {
  var overlayContainer = document.getElementById('overlay-container');
  overlayContainer.style.display = 'block';

  // 오버레이 화면에 textarea 내용 표시
  var textarea = document.getElementById('overlay-text');
  var inputValue = textarea.value;

  if (inputValue !== '') {
    overlayText.textContent = inputValue;
    previousInputValue = inputValue; // 현재 입력된 텍스트를 이전 값으로 저장합니다.
    textarea.readOnly = false; // 텍스트 입력 상태를 수정 가능하도록 설정합니다.
  } else {
    overlayText.textContent = previousInputValue; // 이전 값으로 텍스트를 유지합니다.
    textarea.readOnly = true; // 텍스트 입력 상태를 읽기 전용으로 설정합니다.
  }
}

function hideOverlay() {
  var overlayContainer = document.getElementById('overlay-container');
  overlayContainer.style.display = 'none';
}
