<template>
  <div class="app">
    <div v-if="getQnaObjectObserver != null">
      <v-row justify="center">
        <v-col xl="8" align="left">
          <div class="text-h4 font-weight-bold primary--text pt-4">Q. {{ getQnaObjectObserver.title }}</div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col xl="8" align="center">
          <v-row>
            <v-col align="left" align-self="center">
              <!-- 깃털 아이콘 -->
              <v-avatar color="accent" size="25">
                <v-icon dark>mdi-feather</v-icon>
              </v-avatar>
              {{ getQnaObjectObserver.user_name }} | {{ getQnaObjectObserver.udate }}
            </v-col>

            <!-- 삭제, 수정 버튼 -->
            <v-col align="right">
              <v-btn large color="accent" @click="_deleteTest">삭제</v-btn>
              <v-btn large color="warning" @click="_goModify">수정</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col xl="8">
          <v-alert class="text-h6 text-left" border="left" colored-border color="accent" min-height="200px">{{
            getQnaObjectObserver.body
          }}</v-alert>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col xl="8">
          <v-btn color="accent" block large @click="_goAnswer">답변하기</v-btn>
        </v-col>
      </v-row>

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
