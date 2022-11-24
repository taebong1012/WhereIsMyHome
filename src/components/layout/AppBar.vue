<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.smAndUp"
      app
      color="primary"
      dark
    >
      <!-- 네비 -->
      <v-list color="primary" nav>
        <v-list-item v-if="!isLoginObserver" :to="{ name: 'userlogin' }" target="_black"> LOGIN</v-list-item>

        <v-list-item v-else @click="_logout" target="_black"> LOGOUT</v-list-item>

        <v-list-item v-for="(item, i) in barItems" :key="i" :href="item.href" :target="item.target" :to="item.to" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!--      -->
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.smAndUp" app color="white" elevate-on-scroll flat>
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.mdAndUp }">
        <v-row :no-gutters="!$vuetify.breakpoint.smAndUp" align="center">
          <v-col class="d-flex align-start" cols="2">
            <v-app-bar-nav-icon v-if="!$vuetify.breakpoint.smAndUp" @click.stop="drawer = !drawer" />
            <v-toolbar-title class="font-weight-bold text-h6 primary--text" style="cursor: pointer" @click="_homeClick">
              <v-icon color="primary" large>mdi-camera</v-icon>
              <span class="accent--text">H</span>
              ouse
            </v-toolbar-title>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.smAndUp" align="center">
            <v-btn
              v-for="(item, i) in barItems"
              :key="i"
              :to="item.to"
              class="text-capitalize"
              exact
              exact-active-class="accent--text"
              text
              >{{ item.title }}
            </v-btn>
          </v-col>

          <!-- 미로그인 시: Register 버튼 | 로그인 시: 마이페이지 버튼 -->
          <v-col cols="3" v-if="$vuetify.breakpoint.smAndUp">
            <!--          <v-col v-if="$vuetify.breakpoint.smAndUp" cols="1" class="text-right">-->
            <v-btn v-if="!isLoginObserver" color="white" target="_black" to="/user/regist" class="ml-3 text-capitalize">
              <v-icon left>mdi-account-plus</v-icon>
              REGIST
            </v-btn>

            <v-btn v-else color="white" target="_black" :to="{ name: 'mypage' }" class="ml-3 text-capitalize">
              <v-icon left>mdi-account</v-icon>
              MyPage
            </v-btn>
            <!--          </v-col>-->

            <!--          <v-col v-if="$vuetify.breakpoint.smAndUp" cols="1" class="text-right">-->
            <v-btn v-if="!isLoginObserver" color="accent" target="_black" to="/user" class="ml-1 text-capitalize">
              <v-icon left>mdi-login</v-icon>
              LOGIN
            </v-btn>

            <v-btn v-else color="white" target="_black" @click="_logout" class="ml-1 text-capitalize">
              <v-icon left>mdi-logout</v-icon>
              LOGOUT
            </v-btn>
            <!--          </v-col>-->
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    drawer: null,

    barItems: [
      {
        title: "HOME",
        to: "/",
      },
      {
        title: "APT",
        to: "/apartment",
      },
      {
        title: "NEWS",
        to: "/news",
      },
      {
        title: "QnA",
        to: "/qna",
      },
      {
        title: "NOTICE",
        to: "/notice",
      },
    ],
  }),
  computed: {
    ...mapGetters("userStore", ["isLoginObserver"]),
  },
  methods: {
    ...mapActions("userStore", ["userLogout"]),
    _homeClick() {
      if (this.$route.name !== "home") {
        this.$router.push({ name: "home" });
      }
    },
    _logout() {
      this.userLogout();
    },
  },
};
</script>
