<template>
  <div>
    <v-row>
      <apartment-search></apartment-search>
    </v-row>

    <v-row>
      <v-col>지도 화면 입니다. </v-col>
      <v-col>
        리스트화면입니다.
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ApartmentSearchResult",
};
</script>

<style></style>
