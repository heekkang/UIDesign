var map;
var markers = [];
var userMarker;
var fixedMarkers = []; // fixedMarkers 배열로 변수명 수정
var fixedMarker_2
var previousInputValue = '';
var selectedMarker = null;

function initMap() {
  var mapOptions = {
    center: { lat: 37.5, lng: 127 },
    zoom: 15,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
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
  
        if (newMarker) {
          newMarker.setMap(null); // 기존의 newMarker 삭제
        }
  
        newMarker = new google.maps.Marker({
          position: clickLocation,
          map: map,
          icon: {
            url: "image/newMark.png",
            scaledSize: new google.maps.Size(55, 55)
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
    });s
  });

 
  function fixMarker() {
    var locations = [
      { lat: 37.459882, lng: 126.951905 },
      { lat: 37.477365, lng: 126.948622},
      { lat: 37.475265, lng: 126.948422}
      
      // 추가로 원하는 위치 정보를 배열에 추가
    ];

    for (var i = 0; i < locations.length; i++) {
      var location = locations[i];

      var fixedMarker = new google.maps.Marker({
        position: location,
        map: map,
        icon: {
          url: "image/newMark_1.png",
          scaledSize: new google.maps.Size(55, 55)
        },
        title: 'Fixed Marker '  // 개별적인 타이틀 설정
      });

      fixedMarkers.push(fixedMarker);

      fixedMarker.addListener('click', function() {
        showFixedMarkerOverlay(this); // 클릭한 fixedMarker를 전달하여 오버레이 표시
      });
    }
  }

  function handleMarkerClick(marker) {
    selectedMarker = marker;
    showOverlay(marker.getPosition());
  }

  if (userMarker) {
    userMarker.addListener('click', function() {
      handleMarkerClick(userMarker);
    });
  }

  var fixedMarkers = [];


function showFixedMarkerOverlay(marker) {
  var fixedMarkerOverlayContainer = document.querySelector('.fixed-marker-overlay-container');
  fixedMarkerOverlayContainer.style.display = 'block'; // 오버레이를 표시하기 위해 display 속성 설정

  var fixedMarkerCloseBtn = document.getElementById('fixed-marker-close-btn');
  fixedMarkerCloseBtn.addEventListener('click', function() {
    fixedMarkerOverlayContainer.style.display = 'none'; // 오버레이 닫기 버튼 클릭 시 오버레이 숨김
  });

  var fixedMarkerContent = document.getElementById('fixed-marker-content');
  fixedMarkerContent.textContent = marker.title; // 개별적인 내용 표시
}



  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(userLocation);

      userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        icon: {
          url: "image/marker.png",
          scaledSize: new google.maps.Size(60, 80)
        },
        title: '내 위치'
      });

      if (selectedMarker === null) {
        selectedMarker = userMarker;
      }

      userMarker.addListener('click', function() {
        handleMarkerClick(userMarker);
      });

      fixMarker();
    }, function() {
      // 위치 정보를 얻지 못하는 경우의 처리
      // 에러 처리 등을 여기에 추가할 수 있습니다.
    });
  } else {
    // 브라우저가 위치 정보를 지원하지 않는 경우의 처리
    // 에러 처리 등을 여기에 추가할 수 있습니다.
  }

  fixMarker();

  if (fixedMarker) {
    fixedMarker.addListener('click', function() {
      showFixedMarkerOverlay();
    });
  }


  
  
function showFixedMarkerOverlay(marker) {
  var fixedMarkerOverlayContainer = document.querySelector('.fixed-marker-overlay-container');
  fixedMarkerOverlayContainer.style.display = 'block'; // 오버레이를 표시하기 위해 display 속성 설정

  var fixedMarkerCloseBtn = document.getElementById('fixed-marker-close-btn');
  fixedMarkerCloseBtn.addEventListener('click', function() {
    fixedMarkerOverlayContainer.style.display = 'none'; // 오버레이 닫기 버튼 클릭 시 오버레이 숨김
  });

  var fixedMarkerContent = document.getElementById('fixed-marker-content');
  fixedMarkerContent.textContent = marker.title; // 개별적인 내용 표시
}

}


