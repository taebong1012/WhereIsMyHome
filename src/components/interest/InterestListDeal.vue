<template>
  <div>
    <!-- <v-row justify="center">
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="warning" @click="_goBack" depressed large style="width: 100%">뒤로가기</v-btn>
      </v-col>
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="pink" @click="_goInterest" depressed large style="color: white; width: 100%">
          나의 관심 아파트
        </v-btn>
      </v-col>
    </v-row> -->

    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-card height="600px" width="100%" class="elevation-2">
          <v-row>
            <v-col class="text-h4 font-weight-bold primary--text pt-4" align="center" align-self="center">
              {{ aptName }}
              <v-btn color="pink" outlined @click="_interest">
                <!-- 관심 아파트 등록 여부 정할 버튼! -->
                <v-icon v-if="interest">mdi-heart</v-icon>
                <v-icon v-else>mdi-heart-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-divider class="my-3"></v-divider>

          <!-- <v-img
            src="@/../images/aptIllustrate.png"
            :aspect-ratio="16 / 9"
            height="200px"
            width="80%"
            class="elevation-2"
            style="border-radius: 16px"
          ></v-img> -->

          <v-simple-table fixed-header height="500px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">거래 일자</th>
                  <th class="text-center">거래 금액</th>
                  <th class="text-center">면잭</th>
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
    this.aptName = this.$route.params.aptName;
    this.aptCode = this.$route.params.aptCode;
    // this.getDealAptDetail(this.no);
    console.log("created : " + this.apartmentName);
    console.log("created : " + this.aptCode);

    if ((await this.isExist(this.aptCode)) === true) {
      this.interest = true;
    } else {
      this.interest = false;
    }

    this.getAptListDetail(this.aptCode);
    console.log(this.getAptListDetailObserver);
  },
  computed: {
    ...mapGetters("apartmentStore", ["getAptListDetailObserver"]),
  },
  methods: {
    ...mapActions("apartmentStore", ["getAptListDetail"]),
    ...mapActions("interestStore", ["createInterest", "deleteInterest", "isExist"]),
    _goInterest() {
      this.$router.push({
        name: "interest",
      });
    },
    _goBack() {
      // this.$router.go(-1);
      this.$router.push({ name: "apartmentlist" });
    },
    _interest() {
      if (!this.interest) {
        if (this.createInterest(this.aptCode)) {
          this.interest = !this.interest;
        }
      } else {
        if (this.deleteInterest(this.aptCode)) {
          this.interest = !this.interest;
          this.$router.go(this.$router.push({ name: "interest" }));
        }
      }
    },
  },
};
</script>

<style></style>
