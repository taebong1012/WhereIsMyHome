import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/AppHome.vue";

import store from "@/store";

Vue.use(VueRouter);

const authUser = async (to, from, next) => {
  let token = sessionStorage.getItem("access-token");
  let isLogin = store.getters["userStore/isLoginObserver"];
  if (token) {
    await store.dispatch("userStore/authUser");
  }

  if (!isLogin) {
    alert("로그인이 필요합니다.");
    router.push({ name: "userlogin" });
  } else {
    next();
  }
};

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
    beforeEnter: authUser,
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
    beforeEnter: authUser,
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
    beforeEnter: authUser,
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
    beforeEnter: authUser,
    component: () => import("@/components/user/MyPage.vue"),
    children: [
      {
        path: "info",
        name: "mypageinfo",
        component: () => import("@/components/user/MyPageInfo.vue"),
      },
      {
        path: "userconfirm",
        name: "userconfirm",
        component: () => import("@/components/user/UserConfirm.vue"),
      },
      {
        path: "usermodify",
        name: "usermodify",
        component: () => import("@/components/user/UserModify.vue"),
      },
    ],
  },
  {
    path: "/interest",
    name: "interest",
    redirect: "/interest/beforeclick",
    beforeEnter: authUser,
    component: () => import("@/views/AppInterest.vue"),
    children: [
      {
        path: "beforeclick",
        name: "beforeclick",
        component: () => import("@/components/interest/InterestBeforeClick.vue"),
      },
      {
        //해당 아파트 안에서 거래매물
        path: "interestspecific",
        name: "interestspecific",
        component: () => import("@/components/interest/InterestListSpecific.vue"),
      },
      {
        //집의 거래금액, 층 수 ,평 수 나오는 곳
        path: "interestdetail",
        name: "interestdetail",
        component: () => import("@/components/interest/InterestDetail.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
