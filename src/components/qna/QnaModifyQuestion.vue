<template>
  <v-container>
    <v-row>질문 수정 하기</v-row>
    <v-row>
      <v-col cols="1" class="text-h5 font-weight-bold" align="center">제목: </v-col>
      <v-col cols="11">
        <v-text-field label="제목 입력" type="text" flat dense solo outlined :value="originTitle"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="1" class="text-h5 font-weight-bold" align="center">내용: </v-col>
      <v-col cols="11">
        <v-textarea label="내용 입력" type="text" flat dense solo outlined :value="originContent"></v-textarea>
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
export default {
  name: "QnaModifyQuestion",
  data() {
    return {
      uid: "11", //!!!!!!!!!!파라미터 값 넘기려고 그냥 임시로 숫자 넣어놨어요. 현재의 글번호가 넘어가야하는뎅!!!!!!!!!!!!
      originTitle: "원래 글의 제목!", //임시 문자열
      originContent: "원래 글의 내용!", //임시 문자열
    };
  },
  methods: {
    _modifyDone() {
      console.log("수정 완료 버튼 눌림");
      alert("수정 완료!");

      this.$router.push({
        name: "qnadetail",
        params: { uid: this.uid }, //!!!!!!!!!!파라미터 값 넘기려고 그냥 임시로 숫자 넣어놨어요 현재의 글번호가 넘어가야하는뎅!!!!!!!!!!!!
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
