<template>
  <div class="app">
    <div v-for="a in getQnaAnswerObjectObserver" :key="a.uid">
      <v-row justify="center">
        <v-col cols="8" xl="8" align="left">
          <div class="text-h5 font-weight-bold primary--text pt-4">A. {{ a.user_name }} 님의 답변</div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8" xl="8" align="center">
          <v-row>
            <v-col align="left" align-self="center">
              <!-- 깃털 아이콘 -->
              {{ a.udate }}
            </v-col>

            <!-- 삭제, 수정 버튼 -->
            <v-col
              v-if="a.user_uid === myPageInfoObserver.uid || myPageInfoObserver.level >= 10"
              cols="8"
              align="right"
            >
              <v-btn color="warning" @click="_deleteTest(a.uid)"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
              <v-btn color="secondary" @click="_goModify(a.uid, a.body)"><v-icon>mdi-pencil</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8" xl="8">
          <v-alert class="text-h6 text-left" border="left" colored-border color="secondary">{{ a.body }}</v-alert>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8" xl="8">
          <v-divider class="my-1"></v-divider>
        </v-col>
      </v-row>
    </div>
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
    ...mapActions("qnaStore", ["getQnaAnswerList", "deleteAnswer"]),
    ...mapActions("userStore", ["mypage"]),

    _deleteTest(answer_uid) {
      this.deleteAnswer(answer_uid).then(() => {
        alert("답변을 삭제하였습니다.");
        this.$router.go(this.$router.currentRoute);
      });
    },
    _goModify(answer_uid, body) {
      console.log("답변 수정 클릭됨");

      this.$router.push({
        name: "qnamodifyanswer",
        params: {
          answer_uid: answer_uid,
          question_uid: this.uid,
          body: body,
        },
      });
    },
  },
  computed: {
    ...mapGetters("qnaStore", ["getQnaAnswerObjectObserver"]),
    ...mapGetters("userStore", ["myPageInfoObserver"]),
  },
  created() {
    this.mypage();

    this.getQnaAnswerList(this.uid);
    console.log("디테일 답변" + this.uid);
  },
};
</script>

<style></style>
