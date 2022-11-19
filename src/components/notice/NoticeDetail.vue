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
  },
  methods: {
    ...mapActions("noticeStore", ["getNoticeOne"]),
    _goBack() {
      this.$router.go(-1);
    },
  },
  components: {},

  created() {
    this.uid = this.$route.params.uid;
    this.getNoticeOne(this.uid);
  },
};
</script>

<style></style>
