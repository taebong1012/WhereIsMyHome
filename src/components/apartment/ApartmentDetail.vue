<template>
  <div>
    <v-row>
      <v-btn class="ma-0" color="yellow" @click="_goBack" depressed large> 목록으로 </v-btn>
      <v-btn class="ma-0" color="pink" @click="_goInterest" depressed large style="color: white">
        나의 관심 아파트
      </v-btn>
    </v-row>

    <v-row>
      <v-col>매매 가격</v-col><v-col>{{ dumpApt.dealAmout }}</v-col>
    </v-row>
    <v-row>
      <v-col>등록 일자</v-col><v-col>{{ dumpApt.dealYear }}.{{ dumpApt.dealMonth }}.{{ dumpApt.dealDay }}</v-col>
    </v-row>
    <v-row>
      <v-col>면적</v-col><v-col>{{ dumpApt.dealYear }}</v-col>
    </v-row>
    <v-row>
      <v-col>층</v-col><v-col>{{ dumpApt.floor }}</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ApartmentDetail",
  data() {
    return {
      aptCode: "",

      dumpApt: {
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
  },
  methods: {
    _goInterest() {
      this.$router.push({
        name: "interest",
      });
    },
    _goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
