<template>
  <div>
    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-btn class="ma-0" color="secondary" @click="_goSearch" depressed large style="color: white; width: 100%">
          더 많은 아파트 찾으러 가기
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mx-auto" height="60vh" elevation="2">
          <v-list subheader style="height: 100%; overflow-y: auto">
            <v-list-item v-for="apt in getInterestListObserver" :key="apt.aptCode">
              <v-list-item-content id="selectedArea" @click="_goSpecific(apt.aptCode)">
                <v-list-item-title
                  v-text="apt.aptName"
                  class="text-h6 font-weight-bold primary--text pt-1"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "InterestList",
  data() {
    return {};
  },
  created() {
    this.getInterestAptList();
  },

  methods: {
    ...mapActions("interestStore", ["getInterestAptList"]),
    ...mapActions("apartmentStore", ["getAptListDetail"]),

    _goSpecific(aptCode) {
      console.log("해당 아파트 코드, aptCode: " + aptCode);

      this.getAptListDetail(aptCode);

      //현재 루트 이름이 beforeclick이라면 inter
      if (this.$route.name === "beforeclick") {
        this.$router.push({
          name: "interestspecific",
          params: { aptCode: aptCode },
        });
      }
    },
    _goSearch() {
      this.$router.push({
        name: "apartment",
      });
    },
  },
  computed: {
    ...mapGetters("interestStore", ["getInterestListObserver"]),
  },
};
</script>

<style></style>
