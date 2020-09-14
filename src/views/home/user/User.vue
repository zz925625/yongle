<template>
  <div class="content">
    <div class="top">
      <span @click="back()"><</span>
    </div>
    <div class="login">
      <h1>会员注册</h1>
      <div class="text">
        <div class="tel">
          <span class="iconfont z">&#xe60e;</span>
          <input type="text " placeholder="手机号/邮箱地址" />
          <!-- <p>手机号/邮箱地址是必须的</p> -->
        </div>
        <div class="psw">
          <span class="iconfont m">&#xe623;</span>
          <input type="text " placeholder="请输入密码" />
          <span class="iconfont y">&#xe704;</span>
          <span class="iconfont n">&#xe6b4;</span>
          <!-- <p>密码是必须的</p> -->
          <!-- <p>密码必须至少有6个字符</p> -->
        </div>
        <div class="free">
          <input type="checkbox" name="freeloginbtn" />
          <span>两周内免登录</span>
          <a href="#" class="forget">忘记密码</a>
        </div>
        <div class="login-btn">登录</div>
        <div class="logo">
          <span class="iconfont">&#xe6b6;</span>
          <span class="iconfont">&#xe641;</span>
          <span class="iconfont">&#xe69e;</span>
        </div>
        <a href="#" class="reg">马上注册</a>
        <p class="promise">
          登录注册表示同意
          <a href="#">永乐票务用户服务协议</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang='scss'>
.content {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: url(https://m2static.228.cn/images/loginBg.jpg) no-repeat 50%;
  .top {
    height: 30px;
    width: 100%;
    padding-top: 30px;
    margin-bottom: 20px;

    span {
      padding-left: 15px;
      line-height: 30px;
      height: 30px;
      color: white;
      transform: scaleY(1.7);
      display: inline-block;
      font-weight: 300;
    }
  }
  .login {
    margin: 30px 50px 0;
    h1 {
      color: #fff;
      font-size: 32px;
      margin-bottom: 30px;
      font-weight: bold;
    }
    .text {
      .tel,
      .psw {
        font-size: 12px;
        margin-bottom: 20px;
        position: relative;
        text-align: center;
        p {
          color: #ff2959;
          font-size: 12px;
        }
        input {
          display: inline-block;
          height: 44px;
          border-radius: 100px;
          width: calc(100% - 50px);
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.6);
          text-align: center;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          padding: 0 30px 0 20px;
          caret-color: #ff3a56;
        }
        input :focus {
          border: 1px solid #ff3a56;
        }
        span {
          font-size: 25px;
        }
        .z {
          position: absolute;
          left: 15px;
          top: 9px;
        }
        .m {
          position: absolute;
          left: 15px;
          top: 10px;
        }
        .y {
          position: absolute;
          right: 15px;
          top: 12px;
        }
        .n {
          position: absolute;
          right: 15px;
          top: 12px;
        }
      }
      .free {
        color: rgba(255, 255, 255, 0.7);
        background: transparent;
        margin: 0 10px 20px;
        font-size: 14px;

        input {
          width: 13px;
          height: 13px;
          font-size: 14px;
          color: white;
          margin-right: 5px;
          caret-color: #ff3a56;
          vertical-align: middle;
          // opacity: 0.5;
          .active {
            background: linear-gradient(135deg, #ff7e6f 0%, #ff2959 100%);
            box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.35);
          }
        }
        a {
          color: rgba(255, 255, 255, 0.7);
          float: right;
        }
      }
      .login-btn {
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        width: 100%;
        background: rgba(255, 255, 255, 0.7);
        color: #fff;
        border-radius: 100px;
        opacity: 0.8;
        text-align: center;
      }
      .logo {
        height: 25px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        span {
          font-size: 25px;
          color: #ff3a56;
        }
      }
      .reg {
        width: 100%;
        display: inline-block;
        text-align: center;
        font-size: 14px;
        color: #ff3a56;
        text-decoration: underline;
        margin-top: 80px;
        margin-bottom: 40px;
      }
      p {
        color: rgba(255, 255, 255, 0.4);
        font-size: 12px;
        a {
          color: rgba(255, 58, 86, 0.6);
          text-decoration: underline;
        }
      }
    }
  }
}
</style>