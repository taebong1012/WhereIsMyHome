<template>
  <div class="app">
    <div class="text-h5 font-weight-bold primary--text pt-4">Q. {{ question.title }}</div>

    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <!-- 깃털 아이콘 -->
        <v-avatar color="accent" size="25">
          <v-icon dark>mdi-feather</v-icon>
        </v-avatar>

        <div class="pl-2 text-body-1">{{ question.user_name }} | {{ question.udate }}</div>
      </div>

      <!-- 삭제, 수정 버튼 -->
      <div class="d-flex align-center">
        <div>
          <v-row>
            <v-col class="flex-shrink-0" cols="auto">
              <v-chip color="accent" @click="_deleteTest">삭제</v-chip>
            </v-col>

            <v-col class="flex-shrink-0" cols="auto">
              <v-chip color="accent" @click="_modifyTest">수정</v-chip>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <v-alert class="text-h6 text-left" border="left" colored-border color="accent">{{ question.body }}</v-alert>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: "QnaDetailQuestion",
  //임시데이터
  data() {
    return {
      question: {
        uid: 7,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트6",
        body: "태선이가 광주를 갈때 과연 SRT를 타고 갈까요 비행기를 타고 갈까요? 궁금하네용",
        sdate: "2022-11-16T10:35:07.000+00:00",
        udate: "2022-11-16T10:35:07.000+00:00",
      },
    };
  },
  props: ["uid"],
  methods: {
    _deleteTest() {
      console.log("삭제버튼 클릭됨");
    },
    _modifyTest() {
      console.log("수정 클릭됨");
    },
  },
  created() {
    console.log("디테일" + this.uid);
  },
};
</script>

<style></style>
