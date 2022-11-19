<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" disabled depressed large style="width: 100%"> 목록으로 </v-btn>
      </v-col>
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" color="pink" @click="_goInterest" depressed large style="color: white; width: 100%">
          나의 관심 아파트
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-list subheader style="height: 532px; overflow-y: auto">
            <v-list-item v-for="apt in getAptListObserver" :key="apt.no">
              <v-list-item-content @click="_goDetail(apt.no)">
                <v-list-item-title
                  v-text="apt.apartmentName"
                  class="text-h6 font-weight-bold primary--text pt-1"
                ></v-list-item-title>
                <v-list-item-subtitle
                  >{{ apt.dealAmout }}만원 | {{ apt.area }}m^2 | {{ apt.floor }}층</v-list-item-subtitle
                >
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
import {mapGetters} from "vuex";

export default {
  name: "ApartmentList",
  data() {
    return {

    };
  },
  created() {
  },
  methods: {
    _goDetail(no) {
      console.log("디테일버튼눌림, aptCode: " + no);
      this.$router.push({
        name: "apartmentdetail",
        params: { no: no },
      });
    },
    _goInterest() {
      this.$router.push({
        name: "interest",
      });
    },
  },
  computed: {
    ...mapGetters("apartmentStore", ["getAptListObserver"]),
  },
};
</script>

<style></style>
