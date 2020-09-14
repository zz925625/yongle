<template>
  <li @click="godesc(i)">
    <img :src="`${'https://static.228.cn'}/${i.PBIGIMG}`" />
    <p class="name">{{i.NAME}}</p>
    <p class="date">{{this.date[0]}}</p>
    <p class="price">
      ￥{{i.MINPRICE}}
      <i>起</i>
    </p>
  </li>
</template>

<script>
export default {
  props: ["i", "k"],
  data() {
    return {
      date: [],
    };
  },
  computed: {},

  components: {},

  created() {},

  mounted() {
    this.getdate();
  },

  methods: {
    godesc(i) {
      this.$router.push({ path: "/desc", query: i });
    },
    getdate() {
      // console.log(this.i);
      // for (var q in this.i) {
      // console.log(this.i.BEGINDATE);

      let begin = this.i.BEGINDATE;
      let end = this.i.ENDDATE;
      if (begin === end) {
        // console.log(begin.substr(0, 10).replace(/-/g, "."));
        this.date.push(begin.substr(0, 10).replace(/-/g, "."));
      } else {
        // console.log(begin.substr(5, 6) + "~" + end.substr(5, 6));
        this.date.push(begin.substr(5, 6) + "~" + end.substr(5, 6));
      }
      // }
    },
  },
};
</script>

<style scoped lang='scss'>
li {
  width: 30%;
  height: 217px;
  margin-bottom: 12px;
  img {
    width: 100%;
    border-radius: 10px;
    height: 140px;
  }
  .name {
    font-size: 14px;
    height: 34px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    font-weight: bold;
    margin-top: 5px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    font-size: 13px;
    font-weight: bold;
    color: #ff3a56;
    i {
      color: #b5bbc1;
    }
  }
  .date {
    margin-top: 2px;
    color: #b5bbc1;
    font-size: 11px;
  }
}
</style>
