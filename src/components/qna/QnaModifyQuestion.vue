<template>
  <v-container>
    <v-row>
      <v-col cols="3" class="text-h4 font-weight-bold" align="center">[질문 수정 하기]</v-col>
    </v-row>

    <v-row>
      <v-col cols="1" class="text-h5 font-weight-bold" align="center">제목:</v-col>
      <v-col cols="11">
        <v-text-field label="제목 입력" type="text" flat dense solo outlined v-model="object.title"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="1" class="text-h5 font-weight-bold" align="center">내용:</v-col>
      <v-col cols="11">
        <v-textarea label="내용 입력" type="text" flat dense solo outlined v-model="object.body"></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="flex-shrink-0" cols="auto">
        <v-chip color="accent" @click="_goList">글 목록</v-chip>
      </v-col>

      <v-col class="flex-shrink-0" cols="auto">
        <v-chip color="accent" @click="_modifyDone">수정 완료</v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "QnaModifyQuestion",
  data() {
    return {
      object: {
        uid: 0,
        title: "",
        body: "",
      }
    };
  },

  async created() {
    this.object.uid = this.$route.params.uid;
    await this.showQnaOne(this.object.uid).then((data) => {
      this.object = data;
    });
  },
  methods: {
    ...mapActions("qnaStore", ["showQnaOne", "updateQuestion"]),

    async _modifyDone() {
      await this.updateQuestion(this.object);
      alert("수정 완료!");

      await this.$router.push({
        name: "qnadetail",
        params: {uid: this.object.uid}, //!!!!!!!!!!파라미터 값 넘기려고 그냥 임시로 숫자 넣어놨어요 현재의 글번호가 넘어가야하는뎅!!!!!!!!!!!!
      });
    },

    _goList() {
      this.$router.push({
        name: "qnalist",
      });
    },
  },
};
</script>

<style></style>
