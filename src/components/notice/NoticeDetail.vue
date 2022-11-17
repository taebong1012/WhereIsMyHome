<template>
  <div class="app">
    {{uid}}
  </div>
</template>

<script>

export default {
  name: "NoticeDetail",

  data() {
    return {
    };
  },
  components: {
  },

  created() {
    this.uid = this.$route.params.uid;
  },
};
</script>

<style></style>
