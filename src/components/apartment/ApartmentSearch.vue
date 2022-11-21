<template>
  <v-row justify="center">
    <v-col cols="2">
      <!-- 시도 셀렉트박스 -->
      <v-select
          label="시/도 선택"
          @change="_sidoChanged"
          v-model="region.sidoName"
          :items="getSidoListObserver"
      ></v-select>
    </v-col>
    <v-col cols="2">
      <!-- 구군 셀렉트박스 -->
      <v-select
          label="구/군 선택"
          @change="_gugunChanged"
          v-model="region.gugunName"
          :items="getGugunListObserver"
      ></v-select>
    </v-col>
    <!-- 동 셀렉트박스 -->
    <v-col cols="2">
      <v-select
          label="동 선택"
          @change="_dongChanged"
          v-model="region.dongName"
          :items="getDongListObserver"
      ></v-select>
    </v-col>
    <v-col cols="1" align="center" align-self="center">
      <v-btn class="ma-0" color="accent" @click="_search">SEARCH</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ApartmentSearch",
  data() {
    return {
      region: {
        sidoName: "",
        gugunName: "",
        dongName: "",
        word: "",
      },
    };
  },
  methods: {
    ...mapActions("apartmentStore", ["getSidoList", "getGugunList", "getDongList", "getDealAptList"]),

    _sidoChanged() {
      this.region.gugunName = "";
      this.region.dongName = "";
      if (this.region.sidoName === "") return;

      this.getGugunList(this.region);
    },

    _gugunChanged() {
      this.region.dongName = "";
      if (this.region.gugunName === "") return;

      this.getDongList(this.region);
    },

    _dongChanged() {
      if (this.region.sidoName === "" || this.region.gugunName === "" || this.region.dongName === "") return;
    },

    _search() {
      this.getDealAptList(this.region);
      this.$emit("updateList");
      if (this.$route.name !== "apartmentlist") {
        this.$router.push({name: "apartmentlist"});
        // console.log(this.region.sidoName + " " + this.region.gugunName + " " + this.region.dongName + " " + this.region.word)
      }
    },
  },

  computed: {...mapGetters("apartmentStore", ["getSidoListObserver", "getGugunListObserver", "getDongListObserver"])},
  created() {
    // this.$store.commit("apartmentStore/SET_SIDO_LIST", []);
    // this.$store.commit("apartmentStore/SET_GUGUN_LIST", []);
    // this.$store.commit("apartmentStore/SET_DONG_LIST", []);

    this.getSidoList();
  },
};
</script>

<style></style>
