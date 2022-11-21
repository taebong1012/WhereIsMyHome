<template>
  <div class="app">
    <div v-if="getQnaObjectObserver != null">
      <v-row justify="center">
        <v-col cols="8" xl="8" align="left">
          <div class="text-h4 font-weight-bold primary--text pt-4">Q. {{ getQnaObjectObserver.title }}</div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8" xl="8" align="center">
          <v-row>
            <v-col align="left" align-self="center">
              <!-- 깃털 아이콘 -->
              <v-avatar color="accent" size="25">
                <v-icon dark>mdi-feather</v-icon>
              </v-avatar>
              {{ getQnaObjectObserver.user_name }} | {{ getQnaObjectObserver.udate }}
            </v-col>

            <!-- 삭제, 수정 버튼 -->
            <v-col
              v-if="getQnaObjectObserver.user_uid === myPageInfoObserver.uid || myPageInfoObserver.level >= 10"
              align="right"
            >
              <v-btn color="warning" @click="_deleteTest"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
              <v-btn color="secondary" @click="_goModify"><v-icon>mdi-pencil</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8" xl="8">
          <v-alert class="text-h6 text-left" border="left" colored-border color="accent" min-height="200px"
            >{{ getQnaObjectObserver.body }}
          </v-alert>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="8" xl="8">
          <v-btn color="accent" block large @click="_goAnswer">답변하기</v-btn>
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
  name: "QnaDetailQuestion",
  //임시데이터
  data() {
    return {};
  },
  props: ["uid"],
  methods: {
    ...mapActions("qnaStore", ["getQnaOne", "deleteQuestion"]),
    ...mapActions("userStore", ["mypage"]),

    async _deleteTest() {
      this.deleteQuestion(this.uid).then(() => {
        alert("질문이 삭제되었습니다.");
        this.$router.push({
          name: "qnalist",
        });
      });
    },
    _goModify() {
      console.log("수정 클릭됨");
      this.$router.push({
        name: "qnamodifyquestion",
        params: {
          uid: this.uid,
        },
      });
    },
    _goAnswer() {
      console.log("답변하기 클릭됨");

      this.$router.push({
        name: "writeanswer",
        params: {
          uid: this.uid,
        },
      });
    },
  },
  computed: {
    ...mapGetters("qnaStore", ["getQnaObjectObserver"]),
    ...mapGetters("userStore", ["myPageInfoObserver"]),
  },
  created() {
    this.mypage();
    this.getQnaOne(this.uid);
    console.log("디테일" + this.uid);
  },
};
</script>

<style></style>
