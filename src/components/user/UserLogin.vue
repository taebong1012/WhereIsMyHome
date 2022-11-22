<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">Login</div>
        </v-card-title>
        <v-card-text>
          <div class="text-center">
            <v-btn color="yellow" @click="_kakaoLogin"> 카카오로 로그인 </v-btn>
          </div>
          <v-text-field v-model="id" label="ID" @keyup.enter="_login" outlined type="text"></v-text-field>

          <v-text-field v-model="pw" label="PW" @keyup.enter="_login" outlined type="password"></v-text-field>
          <div class="text-right">
            <v-btn color="primary" @click="_login"> Login</v-btn>
          </div>
          <div class="text-center">
            <v-btn color="primary" @click="_kakaoLogin"> 카카오로 로그인</v-btn>
          </div>
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
  },

  computed: {
    ...mapGetters("userStore", ["isLoginObserver"]),
  },
};
</script>
