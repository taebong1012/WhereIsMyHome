<template>
  <div>
    <v-card absolute app color="primary" dark flat>
      <v-container>
        <v-row align="start" justify="center">
          <v-col cols="4" md="3" align-self="center">
            <h4 class="text-h5 font-weight-bold">Where is my home</h4>
            <p class="text-body-1">5회차 월말평가</p>
            <p class="text-body-1">최종 관통 프로젝트</p>
          </v-col>

          <v-col cols="4" md="3">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">안태현</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in heroui" :key="i" :href="item.href" dense target="_black">
                  <v-list-item-content>
                    <v-list-item-title class="text-body-1" v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="4" md="3">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">최진우</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in shock" :key="i" :href="item.href" dense target="_black">
                  <v-list-item-content>
                    <v-list-item-title class="text-body-1" v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>

        <div class="text-center mt-6"></div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    heroui: [
      {
        text: "FrontEnd 개발",
      },
      {
        text: "개발 일정 관리",
      },
    ],
    shock: [
      {
        text: "BackEnd 개발",
      },
      {
        text: "서버 관리",
      },
    ],
  }),
};
</script>
