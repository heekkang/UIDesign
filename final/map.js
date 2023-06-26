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

  

  function fixMarker(location, overlayContent, markerIcon, overlayContainerClass) {
    var fixedMarker = new google.maps.Marker({
      position: location,
      map: map,
      icon: {
        url: markerIcon,
        scaledSize: new google.maps.Size(55, 55)
      },
      title: 'Fixed Marker'  // 개별적인 타이틀 설정
    });
  
    fixedMarker.addListener('click', function() {
      showFixedMarkerOverlay(this, overlayContent, overlayContainerClass); // 클릭한 fixedMarker와 overlay 내용 및 컨테이너 클래스 전달
    });
  }
  
  function showFixedMarkerOverlay(marker, overlayContent, overlayContainerClass) {
    var fixedMarkerOverlayContainer = document.querySelector('.' + overlayContainerClass);
    fixedMarkerOverlayContainer.style.display = 'block'; // 오버레이를 표시하기 위해 display 속성 설정
  
    var fixedMarkerContent = fixedMarkerOverlayContainer.querySelector('.fixed-marker-content');
    fixedMarkerContent.textContent = overlayContent; // 개별적인 내용 표시
  }
  
  function openOverlay(overlayContainerClass) {
    var fixedMarkerOverlayContainer = document.querySelector('.' + overlayContainerClass);
    fixedMarkerOverlayContainer.style.display = 'block';
  }
  
  function closeOverlay(overlayContainerClass) {
    var fixedMarkerOverlayContainer = document.querySelector('.' + overlayContainerClass);
    fixedMarkerOverlayContainer.style.display = 'none';
  }
  
  // 예시로 두 개의 마커와 각각의 오버레이 내용 및 이미지를 추가하는 경우
  var location1 = { lat: 37.459882, lng: 126.951905 };
  var location2 =  { lat: 37.477365, lng: 126.948622 };
  
  var overlayContent1 = '오버레이 내용 1';
  var overlayContent2 = '오버레이 내용 2';
  
  var markerIcon1 = 'image/newmark_1.png';
  var markerIcon2 = 'image/newmark_2.png';
  
  fixMarker(location1, overlayContent1, markerIcon1, 'fixed-marker-overlay-container');
  fixMarker(location2, overlayContent2, markerIcon2, 'fixed-marker-overlay-container_1');
  
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
        title: '내 위치'
      });
  
      if (selectedMarker === null) {
        selectedMarker = userMarker;
      }
  
      userMarker.addListener('click', function() {
        handleMarkerClick(userMarker);
      });
  
      fixMarker(userLocation, '내 위치', 'image/user_marker.png', 'fixed-marker-overlay-container_2');
    }, function() {
      // 위치 정보를 얻지 못하는 경우의 처리
      // 에러 처리 등을 여기에 추가할 수 있습니다.
    });
  } else {
    // 브라우저가 위치 정보를 지원하지 않는 경우의 처리
    // 에러 처리 등을 여기에 추가할 수 있습니다.
  }
  

}

