<template>
  <div class="app">
    <qna-question :uid="uid"></qna-question>
    <qna-answer :uid="uid"></qna-answer>
  </div>
</template>

<script>
import QnaQuestion from "@/components/qna/QnaDetailQuestion.vue";
import QnaAnswer from "@/components/qna/QnaDetailAnswer.vue";

export default {
  name: "QnaDetail",

  data() {
    return {
      uid: "", //질문글의 번호
    };
  },
  components: {
    QnaQuestion,
    QnaAnswer,
  },

  created() {
    this.uid = this.$route.params.uid;
    console.log("질문글이예옹 " + this.uid);
  },
};
</script>

<style></style>
