<template>
  <v-app>
    <div id="app">
      <AppBar></AppBar>

      <v-container class="mt-16">
        <router-view></router-view>
      </v-container>
    </div>

    <Footer id="footer"></Footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/AppBar.vue"),
    Footer: () => import("@/components/layout/Footer.vue"),
  },
  data: () => ({}),
};
</script>

<style>
#app {
  height: auto;
  min-height: 100%;
}
#footer {
  position: relative;
  transform: translateY(-100%);
}
</style>
