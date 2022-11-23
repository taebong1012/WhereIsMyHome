<template>
  <div>
    <v-row justify="center">
      <v-col align="center" align-self="center">
        <qna-search></qna-search>
      </v-col>
    </v-row>

    <v-row justify="center" class="text-h6 font-weight-bold primary--text pt-4">
      <v-col cols="8">
        <v-row>
          <v-col cols="1" align="center"> 번호 </v-col>
          <v-col cols="4" align="left"> 제목 </v-col>
          <v-col cols="4" align="center"> 작성 일자 </v-col>
          <v-col cols="3" align="center"> 답변 여부 </v-col>
        </v-row>

        <!-- 구분선 -->
        <!-- <v-row>
          <v-col>
            <v-divider class="my-0"></v-divider>
          </v-col>
        </v-row> -->
      </v-col>
    </v-row>

    <v-row v-for="item in getQnaListObserver" :key="item.uid" justify="center" height="100px">
      <v-col cols="8">
        <v-row id="selectedArea" @click="_goDetail(item.uid)">
          <v-col cols="1" align="center">
            {{ item.uid }}
          </v-col>
          <v-col cols="4">
            {{ item.title }}<b>&nbsp;&nbsp;&nbsp;({{ item.answer_count }})</b>
          </v-col>
          <v-col cols="4" align="center">
            {{ item.sdate }}
          </v-col>
          <v-col cols="3" v-if="item.answer_count > 0" style="color: #2178ff; font-weight: bold" align="center">
            <span class="accent--text">답변 완료</span>
          </v-col>
          <v-col cols="3" v-else style="font-weight: bold" align="center"> 답변 대기 </v-col>
        </v-row>

        <!-- 구분선 -->
        <v-row>
          <v-col>
            <v-divider class="my-0"></v-divider>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8" class="flex-shrink-0" align="right" xl="8">
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
