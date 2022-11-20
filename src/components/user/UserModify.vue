<template>
  <div>
    <v-row>
      <v-col>
        <v-card elevation="2" style="font-size: large">
          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">회원번호</v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="text" disabled v-model="user.uid" style="font-size: large">
                {{ user.uid }}
              </v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">ID</v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="text" disabled v-model="user.id" style="font-size: large">
                {{ user.id }}
              </v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">변경할 비밀번호</v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="password" v-model="inputpw" style="font-size: large"> </v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">변경할 비밀번호 확인</v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="password" v-model="inputpwcheck" style="font-size: large"> </v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="inputpw != inputpwcheck" justify="center">
            <v-col align="center">
              <div style="color: red">변경할 비밀번호를 정확하게 입력해주세요.</div>
            </v-col>
          </v-row>
          <v-row v-else-if="inputpw === '' && inputpwcheck === ''" justify="center">
            <v-col align="center">
              <div>비밀번호를 변경하지 않습니다.</div>
            </v-col>
          </v-row>
          <v-row v-else-if="inputpw === inputpwcheck" justify="center">
            <v-col align="center">
              <div style="color: green">일치하는 비밀번호입니다. 비밀번호를 변경합니다.</div>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">이름</v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="text" disabled v-model="user.name" style="font-size: large">
                {{ user.name }}
              </v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">이메일</v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="text" v-model="user.email" style="font-size: large">
                {{ user.email }}
              </v-text-field>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">가입 일자</v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="text" disabled v-model="user.sdate" style="font-size: large">
                {{ user.sdate }}
              </v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row><v-col>ㅤ</v-col></v-row>

    <v-row>
      <v-col>
        <v-card style="font-size: large">
          <v-row justify="center">
            <v-col cols="5" align="center" align-self="center" style="font-weight: bold">현재 비밀번호: </v-col>
            <v-col cols="5" align="center" align-self="center">
              <v-text-field type="password" v-model="curpw" style="font-size: large"> </v-text-field>
            </v-col>
          </v-row>
          <v-row v-if="curpw === ''" justify="center">
            <v-col align="center">
              <div style="color: red">현재 비밀번호를 입력해주세요.</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="2" align="center" align-self="center">
        <v-btn color="red" @click="_doWithdrawal" large style="color: white">탈퇴</v-btn>
      </v-col>
      <v-col cols="2" align="center" align-self="center">
        <v-btn color="primary" @click="_cancel" large>취소</v-btn>
      </v-col>
      <v-col cols="2" align="center" align-self="center">
        <v-btn color="accent" @click="_doModify" large>수정 완료</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserModify",
  data() {
    return {
      inputpw: "",
      inputpwcheck: "",
      curpw: "",

      user: {
        uid: "",
        id: "",
        pw: "",
        name: "",
        email: "",
        sdate: "",
      },
    };
  },
  methods: {
    ...mapActions("userStore", ["userDelete", "userLogout"]),
    _doWithdrawal() {
      if (this.curpw === "") {
        alert("현재 비밀번호를 입력해주세요.");
      } else if (this.curpw === this.myPageInfoObserver.pw) {
        if (confirm("정말 탈퇴하시겠습니까?")) {
          console.log("탈퇴 진행");

          //logout 시키고

          //찐으로 탈퇴 ㄱ
          this.userDelete();
          this.userLogout();

          this.$router.push({ name: "home" });
        } else {
          console.log("아무것도 안함");
        }
      } else {
        alert("현재 비밀번호를 다시 확인해주세요.");
        this.curpw = "";
      }
    },

    _cancel() {
      this.$router.push({ name: "mypageinfo" });
    },

    _doModify() {
      if (this.inputpw === this.inputpwcheck && this.inputpwcheck != "") {
        this.user.pw = this.inputpwcheck;

        console.log(this.user);

        if (this.curpw === "") {
          alert("현재 비밀번호를 입력해주세요.");
        } else if (this.curpw === this.myPageInfoObserver.pw) {
          //+++++정보 수정 시키기
          // this.$router.push({ name: "mypageinfo" });
        } else {
          alert("현재 비밀번호를 다시 확인해주세요.");
          this.curpw = "";
        }
      } else {
        alert("변경할 비밀번호를 다시 확인해주세요.");
        this.inputpw = "";
        this.inputpwcheck = "";
        this.curpw = "";
      }
    },
  },
  computed: {
    ...mapGetters("userStore", ["myPageInfoObserver"]),
  },
  created() {
    this.user.uid = this.myPageInfoObserver.uid;
    this.user.id = this.myPageInfoObserver.id;
    this.user.pw = this.myPageInfoObserver.pw;
    this.user.name = this.myPageInfoObserver.name;
    this.user.email = this.myPageInfoObserver.email;
    this.user.sdate = this.myPageInfoObserver.sdate;
    console.log(this.user);
  },
};
</script>

<style></style>
