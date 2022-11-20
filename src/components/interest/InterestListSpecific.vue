<template>
  <div>
    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-btn class="ma-0" color="blue" disabled depressed large style="color: white; width: 100%">
          해당 아파트의 다른 거래매물 보기
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <div>{{ paramAptName }}</div>

          <v-list subheader style="height: 532px; overflow-y: auto">
            <v-list-item v-for="apt in getInterestListObserver" :key="apt.aptCode">
              <v-list-item-content @click="_goDetail(apt.aptCode)">
                <v-list-item-title
                  v-text="apt.aptName"
                  class="text-h6 font-weight-bold primary--text pt-1"
                ></v-list-item-title>
                <v-divider class="my-1"></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "InterestListSpecific",
  data() {
    return {
      paramAptCode: "",
      paramAptName: "",
    };
  },
  created() {
    console.log(this.$route.params.aptCode);
    console.log(this.$route.params.aptName);
    this.paramAptCode = this.$route.params.aptCode;
    this.paramAptName = this.$route.params.aptName;
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
