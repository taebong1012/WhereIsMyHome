<template>
  <div>
    <v-row justify="center">
      <v-col align="center" align-self="center">
        <qna-search></qna-search>
      </v-col>
    </v-row>

    <!-- 리스트로 띄우기 -->
    <!-- <v-row justify="center" class="pt-0">
      <v-col cols="8" xl="8" align="center">
        <v-card elevation="2">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">글 번호</th>
                  <th class="text-center">제목</th>
                  <th class="text-center">작성자</th>
                  <th class="text-center">답변 여부</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getQnaListObserver" :key="item.uid" @click="_goDetail(item.uid)" align="center">
                  <td>{{ item.uid }}</td>

                  <td>
                    {{ item.title }} <b>&nbsp;&nbsp;&nbsp;({{ item.answer_count }})</b>
                  </td>
                  <td>{{ item.user_name }}</td>
                  <td v-if="item.answer_count > 0" style="color: green; font-weight: bold">답변완료</td>
                  <td v-else></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row> -->

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

    <v-row
      v-for="item in getQnaListObserver"
      :key="item.uid"
      @click="_goDetail(item.uid)"
      justify="center"
      height="100px"
    >
      <v-col cols="8">
        <v-row>
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
            답변 완료
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
