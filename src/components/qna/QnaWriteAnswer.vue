<template>
  <div id="app">
    <v-container>
      <v-row>
        <v-col cols="3" class="text-h4 font-weight-bold" align="center">[답변 등록 하기]</v-col>
      </v-row>

      <v-row>
        <v-col cols="1" class="text-h5 font-weight-bold" align="center">내용:</v-col>
        <v-col cols="11">
          <v-textarea label="내용 입력" type="text" v-model="body" flat dense solo outlined/>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="flex-shrink-0" cols="auto">
          <v-chip color="accent" @click="_goList">글 목록</v-chip>
        </v-col>

        <v-col class="flex-shrink-0" cols="auto">
          <v-chip color="accent" @click="_registAnswer">답변 등록</v-chip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "QnaWrite",
  data() {
    return {
      questionUID: 0, //!!!!현재 답변을 등록한 질문글의 uid를 임시로 넣어놨어요!!!!!!!!
      body: '',
    };
  },
  created() {
    this.questionUID = this.$route.params.uid;
    console.log("제발 맞게좀 나와라.. " + this.questionUID);

  },

  methods: {
    ...mapActions("qnaStore", ["createQuestionAnswer"]),

    async _registAnswer() {
      if (await this.createQuestionAnswer({
        body: this.body,
        question_uid: this.questionUID,
      }) === true) {
        alert("답변 등록 완료!");
        console.log("router 이동");
        this.$router.push(
            {
              name: "qnadetail", params: {
                uid: this.questionUID,
              }
            }
        )
      }
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
