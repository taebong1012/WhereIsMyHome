<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col cols="3" class="text-h4 font-weight-bold" align="center">[질문 등록 하기]</v-col>
      </v-row>

      <v-row>
        <v-col cols="1" class="text-h5 font-weight-bold" align="center">제목: </v-col>
        <v-col cols="11">
          <v-text-field label="제목 입력" v-model="questionObject.title" type="text" flat dense solo outlined />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1" class="text-h5 font-weight-bold" align="center">내용: </v-col>
        <v-col cols="11">
          <v-textarea label="내용 입력" v-model="questionObject.content" type="text" flat dense solo outlined />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="flex-shrink-0" cols="auto">
          <v-chip color="accent" @click="_goList">글 목록</v-chip>
        </v-col>

        <v-col class="flex-shrink-0" cols="auto">
          <v-chip color="accent" @click="_registQuestion">글 등록</v-chip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "QnaWrite",
  data() {
    return {
      questionObject: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    ...mapActions("qnaStore", ["createQuestion"]),
    _registQuestion() {
      console.log("글 등록버튼 눌림");
      this.createQuestion(this.questionObject);

      alert("질문 등록 완료!");
      this._goList();
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
