<template>
  <div>
    <div class="text-h3 font-weight-bold primary--text pt-4">
      <h4>아파트 검색</h4>
    </div>

    <v-divider class="my-4"></v-divider>

    <v-row>
      <apartment-search></apartment-search>
    </v-row>

    <v-row>
      <v-col>지도 화면 입니다.</v-col>
      <v-col>
        여기가 라우터뷰야 이 밑에 떠야해
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
};
</script>

<style></style>
