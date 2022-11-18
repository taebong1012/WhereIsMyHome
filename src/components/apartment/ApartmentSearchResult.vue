<template>
  <div>
    <v-row>
      <apartment-search></apartment-search>
    </v-row>

    <v-row>
      <v-col>지도 화면 입니다. </v-col>
      <v-col>
        리스트화면입니다.
        <apartment-search-result-list v-if="flag" @click="_oppositeFlag"></apartment-search-result-list>
        <div v-else>아파트 상세정보</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ApartmentSearch from "@/components/apartment/ApartmentSearch.vue";
import ApartmentSearchResultList from "@/components/apartment/ApartmentSearchResultList.vue";

export default {
  name: "ApartmentSearchResult",
  components: {
    ApartmentSearch,
    ApartmentSearchResultList,
  },
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    _oppositeFlag() {
      this.flag = !this.flag;
      console.log(this.flag + "로 바뀜");
    },
  },
};
</script>

<style></style>
