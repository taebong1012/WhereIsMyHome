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
    path: "/apartment",
    name: "apartment",
    component: () => import("@/views/AppApartment.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/AppNotice.vue"),
  },
  {
    path: "/developer",
    name: "developer",
    component: () => import("@/views/AppDeveloper.vue"),
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("@/views/AppLogin.vue"),
  // },
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
        path: "write",
        name: "qnawrite",
        component: () => import("@/components/qna/QnaWrite.vue"),
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
      {
        path: "mypage/:uid",
        name: "usermypage",
        component: () => import("@/components/user/UserMypage.vue"),
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
