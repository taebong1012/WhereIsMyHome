<template>
  <div>
    <v-row justify="center">
      <v-col xl="8" align="left">
        <v-row>
          <v-col>
            <div class="text-h3 font-weight-bold primary--text pt-4">
              <h4>My Page</h4>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MyPage",
};
</script>

<style></style>
