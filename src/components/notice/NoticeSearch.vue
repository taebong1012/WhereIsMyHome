<template>
  <div class="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="5">
          <v-text-field label="검색어를 입력해주세요." v-model="word" type="text" flat dense solo outlined />
        </v-col>
        <v-col cols="1">
          <v-btn class="ma-0" color="accent" @click="search" depressed large>SEARCH</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NoticeSearch",
  data() {
    return {
      word: "",
    };
  },
  methods: {
    ...mapActions("noticeStore", ["searchNotice"]),
    search() {
      this.searchNotice(this.word);
      3;
    },
  },
};
</script>

<style></style>
