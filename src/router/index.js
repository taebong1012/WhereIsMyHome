import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/AppHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/developer",
    name: "developer",
    component: () => import("@/views/AppDeveloper.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    redirect: "/notice/list",
    component: () => import("@/views/AppNotice.vue"),
    children: [
      {
        path: "list",
        name: "noticelist",
        component: () => import("@/components/notice/NoticeList.vue"),
      },
      {
        path: "detail/:uid",
        name: "noticedetail",
        component: () => import("@/components/notice/NoticeDetail.vue"),
      },
      {
        path: "write",
        name: "noticewrite",
        component: () => import("@/components/notice/NoticeWrite.vue"),
      },
    ],
  },
  {
    path: "/qna",
    name: "qna",
    redirect: "/qna/list",
    component: () => import("@/views/AppQna.vue"),
    children: [
      {
        path: "list",
        name: "qnalist",
        component: () => import("@/components/qna/QnaList.vue"),
      },
      {
        path: "detail/:uid",
        name: "qnadetail",
        component: () => import("@/components/qna/QnaDetail.vue"),
      },
      {
        path: "writeqna",
        name: "writeqna",
        component: () => import("@/components/qna/QnaWriteQuestion.vue"),
      },
      {
        path: "writeanswer",
        name: "writeanswer",
        component: () => import("@/components/qna/QnaWriteAnswer.vue"),
      },
      {
        path: "modifyquestion",
        name: "qnamodifyquestion",
        component: () => import("@/components/qna/QnaModifyQuestion.vue"),
      },
      {
        path: "modifyanswer",
        name: "qnamodifyanswer",
        component: () => import("@/components/qna/QnaModifyAnswer.vue"),
      },
    ],
  },
  {
    path: "/apartment",
    name: "apartment",
    redirect: "/apartment/apartmentlist",
    component: () => import("@/views/AppApartment.vue"),
    children: [
      {
        path: "apartmentlist",
        name: "apartmentlist",
        component: () => import("@/components/apartment/ApartmentList.vue"),
      },
      {
        path: "apartmentdetail",
        name: "apartmentdetail",
        component: () => import("@/components/apartment/ApartmentDetail.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/login",
    component: () => import("@/views/AppUser.vue"),
    children: [
      {
        path: "login",
        name: "userlogin",
        component: () => import("@/components/user/UserLogin.vue"),
      },
      {
        path: "regist",
        name: "userregist",
        component: () => import("@/components/user/UserRegist.vue"),
      },
    ],
  },
  {
    path: "/mypage",
    name: "mypage",
    redirect: "/mypage/info",
    component: () => import("@/components/user/MyPage.vue"),
    children: [
      {
        path: "info",
        name: "mypageinfo",
        component: () => import("@/components/user/MyPageInfo.vue"),
      },
    ],
  },
  {
    path: "/interest",
    name: "interest",
    component: () => import("@/views/AppInterest.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
