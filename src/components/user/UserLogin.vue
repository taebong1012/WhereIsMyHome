<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex justify-center">
          <div class="text-h4">Login</div>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="id" label="ID" @keyup.enter="_login" outlined type="text"></v-text-field>

          <v-text-field v-model="pw" label="PW" @keyup.enter="_login" outlined type="password"></v-text-field>
          <div class="text-right">
            <v-btn color="primary" @click="_login"> Login </v-btn>
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
    ...mapActions("userStore", ["userLogin"]),

    _login() {
      const user = {
        id: this.id,
        pw: this.pw,
      };
      if (this.userLogin(user)) {
        this.$router.push({ name: "home" });
      }
    },
  },

  computed: {
    ...mapGetters("userStore", ["isLoginObserver"]),
  },
};
</script>
