<template>
  <div class="app">
    <div v-if="getQnaObjectObserver != null">
      <div class="text-h5 font-weight-bold primary--text pt-4">Q. {{ getQnaObjectObserver.title }}</div>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <!-- 깃털 아이콘 -->
          <v-avatar color="accent" size="25">
            <v-icon dark>mdi-feather</v-icon>
          </v-avatar>

          <div class="pl-2 text-body-1">{{ getQnaObjectObserver.user_name }} | {{ getQnaObjectObserver.udate }}</div>
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

      <v-alert class="text-h6 text-left" border="left" colored-border color="accent">{{
        getQnaObjectObserver.body
      }}</v-alert>

      <v-btn color="accent" block large @click="_goAnswer">답변하기</v-btn>

      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "QnaDetailQuestion",
  //임시데이터
  data() {
    return {};
  },
  props: ["uid"],
  methods: {
    ...mapActions("qnaStore", ["getQnaOne"]),
    _deleteTest() {
      console.log("삭제버튼 클릭됨");
    },
    _goModify() {
      console.log("수정 클릭됨");
      this.$router.push({
        name: "qnamodifyquestion",
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
    ...mapGetters("qnaStore", ["getQnaObjectObserver"]),
  },
  created() {
    this.getQnaOne(this.uid);
    console.log("디테일" + this.uid);
  },
};
</script>

<style></style>
