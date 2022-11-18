<template>
  <div class="app">
    <div v-if="getNoticeObjectObserver != null">
      {{ getNoticeObjectObserver.uid }}
      <br />
      {{ getNoticeObjectObserver.title }}
      <br />
      {{ getNoticeObjectObserver.content }}
      <br />
      {{ getNoticeObjectObserver.sdate }}
      <br />
      {{ getNoticeObjectObserver.udate }}
      <br />
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
  },
  components: {},

  created() {
    this.uid = this.$route.params.uid;
    this.getNoticeOne(this.uid);
  },
};
</script>

<style></style>
