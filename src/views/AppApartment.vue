<template>
  <div>
    <v-row>
      <v-col>
        <div class="text-h3 font-weight-bold primary--text pt-4">
          <h4>Search Home</h4>
        </div>

        <v-divider class="my-4"></v-divider>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col align="center">
        <apartment-search @updateList="_updateList"></apartment-search>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col align="center" align-self="center">
        <kakao-map ref="kakaoMapCompo" list="list"></kakao-map>
      </v-col>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>

  <!-- :aspect-ratio="16 / 9" -->
</template>

<script>
import ApartmentSearch from "@/components/apartment/ApartmentSearch.vue";
import KakaoMap from "@/components/apartment/KakaoMap.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppApartment",
  data() {
    return {
      list: [],
    };
  },
  components: {
    ApartmentSearch,
    KakaoMap,
  },
  created() {
    // this.$store.commit("apartmentStore/SET_APT_LIST", []);
  },
  methods: {
    _updateList() {
      let result = [];
      for (let i = 0; i < this.getAptListObserver.length; i++) {
        const apt = this.getAptListObserver[i];
        result.push([apt.lat, apt.lng]);
      }

      console.log(result.length);
      this.$refs.kakaoMapCompo.displayMarker(result);
      this.list = result;
    },
  },
  computed: {
    ...mapGetters("apartmentStore", ["getAptListObserver"]),
  },
};
</script>

<style>
/* #map {
  height: "600px";
  width: "1200px";
  border-radius: "16px";
} */
</style>
