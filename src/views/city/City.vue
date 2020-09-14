<template>
  <div class="content">
    <Header></Header>
    <div class="city">
      <div class="nowcity">
        <h3>定位城市</h3>
        <div class="box">
          <p class="active">定位失败&nbsp;&nbsp;无演出</p>
        </div>
      </div>
      <div class="hotcity">
        <h3>热门城市</h3>
        <div class="box">
          <span>全国</span>
          <span
            v-for="(i,k) in hotcity"
            :key="k"
            :class="{active:thisindex === k}"
            @click="handlecity(i,k)"
          >{{i.CITYNAME}}</span>
        </div>
      </div>
      <div class="morecity">
        <h3>更多城市</h3>
        <div class="box">
          <span
            v-for="(i,k) in morecity"
            :class="{active:thatindex === k}"
            :key="k"
            @click="handlecityA(i,k)"
          >{{i.CITYNAME}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      nowcity: {},
      thisindex: 0,
      thatindex: 100,
      hotcity: [],
      morecity: [],
    };
  },

  computed: {},

  components: {
    Header,
  },

  created() {},

  mounted() {
    this.hotcity = this.$store.state.citylist.hotCitys;
    this.morecity = this.$store.state.citylist.fcitys;
  },

  methods: {
    handlecity(i, k) {
      this.thisindex = k;
      this.$router.go(-1);
      console.log(k, this.thisindex);

      // if (this.thisindex === k) {
      //   console.log(k);
      // }
      this.$store.commit("setCity", i);
      this.nowcity = i;
      this.thatindex = -1;
    },
    handlecityA(i, k) {
      this.thatindex = k;
      console.log(k, this.thatindex);
      this.$router.go(-1);
      this.$store.commit("setCity", i);
      this.nowcity = i;
      this.thisindex = -1;
    },
  },
};
</script>

<style scoped lang='scss'>
.content {
  .city {
    h3 {
      margin: 20px 20px 0;
      color: #999;
      font-size: 14px;
    }
    .box {
      margin: 10px 20px;
      overflow: hidden;
      text-align: center;
      font-size: 14px;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      span {
        width: 25%;
        height: 40px;
        line-height: 40px;
        color: #7b8187;
      }
      .active {
        color: #ff2959;
      }
    }
  }
}
</style>