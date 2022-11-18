<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col cols="1" class="text-h5 font-weight-bold" align="center">제목:</v-col>
        <v-col cols="11">
          <v-text-field label="제목 입력" v-model="noticeObject.title" type="text" flat dense solo outlined />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1" class="text-h5 font-weight-bold" align="center">내용:</v-col>
        <v-col cols="11">
          <v-textarea label="내용 입력" v-model="noticeObject.content" type="text" flat dense solo outlined />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="flex-shrink-0" cols="auto">
          <v-chip color="accent" @click="_goList">글 목록</v-chip>
        </v-col>

        <v-col class="flex-shrink-0" cols="auto">
          <v-chip color="accent" @click="_registNotice">글 등록</v-chip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NoticeWrite",
  data() {
    return {
      noticeObject: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    ...mapActions("noticeStore", ["createNotice"]),
    _registNotice() {
      console.log(this.noticeObject);
      this.createNotice(this.noticeObject);
    },

    _goList() {
      this.$router.push({
        name: "qnalist",
      });
    },
  },
};
</script>

<style></style>
