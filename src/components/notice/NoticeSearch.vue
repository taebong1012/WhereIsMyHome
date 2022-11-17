<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-card-text>
                <div class="text-h3 font-weight-bold primary--text pt-4">
                  <h4>Notice</h4>
                </div>

                <v-divider class="my-4"></v-divider>

                <div>
                  <v-container>
                    <v-row>
                      <v-col cols="10">
                        <v-text-field label="검색어를 입력해주세요." type="text" flat dense solo outlined />
                      </v-col>
                      <v-col cols="2">
                        <v-btn class="ma-0" color="accent" depressed large>SEARCH</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>

                <v-divider class="my-8"></v-divider>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NoticeSearch",
  components: {
    NoticeList: () => import("@/components/notice/NoticeList.vue"),
  },
};
</script>
