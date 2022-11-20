<template>
  <div>
    <v-row>
      <v-col>
        <v-card elevation="2">
          <v-row justify="center">
            <v-col cols="2">
              <v-img
                class="rounded-lg"
                :aspect-ratio="16 / 9"
                height="100px"
                width="100px"
                src="@/../images/default_profile.png"
              />
            </v-col>

            <v-col cols="4" align-self="center" style="font-size: xx-large">
              <span style="font-weight: bold">{{ myPageInfoObserver.name }}</span> <span> 님 안녕하세요</span>
            </v-col>

            <v-col cols="2" align-self="center" align="center">
              <v-btn @click="_goInterest" color="pink" x-large style="color: white">나의 관심 아파트</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- card랑 card 사이에 띄울라공... -->
    <v-row><v-col>ㅤ</v-col></v-row>

    <v-row justify="center">
      <v-col>
        <v-card elevation="2" style="font-size: large">
          <v-row justify="center">
            <v-col class="text-h5 font-weight-bold primary--text pt-4" cols="11" align="left">나의 상세 정보</v-col>
          </v-row>

          <v-row>
            <v-col align="center" align-self="center" style="font-weight: bold"> 회원번호 </v-col>
            <v-col align="center" align-self="center"> {{ myPageInfoObserver.uid }}</v-col>
          </v-row>

          <v-row>
            <v-col align="center" align-self="center" style="font-weight: bold"> 아이디 </v-col>
            <v-col align="center" align-self="center"> {{ myPageInfoObserver.id }}</v-col>
          </v-row>

          <v-row>
            <v-col align="center" align-self="center" style="font-weight: bold"> 이메일 </v-col>
            <v-col align="center" align-self="center"> {{ myPageInfoObserver.email }}</v-col>
          </v-row>

          <v-row>
            <v-col align="center" align-self="center" style="font-weight: bold"> 가입 날짜 </v-col>
            <v-col align="center" align-self="center"> {{ myPageInfoObserver.sdate }}</v-col>
          </v-row>

          <v-row><v-col>ㅤ</v-col></v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col align="right">
        <v-btn @click="_goEdit" color="accent" large> 정보 수정 / 탈퇴 </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MyPageInfo",
  data() {
    return {};
  },
  methods: {
    ...mapActions("userStore", ["mypage"]),
    _goInterest() {
      this.$router.push({
        name: "interest",
      });
    },
    _goEdit() {
      console.log("정보 수정 버튼 눌림");
      this.$router.push({
        name: "userconfirm",
      });
    },
  },
  computed: {
    ...mapGetters("userStore", ["myPageInfoObserver"]),
  },
  created() {
    this.mypage();
  },
};
</script>

<style></style>
