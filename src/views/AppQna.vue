<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div class="text-h3 font-weight-bold primary--text pt-4">
          <h4>QnA</h4>
        </div>

        <v-divider class="my-4"></v-divider>

        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AppQna",
};
</script>

<style lang="scss" scoped></style>
