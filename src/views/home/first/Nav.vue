<template>
  <ul class="list-nav">
    <router-link tag="li" to="/home/classify">
      <p class="p1"></p>演唱会
    </router-link>
    <router-link tag="li" to="/home/classify">
      <p class="p2"></p>话剧舞台剧
    </router-link>
    <router-link tag="li" to="/home/classify">
      <p class="p3"></p>体育赛事
    </router-link>
    <router-link tag="li" to="/home/classify">
      <p class="p4"></p>儿童亲子
    </router-link>
    <router-link tag="li" to="/home/classify">
      <p class="p5"></p>全部分类
    </router-link>
    <router-link tag="li" to="/home/classify">
      <p class="p6"></p>活动
    </router-link>
    <router-link tag="li" to="/home/classify">
      <p class="p7"></p>永乐说
    </router-link>
    <router-link tag="li" to="/home/classify">
      <p class="p8"></p>我的
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped lang='scss'>
.list-nav {
  display: flex;
  flex-wrap: wrap;
  padding: 25px 20px;
  font-size: 14px;
  justify-content: space-around;
  li {
    height: 55px;
    width: 25%;
    text-align: center;
    color: rgb(123, 129, 135);

    p {
      height: 36px;
      width: 36px;
      text-align: center;
      margin: 0 auto;
      background: url(../../../assets/img/icon.png) no-repeat;
      background-size: 35px;
    }
    // @for $i from 0 to 9 {
    //   .p#{$i} {
    //     background-position: 0 #{$i * (-45)+40}px;
    //   }
    // }
    .p1 {
      background-position: 0 -5px;
    }
    .p2 {
      background-position: 0 -50px;
    }
    .p3 {
      background-position: 0 -100px;
    }
    .p4 {
      background-position: 0 -150px;
    }
    .p5 {
      background-position: 0 -195px;
    }
    .p6 {
      background-position: 0 -243px;
    }
    .p7 {
      background-position: 0 -290px;
    }
    .p8 {
      background-position: 0 -340px;
    }

    span {
      display: inline-block;
    }
  }
}
</style>