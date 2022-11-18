<template>
  <div>
    <v-row>
      <v-btn class="ma-0" color="pink" @click="_goInterest" depressed large style="color: white">
        나의 관심 아파트
      </v-btn>
    </v-row>

    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="item in dumpApt" :key="item.aptCode" @click="_goDetail(item.aptCode)" align="left">
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "ApartmentList",
  data() {
    return {
      dumpApt: [
        {
          aptCode: 1,
          name: "잠실주공",
        },
        {
          aptCode: 2,
          name: "롯데캐슬시그니엘",
        },
        {
          aptCode: 3,
          name: "한남나인원",
        },
        {
          aptCode: 4,
          name: "유엔빌리지",
        },
      ],
    };
  },
  methods: {
    _goDetail(aptCode) {
      console.log("디테일버튼눌림, aptCode: " + aptCode);
      this.$router.push({
        name: "apartmentdetail",
        params: { aptCode: aptCode },
      });
    },
    _goInterest() {
      this.$router.push({
        name: "interest",
      });
    },
  },
};
</script>

<style></style>
