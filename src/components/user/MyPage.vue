<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div class="my-2">
              <h2 class="text-h4 font-weight-bold">MyPage</h2>
            </div>
            <v-row>
              <router-view></router-view>
            </v-row>
          </div>
        </div>
      </v-col>

      <!--      <v-col>-->
      <!--        <div>-->
      <!--&lt;!&ndash;          <siderbar/>&ndash;&gt;-->
      <!--        </div>-->
      <!--      </v-col>-->
    </v-row>
  </div>

</template>

<script>
export default {
  name: "MyPage",
};
</script>

<style></style>
