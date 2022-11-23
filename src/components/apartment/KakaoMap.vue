<template>
  <div>
    <v-radio-group v-model="selectedRadio" row @change="_radioChange">
      <v-radio label="없음" value="remove"></v-radio>
      <v-radio label="지하철역" value="subway"></v-radio>
      <v-radio label="병원" value="hospital"></v-radio>
      <v-radio label="학교" value="school"></v-radio>
      <v-radio label="주차장" value="parking"></v-radio>
    </v-radio-group>
    <v-card elevation="2">
      <div id="map"></div>
    </v-card>
  </div>
</template>

<script>
import subwayIcon from "@/../images/subwayIcon.png";
import hospitalIcon from "@/../images/hospitalIcon.png";
import schoolIcon from "@/../images/schoolIcon.png";

export default {
  name: "KakaoMap",
  props: ["list"],
  data() {
    return {
      categoryCode: "",
      selectedRadio: "remove",
      markers: [],
      searchMarkers: [],
      markerImage: null,
      infowindow: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
      console.log("맵 초기화");
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0&libraries=services";
      document.head.appendChild(script);
      console.log("스크립트 설정");
    }
  },
  methods: {
    _radioChange() {
      console.log(this.selectedRadio);
      //1. 없음(아무 정보도 표시하지 않음
      this.removeSearchMarker();

      //2. 지하철역 띄움
      if (this.selectedRadio === "subway") {
        this.categoryCode = "SW8";
        this.markerImage = subwayIcon;
        this.searchPlaces();
      }
      //3. 병원 띄움
      else if (this.selectedRadio === "hospital") {
        this.categoryCode = "HP8";
        this.markerImage = hospitalIcon;
        this.searchPlaces();
      }
      //4. 학교 띄움
      else if (this.selectedRadio === "school") {
        this.categoryCode = "SC4";
        this.markerImage = schoolIcon;
        this.searchPlaces();
      }
      //5. 주차장 띄움
      else if (this.selectedRadio === "parking") {
        this.categoryCode = "PK6";
        this.markerImage = schoolIcon;
        this.searchPlaces();
      }
    },

    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.501244643075495, 127.03961595111771),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      // 지도에 idle 이벤트를 등록합니다
      kakao.maps.event.addListener(this.map, "idle", this.searchPlaces);
    },
    displayMarker(markerPositions) {
      console.log(markerPositions);
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map((position) => new kakao.maps.LatLng(...position));

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce((bounds, latlng) => bounds.extend(latlng), new kakao.maps.LatLngBounds());

        this.map.setBounds(bounds);
      }
    },
    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }

      var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      this.map.setCenter(iwPosition);
    },

    searchPlaces() {
      if (this.selectedRadio === "remove") {
        //마커들 지우는 remove 함수
        console.log("마커들 지우는 remove 함수");
        return;
      }
      // 지도 이벤트 추가
      let ps = new kakao.maps.services.Places(this.map);

      //test
      ps.categorySearch(this.categoryCode, this.placeSearchCB, { useMapBounds: true });
    },
    placeSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log("place success!", data);
        this.displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        console.log("zero result !", status);
      } else if (status === kakao.maps.services.Status.ERROR) {
        console.log("error", status);
      }
    },
    displayPlaces(places) {
      for (let i = 0; i < places.length; i++) {
        const imageSize = new kakao.maps.Size(32, 36);
        let marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(places[i].y, places[i].x),
          title: places[i].place_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: new kakao.maps.MarkerImage(this.markerImage, imageSize),
        });
        marker.setMap(this.map);
        this.searchMarkers.push(marker);
      }

      console.log(places);
      console.log(this.searchMarkers);
    },
    removeSearchMarker() {
      for (var i = 0; i < this.searchMarkers.length; i++) {
        this.searchMarkers[i].setMap(null);
      }
      this.searchMarkers = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 600px;
  z-index: 10;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>

this.getAptListObserver.array.forEach((item) => { console.log(item.apartmentName); });
