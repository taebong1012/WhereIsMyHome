<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">Login</div>
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="2" align-self="center" align="center">
              <v-img
                id="loginBtn"
                :aspect-ratio="16 / 9"
                height="50px"
                width="50px"
                src="@/../images/login/naverLogin.png"
                @click="_nothingLogin"
              ></v-img>
            </v-col>
            <v-col cols="2" align-self="center" align="center">
              <v-img
                id="loginBtn"
                :aspect-ratio="16 / 9"
                height="50px"
                width="50px"
                src="@/../images/login/kakaoLogin.png"
                @click="_kakaoLogin"
              ></v-img>
            </v-col>
            <v-col cols="2" align-self="center" align="center">
              <v-img
                id="loginBtn"
                :aspect-ratio="16 / 9"
                height="50px"
                width="50px"
                src="@/../images/login/facebookLogin.png"
                @click="_nothingLogin"
              ></v-img>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field v-model="id" label="ID" @keyup.enter="_login" outlined type="text"></v-text-field>
            </v-col>
          </v-row>

          <v-text-field v-model="pw" label="PW" @keyup.enter="_login" outlined type="password"></v-text-field>

          <v-row justify="center">
            <v-col cols="3"> <v-btn color="accent" @click="_searchPassword"> 비밀번호 찾기 </v-btn> </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="3"> <v-btn color="secondary" @click="_login" style="color: white"> Login </v-btn> </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script type="text/javascript">
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserLogin",
  data() {
    return {
      id: "",
      pw: "",
    };
  },

  methods: {
    ...mapActions("userStore", ["userLogin", "kakaoLogin"]),

    _login() {
      const user = {
        id: this.id,
        pw: this.pw,
      };
      if (this.userLogin(user)) {
        this.$router.push({ name: "home" });
      }
    },
    _searchPassword() {
      this.$router.push({ name: "searchpassword" });
    },
    _kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email",
        success: (authObj) => {
          console.log(authObj["access_token"]);
          this.kakaoLogin(authObj["access_token"]).then(() => {
            this.$router.push({ name: "home" });
          });
        },
      });
    },
    _nothingLogin() {
      alert("준비 중인 서비스 입니다.");
    },
  },

  computed: {
    ...mapGetters("userStore", ["isLoginObserver"]),
  },
};
</script>
<style></style>
