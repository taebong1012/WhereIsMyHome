<template>
  <div>
    <v-row justify="center">
      <v-col cols="6" align="center" align-self="center">
        <v-btn class="ma-0" @click="_goBack" color="warning" depressed large style="width: 100%"> 뒤로가기</v-btn>
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
              <v-list-item-content @click="_goDetail(apt.no, apt.aptCode)">
                <v-list-item-title
                  v-text="apt.apartmentName"
                  class="text-h6 font-weight-bold primary--text pt-1"
                  align="center"
                ></v-list-item-title>
                <!-- <v-divider class="my-1"></v-divider> -->
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
  name: "ApartmentListDeal",
  data() {
    return {};
  },
  created() {
    console.log(this.getAptListObserver);
  },
  methods: {
    _goBack() {
      this.$router.go(-1);
    },
    _goDetail(no, aptCode) {
      console.log("디테일버튼눌림, aptCode: " + no);
      this.$router.push({
        name: "apartmentdetail",
        params: { no: no, aptCode: aptCode },
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
