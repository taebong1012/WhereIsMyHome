<template>
  <div>
    <!-- <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-btn class="ma-0" color="blue" disabled depressed large style="color: white; width: 100%">
          해당 아파트의 다른 거래매물 보기
        </v-btn>
      </v-col>
    </v-row> -->

    <v-row justify="center">
      <v-col align="center" align-self="center">
        <v-card height="600px" width="100%" elevation="2">
          <v-row justify="center">
            <v-col align="center" align-self="center">
              <v-img src="@/../images/smallapt.png" :aspect-ratio="16 / 9" width="50%" />
            </v-col>
          </v-row>

          <v-row>
            <v-col class="font-weight-bold"> 왼쪽 목록 중<br />상세 조회 할 아파트를 클릭해주세요. </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "InterestBeforeClick",
};
</script>

<style></style>
