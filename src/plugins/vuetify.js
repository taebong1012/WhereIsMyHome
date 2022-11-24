import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        // accent: "#2178ff", //파랑
        accent: "#FF5E00", //주황
        // accent: "#AAB59E", //초록
        primary: "#000",
        secondary: "#818383", //회색
        warning: "#DB0000", //삭제 같은 중요한 버튼
        interest: "#E14F94",
        background: "#f8f9fe",

        // primary: "#000",
        // secondary: "#393E46",
        // accent: "#222831",
        // warning: "#00ADB5",
      },
    },
  },
});
