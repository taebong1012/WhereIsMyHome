<template>
  <div class="app">
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-text-field label="검색어를 입력해주세요." type="text" flat dense solo outlined />
        </v-col>
        <v-col cols="2">
          <v-btn class="ma-0" color="accent" depressed large>SEARCH</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "QnaSearch",
};
</script>

<style></style>
