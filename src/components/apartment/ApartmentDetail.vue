<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="warning" @click="_goBack" depressed large style="width: 100%"> 목록으로</v-btn>
      </v-col>
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="pink" @click="_goInterest" depressed large style="color: white; width: 100%">
          나의 관심 아파트
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-card height="542px" width="100%" class="elevation-2">
          <v-row>
            <v-col class="text-h4 font-weight-bold primary--text pt-4" align="center" align-self="center">
              {{ getDealAptObjectObserver.apartmentName }}
              <v-btn color="pink" outlined @click="_interest">
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
                <td>{{ getDealAptObjectObserver.dealAmount }}만원</td>
              </tr>
              <tr>
                <td class="font-weight-bold">등록 날짜</td>
                <td>{{ getDealAptObjectObserver.dealYear }}.{{
                    getDealAptObjectObserver.dealMonth
                  }}.{{ getDealAptObjectObserver.dealDay }}
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">면적</td>
                <td>{{ getDealAptObjectObserver.area }}㎡</td>
              </tr>
              <tr>
                <td class="font-weight-bold">층수</td>
                <td>{{ getDealAptObjectObserver.floor }}층</td>
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ApartmentDetail",
  data() {
    return {
      interest: false,
      aptCode: 0,
    };
  },
  async created() {
    this.no = this.$route.params.no;
    this.aptCode = this.$route.params.aptCode;
    this.getDealAptDetail(this.no);
    console.log("created : " + this.aptCode);

    if (await this.isExist(this.aptCode) === true) {
      this.interest = true;
    } else {
      this.interest = false;
    }
  },
  computed: {
    ...mapGetters("apartmentStore", ["getDealAptObjectObserver"]),
  },
  methods: {
    ...mapActions("apartmentStore", ["getDealAptDetail"]),
    ...mapActions("interestStore", ["createInterest", "deleteInterest", "isExist"]),
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
