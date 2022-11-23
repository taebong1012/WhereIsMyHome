<template>
  <div id="app">
    <v-row justify="center">
      <v-col cols="8">
        <div class="text-h3 font-weight-bold primary--text pt-4">
          <h4>NEWS</h4>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" v-for="(item, index) in newslist" :key="index">
      <v-col cols="8">
        <v-card>
          <v-card-title v-html="item.title.replace(/&quot;/gi, '')"></v-card-title>
          <v-card-subtitle>
            <div v-html="item.body.replace(/&quot;/gi, '')"></div>
          </v-card-subtitle>
          <v-card-text align="right">
            <div id="urltext" @click="_goUrl(item.url.replace(/&quot;/gi, ''))">기사 원문으로 가기</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AppNews",
  components: {},
  data() {
    return {
      // newslist123: [],
    };
  },

  methods: {
    ...mapActions("newsStore", ["getNewsList"]),
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
