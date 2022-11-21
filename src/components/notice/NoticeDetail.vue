<template>
  <div class="app">
    <div v-if="getNoticeObjectObserver != null">
      <v-row justify="center">
        <v-col xl="8" align="left">
          <v-row>
            <v-col>
              <div class="text-h4 font-weight-bold primary--text pt-4">
                {{ getNoticeObjectObserver.title }}
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div style="color: grey">{{ getNoticeObjectObserver.udate }}</div>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-divider class="my-4"></v-divider>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div style="font-size: 20px">{{ getNoticeObjectObserver.content }}</div>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="2">
              <v-btn color="secondary" @click="_goBack">목록으로 돌아가기</v-btn>
            </v-col>
            <v-col v-if="myPageInfoObserver.levle >= 10" cols="2">
              <v-btn color="red" @click="_doDelete" style="color: white">삭제</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NoticeDetail",

  data() {
    return {};
  },
  computed: {
    ...mapGetters("noticeStore", ["getNoticeObjectObserver"]),
    ...mapGetters("userStore", ["myPageInfoObserver"]),
  },
  methods: {
    ...mapActions("noticeStore", ["getNoticeOne"]),
    ...mapActions("userStore", ["mypage"]),

    _goBack() {
      this.$router.go(-1);
    },
    _doDelete() {
      //+++++++실제로 삭제!!!!!>_<
    },
  },
  components: {},

  created() {
    this.uid = this.$route.params.uid;
    this.getNoticeOne(this.uid);
    this.mypage();
  },
};
</script>

<style></style>
