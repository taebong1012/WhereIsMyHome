<template>
  <div>
    <!-- TODO: 최상위 플랜 카드 -->
    <div>
      <v-row>
        <v-col>
          <v-card>
            <v-img
              :aspect-ratio="16 / 9"
              dark
              gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
              height="500px"
              src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
            >
              <v-card-text class="fill-height d-flex align-end">
                <v-row class="flex-column">
                  <v-col>
                    <v-btn color="accent" to="category">Travel</v-btn>
                  </v-col>
                  <v-col cols="12" lg="8" md="10" xl="7">
                    <h2 class="text-h3 py-3" style="line-height: 1.2">
                      Great Travel Blogs From Around The World To Inspire You
                    </h2>
                  </v-col>
                  <v-col class="d-flex align-center">
                    <v-avatar class="elevation-4" color="accent">
                      <v-icon large>mdi-feather</v-icon>
                    </v-avatar>

                    <div class="text-h6 pl-2">Yan Lee · 22 July 2019</div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row justify="center">
      <v-col cols="6">
        <v-card height="500px">여기는 뉴스 제목들 띄울거임</v-card>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-card height="235px" @click="_goQnA">여기는 QnA 바로가기</v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card height="235px" @click="_goInterest">여기는 관심아파트로 갈거임</v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    _goQnA() {
      this.$router.push({ name: "qna" });
    },
    _goInterest() {
      this.$router.push({ name: "interest" });
    },
    _goNews() {
      this.$router.push({ name: "news" });
    },
  },
};
</script>
