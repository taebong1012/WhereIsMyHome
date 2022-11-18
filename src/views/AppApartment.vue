<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div class="text-h3 font-weight-bold primary--text pt-4">
          <h4>Search Home</h4>
        </div>

        <v-divider class="my-4"></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="center">
        <apartment-search></apartment-search>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
        ><v-img
          src="@/../images/tmpMapImg.png"
          :aspect-ratio="16 / 9"
          height="600px"
          class="elevation-2"
          style="border-radius: 16px"
        ></v-img
      ></v-col>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApartmentSearch from "@/components/apartment/ApartmentSearch.vue";

export default {
  name: "AppApartment",
  components: {
    ApartmentSearch,
  },
  methods: {},
};
</script>

<style></style>
