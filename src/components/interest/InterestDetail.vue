<template>
  <div>
    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-btn class="ma-0" color="accent" depressed large style="color: white; width: 100%">
          해당 아파트의 다른 거래매물 보기
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-card height="530px" width="100%" class="elevation-2">
          <v-row>
            <v-col class="text-h4 font-weight-bold primary--text pt-4" align="center" align-self="center">
              {{ dumpApt.name }}
              <v-btn color="interest" outlined @click="interest = !interest">
                <!-- 관심 아파트 등록 여부 정할 버튼! -->
                <v-icon v-if="interest">mdi-heart</v-icon>
                <v-icon v-else>mdi-heart-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-divider class="my-4"></v-divider>

          <v-img
            src="@/../images/aptIllustrate.png"
            :aspect-ratio="16 / 9"
            height="200px"
            width="80%"
            class="elevation-2"
            style="border-radius: 16px"
          ></v-img>

          <v-simple-table>
            <template v-slot:default>
              <tbody align="center">
                <tr>
                  <td class="font-weight-bold">매매 금액</td>
                  <td>{{ dumpApt.dealAmout }}만원</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">등록 날짜</td>
                  <td>{{ dumpApt.dealYear }}.{{ dumpApt.dealMonth }}.{{ dumpApt.dealDay }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">면적</td>
                  <td>{{ dumpApt.area }}㎡</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">층수</td>
                  <td>{{ dumpApt.floor }}층</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "InterestDetail",
  data() {
    return {
      interest: false,

      aptCode: "",

      dumpApt: {
        name: "한남나인원",
        dealAmout: "73,000",
        dealYear: "2015",
        dealMonth: "1",
        dealDay: "27",
        area: "94.51",
        floor: "9",
      },
    };
  },
  created() {
    this.aptCode = this.$route.params.aptCode;
    console.log("디테일로 파람 잘 넘어왔나?: " + this.aptCode);

    // 현재 아파트가 관심목록에 추가되어있다면 intetest를 true로, 아니라면 false로.
  },
  methods: {},
};
</script>

<style></style>
