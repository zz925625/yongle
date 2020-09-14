<template>
  <div class="wrap" ref="wrap">
    <div class="content">
      <Header>
        <div>
          分类
          <span class="iconfont sousuo">&#xe60f;</span>
        </div>
      </Header>
      <div class="type">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value0" :options="citylist" />
          <van-dropdown-item v-model="value1" :options="classify" />
          <van-dropdown-item v-model="value2" :options="date" />
        </van-dropdown-menu>
      </div>
      <ul class="goods-list">
        <Goodlist v-for="(i,k) in desc" :key="k" :i="i"></Goodlist>
      </ul>
      <div class="more">
        <div @click="getmore()">查看更多</div>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Goodlist from "./Goodlist";
import BScroll from "@better-scroll/core";
import { get, post } from "@/api/axios";
import Foot from "@/components/Foot";
export default {
  data() {
    return {
      value0: 0,
      value1: "a",
      value2: "A",
      city: {},
      citylist: [
        { text: "全部", value: 0 },
        { text: "北京", value: 1 },
        { text: "成都", value: 2 },
        { text: "海口", value: 3 },
        { text: "青岛", value: 4 },
        { text: "日本", value: 5 },
      ],
      classify: [
        { text: "全部分类", value: "a" },
        { text: "演唱会", value: "b" },
        { text: "话剧舞台剧", value: "c" },
        { text: "音乐会", value: "d" },
        { text: "舞蹈芭蕾", value: "e" },
      ],
      date: [
        { text: "全部时间", value: "A" },
        { text: "今天", value: "B" },
        { text: "明天", value: "C" },
        { text: "本周", value: "D" },
        { text: "下周", value: "E" },
        { text: "本月", value: "F" },
      ],
      desc: [],
    };
  },

  computed: {},

  components: { Header, Goodlist, Foot },

  created() {},

  mounted() {
    this.getdefault();
    this.getmore();
    // setTimeout(() => {
    //   this.initScroll();
    // }, 2000);
  },

  methods: {
    async getmore() {
      let res = await post("server/search/moreSearch.json");
      console.log(res);
    },
    async getdefault() {
      let res = await get("server/category/default.json");
      this.desc = res.data.data.pagerMemoryList;
      // console.log(this.desc);
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    initScroll() {
      this.bs = new BScroll(this.$refs.wrap, {
        click: true,
        probeType: 3,
        scrollY: true,
      });
    },
  },
};
</script>

<style scoped lang='scss'>
.wrap {
  height: 100%;
  overflow: hidden;
  .content {
    position: relative;
    // .iconfont{
    //   background: ;
    // }
    .sousuo {
      color: red;
      right: 15px;
      position: absolute;
    }
    .type {
    }
    .goods-list {
      padding: 20px;
      background: #fff;
    }
    .more {
      height: 30px;
      width: 100%;
      background: #fff7f7;
      line-height: 30px;
      text-align: center;
      margin-bottom: 10px;
      font-size: 14px;
      a {
        // background: linear-gradient(to right, #ff7e6f, #ff2959);
        color: #ff2959;
      }
    }
  }
}
</style>
<style  lang='scss'>
.content {
  .type {
    .van-dropdown-menu__title {
      &::after {
        border-color: transparent transparent #ee0a24 #ee0a24;
      }
    }
    .van-popup {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      padding: 20px 30px;
      box-sizing: border-box;
      width: 100%;
      .van-cell {
        // padding: 0;
        // height: 45px;
        width: 33.33%;
        display: inline-block;

        .van-cell__title {
          // text-align: center;
          // width: 105px;
          // line-height: 45px;
        }
        .van-cell__value {
          display: none;
        }
      }
    }
  }
}
</style>