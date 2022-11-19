<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 50vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">비밀번호를 입력해주세요.</div>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="inputpw" label="PW" outlined type="password"></v-text-field>
          <v-row justify="center">
            <v-col cols="2"> <v-btn color="accent" @click="_cancel"> 취소 </v-btn> </v-col>
            <v-col cols="2"> <v-btn color="red" @click="_doWithdrawal" style="color: white"> 탈퇴하기 </v-btn> </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script type="text/javascript">
// import { mapActions, mapGetters } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "UserWithdrawalConfirm",
  data() {
    return {
      inputpw: "",
      userpw: "0000", //그냥 임시로 넣어본
    };
  },
  methods: {
    // ...mapActions("userStore", ["mypage"]),
    _doWithdrawal() {
      console.log("탈퇴 진짜로 진행하는 버튼");
      console.log(this.myPageInfoObserver.pw); //현재 사용자의 비밀번호를 출력하는지 확인

      if (this.inputpw === this.myPageInfoObserver.pw) {
        //+++++++탈퇴++++++++++

        alert("탈퇴 완료 되었습니다.");

        //+++로그아웃+++

        this.$router.push({ name: "home" });
      } else {
        alert("비밀번호가 틀렸습니다.");
        this.inputpw = "";
      }
    },

    _cancel() {
      this.$router.push({ name: "mypageinfo" });
    },
  },

  computed: {
    ...mapGetters("userStore", ["myPageInfoObserver"]),
  },
  // created() {
  //   this.mypage();
  // },
};
</script>
