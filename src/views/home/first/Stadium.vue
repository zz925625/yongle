<template>
  <ul>
    <StadiumList v-for="(i,k) in Stadium" :key="k" :i="i"></StadiumList>
  </ul>
</template>

<script>
import { get } from "@/api/axios";
import StadiumList from "./StadiumList";
export default {
  data() {
    return {
      Stadium: [],
    };
  },

  components: {
    StadiumList,
  },

  computed: {},

  mounted() {},
  created() {
    this.getStadium();
  },
  methods: {
    async getStadium() {
      let res = await get("server/content/moreProductPlay.json", {
        fcity: -1,
        pageNum: 1,
        type: 1,
      });

      this.Stadium = res.data.data.venuePage.list;
      // console.log(this.Stadium);
    },
  },
};
</script>

<style scoped lang='scss'>
ul {
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>