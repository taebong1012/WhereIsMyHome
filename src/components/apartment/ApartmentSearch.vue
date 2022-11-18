<template>
  <v-row justify="center">
    <v-col>
      <!-- 시도 셀렉트박스 -->
      <v-select label="시/도 선택"></v-select>
    </v-col>
    <v-col>
      <!-- 구군 셀렉트박스 -->
      <v-select label="구/군 선택"></v-select>
    </v-col>
    <!-- 동 셀렉트박스 -->
    <v-col>
      <v-select label="동 선택"></v-select>
    </v-col>
    <v-col>
      <v-btn class="ma-0" color="accent" @click="_search" depressed large>SEARCH</v-btn>
    </v-col>
    <v-col>
      <v-btn class="ma-0" color="pink" @click="_goInterest" depressed large>나의 관심 아파트</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ApartmentSearch",
  methods: {
    _search() {
      console.log("search 버튼 눌림");
    },
    _goInterest() {
      console.log("관심 아파트로 가는 버튼 눌림");
    },
  },
};
</script>

<style></style>
