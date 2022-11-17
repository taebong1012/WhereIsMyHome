<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div class="text-h3 font-weight-bold primary--text pt-4">
          <h4>Notice</h4>
        </div>
        <router-view></router-view>
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
  },
};
</script>
