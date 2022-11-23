<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="secondary" @click="_goBack" depressed large style="width: 100%">뒤로가기</v-btn>
      </v-col>
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="interest" @click="_goInterest" depressed large style="color: white; width: 100%">
          나의 관심 아파트
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-card height="542px" width="100%" class="elevation-2">
          <v-row>
            <v-col class="text-h4 font-weight-bold primary--text pt-4" align="center" align-self="center">
              {{ apartmentName }}
              <v-btn color="interest" outlined @click="_interest">
                <!-- 관심 아파트 등록 여부 정할 버튼! -->
                <v-icon v-if="interest">mdi-heart</v-icon>
                <v-icon v-else>mdi-heart-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-divider class="my-3"></v-divider>

          <!-- 로드뷰 띄우기 -->
          <v-row justify="center">
            <v-col align-self="center" align="center">
              <v-card height="20vh">
                <div id="roadview" style="width: 100%; height: 20vh">로드뷰 여기임</div>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-simple-table fixed-header height="30vh">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-center">거래 일자</th>
                      <th class="text-center">거래 금액</th>
                      <th class="text-center">면적</th>
                      <th class="text-center">층수</th>
                    </tr>
                  </thead>
                  <tbody align="center">
                    <tr v-for="item in getAptListDetailObserver" :key="item.no">
                      <td>{{ item.dealYear }}.{{ item.dealMonth }}.{{ item.dealDay }}</td>
                      <td>{{ item.dealAmount }}만원</td>
                      <td>{{ item.area }}㎡</td>
                      <td>{{ item.floor }}층</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ApartmentDetail",
  data() {
    return {
      interest: false,
      apartmentName: "",
      aptCode: 0,
    };
  },

  async created() {
    this.apartmentName = this.$route.params.apartmentName;
    this.aptCode = this.$route.params.aptCode;
    // this.getDealAptDetail(this.no);
    console.log("created : " + this.apartmentName);
    console.log("created : " + this.aptCode);

    if ((await this.isExist(this.aptCode)) === true) {
      this.interest = true;
    } else {
      this.interest = false;
    }

    ////////
    this.getAptListDetail(this.aptCode);
    console.log(this.getAptListDetailObserver);

    //로드뷰
  },
  computed: {
    ...mapGetters("apartmentStore", ["getAptListDetailObserver"]),
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0&libraries=services";
    this.displayRoadView();
  },

  methods: {
    ...mapActions("apartmentStore", ["getAptListDetail"]),
    ...mapActions("interestStore", ["createInterest", "deleteInterest", "isExist"]),

    displayRoadView() {
      var roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
      var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
      var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

      var position = new kakao.maps.LatLng(33.450701, 126.570667);

      // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
      roadviewClient.getNearestPanoId(position, 50, function (panoId) {
        console.log("panoId", panoId);
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      });
    },

    _goInterest() {
      this.$router.push({
        name: "interest",
      });
    },
    _goBack() {
      this.$router.go(-1);
    },
    _interest() {
      if (!this.interest) {
        if (this.createInterest(this.aptCode)) {
          this.interest = !this.interest;
        }
      } else {
        if (this.deleteInterest(this.aptCode)) {
          this.interest = !this.interest;
        }
      }
    },
  },
};
</script>

<style></style>
