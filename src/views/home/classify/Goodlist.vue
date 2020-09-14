<template>
  <li>
    <div class="left">
      <img :src="`${'https://static.228.cn'}/${i.pbigimg}`" />
      <!-- <i v-if="i.status">售完</i>
      <i v-if="!i.status">售票中</i>-->
    </div>
    <div class="desc">
      <p class="name">{{i.name}}</p>
      <p class="date">{{this.time[0]}}</p>

      <p class="local">{{i.vname}}</p>
      <p class="price">{{this.price[0]}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["i"],

  data() {
    return {
      time: [],
      price: [],
    };
  },

  computed: {},

  components: {},

  created() {},

  mounted() {
    console.log(this.i.status);
    let begin = this.i.begindate;
    let end = this.i.enddate;
    if (begin === end) {
      this.time.push(begin);
      // this.time.push("3");
    } else {
      this.time.push(begin + "~" + end);
    }
    let min = parseInt(this.i.minprice);
    let max = this.i.maxprice;
    if (min === max) {
      this.price.push(min);
    } else {
      this.price.push(min + "-" + max);
    }
  },

  methods: {},
};
</script>

<style scoped lang='scss'>
li {
  display: flex;
  .left {
    position: relative;
    width: 85px;
    img {
      width: 85px;
      height: 113px;
      border-radius: 10px;
      box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
    }
    i {
      top: 0;
      left: 0;
      z-index: 100;
      position: absolute;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      padding: 0 5px;
    }
  }
  .desc {
    flex: 1;
    margin-left: 15px;
    .name {
      height: 40px;
      line-height: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 14px;
    }
    .date {
      color: #999ea3;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-top: 10px;
      font-size: 14px;
    }
    .local {
      color: #999ea3;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 12px;
    }
    .price {
      color: #ff3a56;
      font-size: 14px;
      margin-right: 5px;
      font-weight: bold;
    }
  }
}
</style>