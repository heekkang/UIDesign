var map;
var markers = [];
var userMarker;
var previousInputValue = '';
var selectedMarker = null;

function initMap() {
  var mapOptions = {
    center: { lat: 37.5, lng: 127 },
    zoom: 15
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  function showOverlay(clickLocation) {
    var overlayContainer = document.querySelector('.overlay-container');
    overlayContainer.style.display = 'block';

    var submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', function() {
      var textarea = document.getElementById('input-text');
      var inputValue = textarea.value;
      var overlayText = document.getElementById('overlay-text');

      if (inputValue !== '') {
        overlayText.textContent = inputValue;
        previousInputValue = inputValue;
        textarea.readOnly = true;

        var newMarker = new google.maps.Marker({
          position: clickLocation,
          map: map,
          icon: {
            url: "image/newMark.png",
            scaledSize: new google.maps.Size(48, 48)
          },
          title: 'New Marker'
        });

        newMarker.addListener('click', function() {
          selectedMarker = newMarker;
          showOverlay(newMarker.getPosition());
        });

        markers.push(newMarker);
        overlayContainer.style.display = 'none';
      }
    });

    var cancelBtn = document.getElementById('cancel-btn');
    cancelBtn.addEventListener('click', function() {
      overlayContainer.style.display = 'none';
    });
  }

  function handleMapClick(event) {
    var clickLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };

    var location = selectedMarker ? selectedMarker.getPosition() : clickLocation;

    var newMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: {
        url: "image/newMark.png",
        scaledSize: new google.maps.Size(48, 48)
      },
      title: 'New Marker'
    });

    newMarker.addListener('click', function() {
      selectedMarker = newMarker;
      showOverlay(newMarker.getPosition());
    });

    markers.push(newMarker);
  }

  // 클릭 이벤트 처리
  map.addListener('click', function(event) {
    var overlayContainer = document.querySelector('.overlay-container');
    overlayContainer.style.display = 'block';

    var submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', function() {
      var textarea = document.getElementById('input-text');
      var inputValue = textarea.value;

      if (inputValue !== '') {
        handleMapClick(event);
      }

      overlayContainer.style.display = 'none';
    });

    var cancelBtn = document.getElementById('cancel-btn');
    cancelBtn.addEventListener('click', function() {
      overlayContainer.style.display = 'none';
    });
  });

  function handleMarkerClick(marker) {
    selectedMarker = marker;
    showOverlay(marker.getPosition());
  }

  // 마커 클릭 이벤트 처리
  if (userMarker) {
    userMarker.addListener('click', function() {
      handleMarkerClick(userMarker);
    });
  }

  // 브라우저의 위치 정보를 얻습니다.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // 사용자의 위치를 중심으로 지도를 보여줍니다.
      map.setCenter(userLocation);

      // 사용자 위치에 마커를 추가합니다.
      userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        icon: {
          url: "image/mark.png",
          scaledSize: new google.maps.Size(48, 48)
        },
        title: '내 위치'
      });

      if (selectedMarker === null) {
        // 처음 로딩될 때 사용자 마커를 선택된 마커로 설정
        selectedMarker = userMarker;
      }

      // 마커 클릭 이벤트 처리
      userMarker.addListener('click', function() {
        handleMarkerClick(userMarker);
      });
    }, function() {
      // 위치 정보를 얻지 못하는 경우의 처리
      // 에러 처리 등을 여기에 추가할 수 있습니다.
    });
  } else {
    // 브라우저가 위치 정보를 지원하지 않는 경우의 처리
    // 에러 처리 등을 여기에 추가할 수 있습니다.
  }
}
