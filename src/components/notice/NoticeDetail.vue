<template>
  <div class="app">
    <div v-if="getNoticeObjectObserver != null">
      <v-row justify="center">
        <v-col cols="8" xl="8" align="left">
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
              <div style="font-size: 20px" v-html="getNoticeObjectObserver.content"></div>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn color="secondary" @click="_goBack">목록으로 돌아가기</v-btn>
              <v-btn
                v-if="myPageInfoObserver.level >= 10"
                color="warning"
                @click="_doDelete(getNoticeObjectObserver.uid)"
                style="color: white"
                ><v-icon>mdi-trash-can-outline</v-icon></v-btn
              >
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
    ...mapActions("noticeStore", ["getNoticeOne", "deleteNotice"]),
    ...mapActions("userStore", ["mypage"]),

    _goBack() {
      this.$router.go(-1);
    },
    async _doDelete(uid) {
      //+++++++실제로 삭제!!!!!>_<
      await this.deleteNotice(uid).then(() => {
        alert("삭제 하였습니다.");
        this.$router.push({ name: "noticelist" });
      });
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
