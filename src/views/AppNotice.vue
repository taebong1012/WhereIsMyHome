<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <notice-search></notice-search>
        <notice-list></notice-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NoticeSearch from "@/components/notice/NoticeSearch.vue";
import NoticeList from "@/components/notice/NoticeList.vue";

export default {
  name: "AppNotice",
  components: {
    NoticeSearch,
    NoticeList,
  },
};
</script>
