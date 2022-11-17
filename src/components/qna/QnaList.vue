<template>
  <div id="app">
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <qna-search></qna-search>
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
          <tr v-for="item in getQnaListObserver" :key="item.uid" @click="_goDetail(item.uid)" align="center">
            <td>{{ item.uid }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.user_name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-row>
      <v-col class="flex-shrink-0" cols="auto">
        <v-chip color="accent" @click="_goWrite">질문 등록</v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import QnaSearch from "@/components/qna/QnaSearch.vue";

export default {
  name: "QnaList",
  components: {
    QnaSearch,
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions("qnaStore", ["allQna"]),
    _allQna() {
      this.allQna();
    },
    _goDetail(uid) {
      this.$router.push({
        name: "qnadetail",
        params: { uid: uid },
      });
    },
    _goWrite() {
      this.$router.push({
        name: "writeqna",
      });
    },
  },
  computed: {
    ...mapGetters("qnaStore", ["getQnaListObserver"]),
  },
  created() {
    this._allQna();
  },
};
</script>

<style></style>
