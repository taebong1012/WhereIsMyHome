<template>
  <div>
    <!-- TODO: 최상위 플랜 카드 -->
    <div>
      <v-row>
        <v-col>
          <v-card>
            <!-- dark
              gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)" -->
            <v-img :aspect-ratio="16 / 9" height="500px" src="@/../images/homeMain.png"> </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row justify="center">
      <v-col cols="6" align-self="center">
        <v-card height="500px" class="justify-center" color="#FDF9F3">
          <v-card-title><h2>부동산 관련 최신 뉴스</h2></v-card-title>
          <v-card-title
            v-html="newslist[0].title.replace(/&quot;/gi, '')"
            id="urltext"
            @click="_goUrl(newslist[0].url.replace(/&quot;/gi, ''))"
          >
          </v-card-title>
          <v-card-title
            v-html="newslist[1].title.replace(/&quot;/gi, '')"
            id="urltext"
            @click="_goUrl(newslist[1].url.replace(/&quot;/gi, ''))"
          ></v-card-title>
          <v-card-title
            v-html="newslist[2].title.replace(/&quot;/gi, '')"
            id="urltext"
            @click="_goUrl(newslist[2].url.replace(/&quot;/gi, ''))"
          ></v-card-title>
          <v-card-title
            v-html="newslist[3].title.replace(/&quot;/gi, '')"
            id="urltext"
            @click="_goUrl(newslist[3].url.replace(/&quot;/gi, ''))"
          ></v-card-title>
          <v-card-title
            v-html="newslist[4].title.replace(/&quot;/gi, '')"
            id="urltext"
            @click="_goUrl(newslist[4].url.replace(/&quot;/gi, ''))"
          ></v-card-title>

          <v-card-text id="urltext" align="right" @click="_goNews">더 많은 최신 뉴스 보러가기</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-card @click="_goQnA">
              <v-img :aspect-ratio="16 / 9" height="235px" src="@/../images/qna.png"> </v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card @click="_goInterest">
              <v-img :aspect-ratio="16 / 9" height="235px" src="@/../images/interest.png"> </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions("newsStore", ["getNewsList"]),

    _goQnA() {
      this.$router.push({ name: "qna" });
    },
    _goInterest() {
      this.$router.push({ name: "interest" });
    },
    _goNews() {
      this.$router.push({ name: "news" });
    },
    _goUrl(url) {
      console.log(url);
      window.open(url);
    },
  },
  computed: {
    // ...mapGetters[("newsStore", ["getNewsListObserver"])],
    ...mapState("newsStore", ["newslist"]),
  },
  async created() {
    await this.getNewsList();
  },
};
</script>

<style>
#urltext:hover {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}
</style>
