<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div>
              <h2 class="text-h4 font-weight-bold">아파트 검색</h2>
            </div>

            <v-divider class="my-4"></v-divider>

            <v-row justify="center">
              <router-view></router-view>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AppApartment",
  components: {
    // siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
