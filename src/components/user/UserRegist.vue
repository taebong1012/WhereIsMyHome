<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">Regist</div>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="user.id" label="ID" outlined type="text"></v-text-field>
          <v-text-field v-model="user.pw" label="PW" outlined type="password"></v-text-field>
          <v-text-field v-model="user.name" label="NAME" outlined type="text"></v-text-field>
          <v-text-field v-model="user.email" label="EMAIL" outlined type="text"></v-text-field>

          <v-row justify="center">
            <v-col align="center" align-self="center">
              <v-btn color="accent" @click="_regist"> Regist </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserRegist",
  data() {
    return {
      user: {
        id: "",
        pw: "",
        name: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("userStore", ["userRegist"]),
    _regist() {
      console.log(this.user);
      this.userRegist(this.user);

      //필드 초기화
      this.id = "";
      this.pw = "";
      this.name = "";
      this.email = "";
    },
  },
};
</script>

<style></style>
