<template>
  <div class="app">
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-text-field label="검색어를 입력해주세요." type="text" v-model="word" flat dense solo outlined />
        </v-col>
        <v-col cols="2">
          <v-btn class="ma-0" color="accent" @click="_search" depressed large>SEARCH</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "QnaSearch",
  data() {
    return {
      word: "",
    };
  },
  methods: {
    ...mapActions("qnaStore", ["searchQna"]),
    _search() {
      this.searchQna(this.word);
    },
  },
};
</script>

<style></style>
