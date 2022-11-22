<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">비밀번호 찾기</div>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="user.id" label="ID" outlined type="text"></v-text-field>
          <v-text-field v-model="user.name" label="NAME" outlined type="text"></v-text-field>
          <v-text-field v-model="user.email" label="EMAIL" outlined type="text"></v-text-field>

          <div class="text-right">
            <v-btn color="primary" @click="_doSearchPassword"> 완료 </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserSearchPassword",
  data() {
    return {
      user: {
        id: "",
        name: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("userStore", ["findPw"]),
    _doSearchPassword() {
      console.log("vue 비밀번호찾기");
      console.log(this.user);
      this.findPw(this.user);

      //필드 초기화
      // this.user.id = "";
      // this.user.name = "";
      // this.user.email = "";
    },
  },
};
</script>

<style></style>
