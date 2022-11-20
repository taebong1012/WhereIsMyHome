<template>
  <div>
    <v-row justify="center">
      <v-col align="center" align-self="center">
        <qna-search></qna-search>
      </v-col>
    </v-row>

    <!-- 리스트로 띄우기 -->
    <v-row justify="center" class="pt-0">
      <v-col xl="8" align="center">
        <v-card elevation="2">
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
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col class="flex-shrink-0" align="right" xl="8">
        <v-btn class="ma-0" color="secondary" @click="_goWrite" depressed large>질문 등록</v-btn>
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
