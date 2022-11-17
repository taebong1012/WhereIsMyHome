<template>
  <div id="app">
    <v-list-item v-for="(item, i) in getNoticeListObserver" :key="i" :href="item.href" :target="item.target"
                 :to="item.to" link>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "NoticeList",
  methods: {
    ...mapActions("noticeStore", ["getNoticeList"]),

  },
  computed: {
    ...mapGetters("noticeStore", ["getNoticeListObserver"]),
  },
  created() {
    console.log("dd");
    this.getNoticeList();
  },
};
</script>

<style></style>
