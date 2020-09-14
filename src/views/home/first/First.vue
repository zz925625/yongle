<template>
  <div class="wrap" ref="wrap">
    <div class="content">
      <div class="top">
        <div class="city">
          <router-link to="/city">{{this.$store.state.city.CITYNAME}}</router-link>
        </div>
        <div class="search" @click="gosearch()">
          <input type="text" placeholder="搜索" />
          <span class="iconfont sousuo">&#xe60f;</span>
        </div>
      </div>
      <div class="banner">
        <img src="../../../assets/img/alice.jpg" alt />
      </div>
      <div class="notice">
        <span></span>
        <div class="not"></div>
        <span class="close">x</span>
      </div>
      <Navv></Navv>
      <div class="special-list">
        <h3 class="special">
          <router-link tag="p" active-class="space" to="/home/first/commend" class="p">推荐</router-link>
          <router-link tag="p" active-class="space" to="/home/first/stadium" class="p">场馆</router-link>
        </h3>
        <router-view></router-view>
        <div class="more">
          <div @click="goStadium()">查看更多</div>
        </div>
        <Foot></Foot>
      </div>
    </div>
  </div>
</template>

<script>
import Navv from "../first/Nav";
import Foot from "@/components/Foot";
import { get, post } from "@/api/axios";

import BScroll from "@better-scroll/core";

export default {
  data() {
    return {};
  },

  components: {
    Navv,
    Foot,
  },

  computed: {},

  mounted() {
    // if (this.$store.state.commend) {
    //   console.log(this.$store.state.commend);
    //   this.$nextTick(() => {
    //     this.initScroll();
    //   });
    // }
    this.getCity();
    setTimeout(() => {
      this.initScroll();
      console.log(this.$store.state.commend);
    }, 2000);
  },

  methods: {
    gosearch() {
      this.$router.push({ path: "/home/search" });
    },
    async getCity() {
      let res = await post("/server/content/city/list.json");
      // console.log(res.data.data);
      this.$store.state.citylist = res.data.data;
      // console.log(this.$store.state.citylist);
    },
    goStadium() {
      this.$router.push({ path: "/home/classify" });
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
    .top {
      width: calc(100% - 25px);
      height: 40px;
      background: linear-gradient(to right, #ff7e6f, #ff2959);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      display: flex;
      align-items: center;
      padding: 4px 15px 4px 10px;
      .city {
        width: 65px;
        font-size: 14px;
        line-height: 40px;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        // i {
        //   &::before {
        //     content: "";
        //   }
        // }
      }
      .search {
        flex: 1;
        width: 285px;
        border-radius: 10px;
        position: relative;
        input {
          width: calc(100% - 75px);
          border-radius: 20px;
          height: 34px;
          font-size: 14px;
          padding: 0 20px 0 55px;
          text-align: center;
        }
        .sousuo {
          position: absolute;
          left: calc(50% - 15px);
          top: 8px;
          color: #ff3a56;
        }
      }
    }
    .banner {
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .notice {
      height: 30px;
      margin-top: 10px;
      line-height: 30px;
      padding: 0 30px;
      display: flex;
    }
    .special-list {
      overflow: hidden;
      height: 100%;
      .special {
        display: flex;
        font-weight: bold;
        font-size: 22px;
        text-align: center;
        margin: 10px 20px 15px 20px;

        .p {
          color: #b5bbc1;
          margin-right: 10px;
        }
        .space {
          color: #000;
        }
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
}
</style>