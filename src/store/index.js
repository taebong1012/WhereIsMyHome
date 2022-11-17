import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import userStore from "../store/modules/userStore";
import noticeStore from "../store/modules/noticeStore";
import qnaStore from "../store/modules/qnaStore";
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  state: {
    questionList: [
      {
        uid: 11,
        user_uid: 2,
        user_name: "섹시태봉",
        title: "찐개발자당",
        body: null,
        sdate: "2022-11-16T11:18:52.000+00:00",
        udate: "2022-11-16T11:18:52.000+00:00",
      },
      {
        uid: 10,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트8",
        body: null,
        sdate: "2022-11-16T10:35:17.000+00:00",
        udate: "2022-11-16T10:35:17.000+00:00",
      },
      {
        uid: 9,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트8",
        body: null,
        sdate: "2022-11-16T10:35:16.000+00:00",
        udate: "2022-11-16T10:35:16.000+00:00",
      },
      {
        uid: 8,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트7",
        body: null,
        sdate: "2022-11-16T10:35:11.000+00:00",
        udate: "2022-11-16T10:35:11.000+00:00",
      },
      {
        uid: 7,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트6",
        body: null,
        sdate: "2022-11-16T10:35:07.000+00:00",
        udate: "2022-11-16T10:35:07.000+00:00",
      },
      {
        uid: 6,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트5",
        body: null,
        sdate: "2022-11-16T10:35:00.000+00:00",
        udate: "2022-11-16T10:35:00.000+00:00",
      },
      {
        uid: 5,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트4",
        body: null,
        sdate: "2022-11-16T10:34:56.000+00:00",
        udate: "2022-11-16T10:34:56.000+00:00",
      },
      {
        uid: 4,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트3",
        body: null,
        sdate: "2022-11-16T10:34:49.000+00:00",
        udate: "2022-11-16T10:34:49.000+00:00",
      },
      {
        uid: 3,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트2",
        body: null,
        sdate: "2022-11-16T10:34:44.000+00:00",
        udate: "2022-11-16T10:34:44.000+00:00",
      },
      {
        uid: 2,
        user_uid: 1,
        user_name: "최진우",
        title: "질문글 테스트1",
        body: null,
        sdate: "2022-11-16T10:34:35.000+00:00",
        udate: "2022-11-16T10:34:35.000+00:00",
      },
    ],
    answerList: [
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
  },

  modules: {
    userStore,
    noticeStore,
    qnaStore,
  },

  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
