<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div class="text-h3 font-weight-bold primary--text pt-4">
          <h4>I'm interested in</h4>
        </div>

        <v-divider class="my-4"></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col align="center" align-self="center">
        <interest-list></interest-list>
      </v-col>

      <v-col align="center" align-self="center">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import InterestList from "@/components/interest/InterestList.vue";

export default {
  name: "AppInterest",
  components: {
    InterestList,
  },
};
</script>

<style></style>
