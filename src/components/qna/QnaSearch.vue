<template>
  <div class="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="8" xl="8">
          <!-- <v-col cols="5">
          <v-text-field label="검색어를 입력해주세요." v-model="word" type="text" flat dense solo outlined />
        </v-col>
        <v-col cols="1">
          <v-btn class="ma-0" color="accent" @click="_search" depressed large>SEARCH</v-btn>
        </v-col> -->
          <v-toolbar dense flat color="background">
            <v-text-field
              @keyup.enter="_search"
              v-model="word"
              type="text"
              hide-details
              prepend-icon="mdi-magnify"
              single-line
            ></v-text-field>
          </v-toolbar>
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
