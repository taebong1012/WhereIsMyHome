<template>
  <div>
    MyPage Info<br>
    회원번호 : {{myPageInfoObserver.uid}} <br>
    아이디 : {{myPageInfoObserver.id}} <br>
    이메일 : {{myPageInfoObserver.email}} <br>
    비밀번호 : {{myPageInfoObserver.pw}} <br>
    가입날짜 : {{myPageInfoObserver.sdate}} <br>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MyPageInfo",
  data() {
    return {};
  },
  methods: {
    ...mapActions("userStore", ["mypage"]),
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
