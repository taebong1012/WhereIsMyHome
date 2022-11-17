<template>
  <div class="app">
    <div v-for="a in getQnaAnswerObjectObserver" :key="a.uid">
      <div class="text-h5 font-weight-bold primary--text pt-4">A. {{ a.user_name }} 님의 답변</div>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="pl-2 text-body-1">{{ a.udate }}</div>
        </div>

        <!-- 삭제, 수정 버튼 -->
        <div class="d-flex align-center">
          <div>
            <v-row>
              <v-col class="flex-shrink-0" cols="auto">
                <v-chip color="accent" @click="_deleteTest">삭제</v-chip>
              </v-col>

              <v-col class="flex-shrink-0" cols="auto">
                <v-chip color="accent" @click="_goModify">수정</v-chip>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <v-alert class="text-h6 text-left" border="left" colored-border color="yellow">{{ a.body }}</v-alert>
    </div>
    <v-btn color="accent" block large @click="_goAnswer">답변하기</v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "QnaDetailAnswer",
  props: ["uid"],
  data() {
    return {};
  },

  methods: {
    ...mapActions("qnaStore", ["getQnaAnswerList"]),
    _deleteTest() {
      console.log("삭제버튼 클릭됨");
    },
    _goModify() {
      console.log("답변 수정 클릭됨");

      this.$router.push({
        name: "qnamodifyanswer",
      });
    },
    _goAnswer() {
      console.log("답변하기 클릭됨");

      this.$router.push({
        name: "writeanswer",
      });
    },
  },
  computed: {
    ...mapGetters("qnaStore", ["getQnaAnswerObjectObserver"]),
  },
  created() {
    this.getQnaAnswerList(this.uid);
    console.log("디테일 답변" + this.uid);
  },
};
</script>

<style></style>
