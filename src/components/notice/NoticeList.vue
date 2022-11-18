<template>
  <div id="app">
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <notice-search></notice-search>
      </v-col>
    </v-row>

    <!-- 리스트로 띄우기 -->
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">글 번호</th>
            <th class="text-center">제목</th>
            <th class="text-center">작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getNoticeListObserver" :key="item.uid" @click="_goDetail(item.uid)" align="center">
            <td>{{ item.uid }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-row>
      <v-col class="flex-shrink-0" cols="auto">
        <v-chip color="accent" @click="_goWrite">공지 등록</v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NoticeSearch from "@/components/notice/NoticeSearch.vue";

export default {
  name: "NoticeList",
  components: {
    NoticeSearch,
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions("noticeStore", ["getNoticeList"]),

    _goDetail(uid) {
      this.$router.push({
        name: "noticedetail",
        params: { uid: uid },
      });
    },
    _goWrite() {
      this.$router.push({
        name: "noticewrite",
      });
    },
  },
  computed: {
    ...mapGetters("noticeStore", ["getNoticeListObserver"]),
  },
  created() {
    this.getNoticeList();
  },
};
</script>

<style></style>
