<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" disabled depressed large style="width: 100%"> 목록으로 </v-btn>
      </v-col>
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="pink" @click="_goInterest" depressed large style="color: white; width: 100%">
          나의 관심 아파트
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-list subheader style="height: 532px; overflow-y: auto">
            <v-list-item v-for="apt in dumpApt" :key="apt.aptCode">
              <v-list-item-content @click="_goDetail(apt.aptCode)">
                <v-list-item-title
                  v-text="apt.name"
                  class="text-h6 font-weight-bold primary--text pt-1"
                ></v-list-item-title>
                <v-list-item-subtitle
                  >{{ apt.dealAmout }}만원 | {{ apt.area }}m^2 | {{ apt.floor }}층</v-list-item-subtitle
                >
                <v-divider class="my-1"></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ApartmentList",
  data() {
    return {
      dumpApt: [
        {
          aptCode: 1,
          name: "잠실주공",
          dealAmout: "73,000",
          area: "94.51",
          floor: "9",
        },
        {
          aptCode: 2,
          name: "롯데캐슬시그니엘",
          dealAmout: "930,000",
          area: "14.21",
          floor: "101",
        },
        {
          aptCode: 3,
          name: "한남나인원",
          dealAmout: "24,000",
          area: "42.53",
          floor: "14",
        },
        {
          aptCode: 4,
          name: "유엔빌리지",
          dealAmout: "90,000",
          area: "13.54",
          floor: "47",
        },
        {
          aptCode: 5,
          name: "잠실주공",
          dealAmout: "20,000",
          area: "35.46",
          floor: "23",
        },
        {
          aptCode: 6,
          name: "롯데캐슬시그니엘",
          dealAmout: "93,000",
          area: "13.34",
          floor: "12",
        },
        {
          aptCode: 7,
          name: "한남나인원",
          dealAmout: "22,000",
          area: "64.43",
          floor: "9",
        },
        {
          aptCode: 8,
          name: "유엔빌리지",
          dealAmout: "74,000",
          area: "35.24",
          floor: "34",
        },
        {
          aptCode: 9,
          name: "잠실주공",
          dealAmout: "20,000",
          area: "35.46",
          floor: "23",
        },
        {
          aptCode: 10,
          name: "롯데캐슬시그니엘",
          dealAmout: "93,000",
          area: "13.34",
          floor: "12",
        },
        {
          aptCode: 11,
          name: "한남나인원",
          dealAmout: "22,000",
          area: "64.43",
          floor: "9",
        },
        {
          aptCode: 12,
          name: "유엔빌리지",
          dealAmout: "74,000",
          area: "35.24",
          floor: "34",
        },
      ],
    };
  },
  methods: {
    _goDetail(aptCode) {
      console.log("디테일버튼눌림, aptCode: " + aptCode);
      this.$router.push({
        name: "apartmentdetail",
        params: { aptCode: aptCode },
      });
    },
    _goInterest() {
      this.$router.push({
        name: "interest",
      });
    },
  },
};
</script>

<style></style>
