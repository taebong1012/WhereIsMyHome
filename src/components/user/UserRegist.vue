<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">Regist</div>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="id" label="ID" outlined type="text"></v-text-field>
          <v-text-field v-model="pw" label="PW" outlined type="password"></v-text-field>
          <v-text-field v-model="name" label="NAME" outlined type="text"></v-text-field>
          <v-text-field v-model="email" label="EMAIL" outlined type="text"></v-text-field>

          <div class="text-right">
            <v-btn color="primary" @click="_regist"> Regist </v-btn>
          </div>
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
      id: "",
      pw: "",
      name: "",
      email: "",
      user: Object,
    };
  },
  methods: {
    ...mapActions("userStore", ["userRegist"]),
    _regist() {
      this.user = { id: this.id, pw: this.pw, name: this.name, email: this.email };
      console.log(this.user);
      this.userRegist(this.user);
    },
  },
};
</script>

<style></style>
