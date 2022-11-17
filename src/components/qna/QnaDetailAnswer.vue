<template>
  <div class="app">
    <div v-for="a in answers" :key="a.uid">
      <div class="text-h5 font-weight-bold primary--text pt-4">A. {{ a.user_name }} 님의 답변</div>

      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center">
          <div class="pl-2 text-body-1">{{ a.udate }}</div>
        </div>

        <div class="d-flex align-center"></div>
      </div>
      <v-alert class="text-h6 text-left" border="left" colored-border color="yellow">{{ a.body }}</v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "QnaDetailAnswer",
  data() {
    return {
      answers: [
        {
          uid: 15,
          question_uid: 7,
          user_uid: 1,
          user_name: "최진우",
          body: "답변이예요오옹~~ 6-1",
          sdate: "2022-11-16T10:56:39.000+00:00",
          udate: "2022-11-16T10:56:39.000+00:00",
        },
        {
          uid: 16,
          question_uid: 7,
          user_uid: 1,
          user_name: "최진우",
          body: "답변이예요오옹~~ 6-2",
          sdate: "2022-11-16T10:56:43.000+00:00",
          udate: "2022-11-16T10:56:43.000+00:00",
        },
        {
          uid: 17,
          question_uid: 7,
          user_uid: 2,
          user_name: "섹시태봉",
          body: "답변이예요오옹~~ 6-3 AN",
          sdate: "2022-11-16T10:56:48.000+00:00",
          udate: "2022-11-16T11:10:05.000+00:00",
        },
        {
          uid: 18,
          question_uid: 7,
          user_uid: 1,
          user_name: "최진우",
          body: "답변이예요오옹~~ 6-4",
          sdate: "2022-11-16T10:56:54.000+00:00",
          udate: "2022-11-16T10:56:54.000+00:00",
        },
        {
          uid: 19,
          question_uid: 7,
          user_uid: 2,
          user_name: "섹시태봉",
          body: "답변이예요오옹~~ 6-5 AN",
          sdate: "2022-11-16T10:56:57.000+00:00",
          udate: "2022-11-16T11:10:07.000+00:00",
        },
      ],
    };
  },
};
</script>

<style></style>
