<template>
  <ul class="commendlist">
    <CommendList v-for="(i,k) in commend" :key="k" :i="i"></CommendList>
  </ul>
</template>

<script>
import { get } from "@/api/axios";
import CommendList from "./CommendList";
export default {
  data() {
    return {
      commend: [],
      header: "https://static.228.cn",
    };
  },
  computed: {},

  components: { CommendList },

  mounted() {},
  created() {
    this.getCommend();
  },

  methods: {
    async getCommend() {
      let res = await get("/server/content/index.json");
      this.commend = res.data.data.recommendPage.list;
      // console.log(this.commend);
      this.$nextTick(() => {
        this.$store.state.commend = true;
      });
      // console.log(this.date);
    },
  },
};
</script>

<style scoped lang='scss'>
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #333;
  margin: 0 20px;
  overflow: hidden;
  height: 100%;
}
</style>