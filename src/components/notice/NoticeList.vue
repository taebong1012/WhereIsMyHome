<template>
  <div id="app">
    <v-row justify="center">
      <v-col align="center" align-self="center">
        <notice-search></notice-search>
      </v-col>
    </v-row>

    <!-- 리스트로 띄우기 -->
    <!-- <v-row justify="center" class="pt-0">
      <v-col xl="8" align="center">
        <v-card>
          <v-simple-table elevation="2">
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
        </v-card>
      </v-col>
    </v-row> -->

    <!-- <v-row>
      <v-col>
        <div>
          <v-pagination v-model="page" :length="pageLength"> -->
    <v-row v-for="item in getNoticeListObserver" :key="item.uid" @click="_goDetail(item.uid)" justify="center">
      <v-col cols="8">
        <v-row>
          <v-col>
            <span class="text-h6 font-weight-bold primary--text pt-4">{{ item.title }}</span>
            <br />
            <span class="text-body-2 py-4">{{ item.sdate }}</span>
          </v-col>
        </v-row>
        <v-row
          ><v-col> <v-divider class="my-0"></v-divider> </v-col
        ></v-row>
      </v-col>
    </v-row>

    <!-- </v-pagination>
        </div>
      </v-col>
    </v-row> -->

    <v-row justify="center">
      <v-col cols="8" class="flex-shrink-0" align="right" xl="8">
        <v-btn v-if="myPageInfoObserver.level >= 10" class="ma-0" color="secondary" @click="_goWrite" depressed large
          >공지 등록</v-btn
        >
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
    return {
      //관리자인지 확인하는 불리언! 관리자가 아니라면 버튼이 보이지 않게끔
      isAdmin: true,
      page: 1,
      pageLength: 0,
    };
  },

  methods: {
    ...mapActions("noticeStore", ["getNoticeList"]),
    ...mapActions("userStore", ["mypage"]),

    _getPageLength() {
      console.log("Test");
      console.log(this.getNoticeListObserver);
    },

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
    ...mapGetters("userStore", ["myPageInfoObserver"]),
  },
  created() {
    this.getNoticeList();
    this.mypage();
  },
};
</script>

<style></style>
