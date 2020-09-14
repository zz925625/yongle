<template>
  <div class="content">
    <div class="wrap" ref="wrap">
      <div>
        <div class="top">
          <span class="back iconfont" @click="back()">&#xe600;</span>
          <span class="collect iconfont">&#xe6e7;</span>
          <span class="share iconfont">
            &#xe601;
            <van-cell @click="showShare = true" />
            <van-share-sheet
              v-model="showShare"
              title="立即分享给好友"
              :options="options"
              @select="onSelect"
            />
          </span>
        </div>
        <div class="text">
          <div class="left">
            <img
              src="https://static.228.cn/upload/2020/09/07/AfterTreatment/1599446035579_m2e9-0.jpg"
            />
          </div>
          <div class="right">
            <p class="name">开心麻花</p>
            <p class="price">￥180-￥680</p>
          </div>
        </div>
        <div class="more">
          <p class="date">2020.09.22</p>
          <p class="address">海口湾</p>
          <span>></span>
        </div>
        <div class="notice">
          <h1>注意事项</h1>
          <div class="txt">
            a)演出详情仅供参考，具体信息以现场为准；
            <br />b)1.1米以下儿童谢绝入场(儿童专场除外)，1.1米以上儿童需持票入场；
            <br />c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。
            <br />d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。
          </div>
        </div>
        <div class="notice">
          <h1>演出详情</h1>
          <div class="txt">
            <div
              id="attentionShow"
              class="need-attention show-details show-notices-imgs"
              style="height: auto;"
            >
              <p style="text-indent:2em;">
                <strong>
                  <span style="color:#FF0000;">购票须知</span>
                </strong>
              </p>
              <p style="text-indent:2em;">演出票售出后不退不换！</p>
              <p style="text-indent:2em;">本场演出所有观众凭票入场！</p>
              <p style="text-indent:2em;">本剧院楼层不互通，抱小孩的观众务必为孩子购票时，与家长同一楼层座位！</p>
              <p style="text-indent:2em;">请妥善保管演出票，演出票是入场唯一凭证，如有遗失，无法通过任何途径入场！</p>
              <p style="text-indent:2em;">1.1米以下儿童谢绝入场（儿童专场除外），1.1米以上儿童照章购票，并对号入座！</p>
              <p style="text-indent:2em;">
                <strong>《窗前不止明月光》</strong>
              </p>
              <p style="text-indent:2em;">选举夜 风流案 骗子开派对</p>
              <p style="text-indent:2em;">
                <strong>剧情简介：</strong>
              </p>
              <p style="text-indent:2em;">一场“不可说”的偷情幽会，一具尸体横空出“窗”，这不是故事，是“事故”！</p>
              <p
                style="text-indent:2em;"
              >国会议员威利在和情人珍妮私会时，窗户上竟然惊现了一具尸体。威利不敢声张报警，吩咐私人秘书乔治处理，却想不到尸体背后藏着更大的阴谋……</p>
              <p style="text-indent:2em;">各路家属“闪现”出场，越帮越忙上演大混战！威利不断撒谎，乔治接招圆谎，眼看就要败露，这场闹剧将如何收场？</p>
              <p style="text-indent:2em;">*建议18岁以上观众入场观看</p>
              <p style="text-indent:2em;">
                <strong>爆笑打磨</strong>
              </p>
              <p style="text-indent:2em;">
                <strong>首轮演出“口碑护航”</strong>
              </p>
              <p
                style="text-indent:2em;"
              >“笑得无间歇”“笑到忘我”“麻花的包袱永远有下一个”……年初首轮演出后，观众评价保驾护航，成功升舱大剧场贺岁剧！不断打磨，必成精品，就等你来检验~</p>
              <p style="text-align: center; margin-bottom: 0px; margin-top: 0px;">
                <img style="width:100%;height:auto" />
              </p>
              <p style="text-indent: 2em; margin-top: 20px;">
                <strong>真香预警</strong>
              </p>
              <p style="text-indent:2em;">
                <strong>这不是故事，是“事故”！</strong>
              </p>
              <p
                style="text-indent:2em;"
              >私会小三、藏尸瞒报、还有各色职场潜规则玩到飞起……一个谎言接着一个，看一流精英如何干尽三流蠢事，疯狂一夜就此开启——18岁以下观众禁止入场！本剧车速180走起~</p>
              <p style="text-align: center; margin-bottom: 0px; margin-top: 0px;">
                <img style="width:100%;height:auto" />
              </p>
              <p style="text-indent: 2em; margin-top: 20px;">
                <strong>节奏大师</strong>
              </p>
              <p style="text-indent:2em;">
                <strong>话剧界公认的超强剧作</strong>
              </p>
              <p
                style="text-indent:2em;"
              >一个场景，剧情整整反转38次！关键道具“窗户”神助攻，堪称节奏大师。原剧本《窗户上的尸体》获戏剧界奥斯卡奖——劳伦斯·奥利弗最佳剧作奖，被誉为戏剧院校的表演试金石。</p>
              <p style="text-align: center; margin-bottom: 0px; margin-top: 0px;">
                <img style="width:100%;height:auto" />
              </p>
              <p style="text-indent: 2em; margin-top: 20px;">
                <strong>导演 &nbsp;魏玮</strong>
              </p>
              <p style="text-indent:2em;">
                <strong>开心麻花年底大戏御用导演</strong>
              </p>
              <p
                style="text-indent:2em;"
              >开心麻花创作团队核心成员，开心麻花年底大戏《二维码杀手》导演、编剧，开心麻花推荐音乐剧《时光旅行局意外事件》导演、编剧，复排《夏洛特烦恼》等多部麻花作品。2015年荣登春晚，参演第一、二季开心麻花团队《欢乐喜剧人》多部冠军作品，在《夏洛特烦恼》《李茶的姑妈》等经典舞台剧中饰演过“夏洛”、“黄沧海”各类不同角色。</p>
              <p style="text-align: center; margin-bottom: 0px; margin-top: 0px;">
                <img style="width:100%;height:auto" />
              </p>
              <p style="text-align: center; margin-top: 0px; margin-bottom: 0px;">
                <img style="width:100%;height:auto" />
              </p>
              <p style="text-indent: 2em; margin-top: 20px;">
                <strong>导演 &nbsp;刘钊</strong>
              </p>
              <p style="text-indent:2em;">
                <strong>新锐导演，才华横溢</strong>
              </p>
              <p
                style="text-indent:2em;"
              >国内新生代导演中的先锋人才。中戏科班毕业，编导演一体，将80后的“才”表现得十分彻底。拥有丰富的舞台剧、影视剧执导经验，荣获多项导演大奖。代表作《郑伯克段于鄢》《又到满山红叶时》《无人之境》《杜子春》广受好评。</p>
              <p style="text-align: center; margin-bottom: 0px; margin-top: 0px;">
                <img style="width:100%;height:auto" />
              </p>
              <p style="text-align: center; margin-top: 0px; margin-bottom: 0px;">
                <img style="width:100%;height:auto" />
              </p>
              <p style="text-indent: 2em; margin-top: 20px;">出品公司：天津风牛马文化传媒有限公司</p>
              <p style="text-indent:2em;">总制作人：王亮</p>
              <p style="text-indent:2em;">导演：魏玮 刘钊</p>
              <p style="text-indent:2em;">编剧：雷库内</p>
              <p style="text-indent:2em;">剧本改编：魏玮 刘钊 庄国辉</p>
              <p style="text-indent:2em;">制作总监：孙文岩</p>
              <p style="text-indent:2em;">艺术总监：洪晔</p>
              <p style="text-indent:2em;">营销总监：王亚欧</p>
              <p style="text-indent:2em;">执行制作人：张正婷</p>
              <p style="text-indent:2em;">舞蹈编导：芦莹</p>
              <p style="text-indent:2em;">舞美设计：刘启薇</p>
              <p style="text-indent:2em;">灯光设计：沙峰</p>
              <p style="text-indent:2em;">服装造型设计：李洁兰</p>
              <p style="text-indent:2em;">音效设计：牛建安</p>
              <p style="text-indent:2em;">海报设计：宋鹏</p>
              <p style="text-indent:2em;">营销策划：喻丽蕊</p>
            </div>
          </div>
        </div>
        <Foot></Foot>
      </div>
    </div>
    <div class="buy">
      <span class="iconfont">&#xe604;</span>
      <a href="javescript;">立即购买</a>
    </div>
  </div>
</template>

<script>
import { ShareSheet, Toast } from "vant";
import Foot from "@/components/Foot";
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  components: { Foot },
  computed: {
    get() {
      return this.$route.query;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
  mounted() {
    console.log(this.get);
  },
};
</script>

<style scoped lang='scss'>
.content {
  background: rgba(173, 171, 171, 0.1);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .wrap {
    flex: 1;
    .top {
      position: relative;
      padding-top: 30px;
      margin: 0 15px;
      width: calc(100% - 30px);
      height: 30px;
      span {
        text-align: center;
        height: 25px;
        color: gray;
      }
      .back {
        position: absolute;
        font-size: 30px;
        top: 28px;
        left: 10px;
      }
      .collect {
        position: absolute;
        font-size: 25px;
        right: 40px;
        top: 31px;
      }
      .share {
        position: absolute;
        font-size: 25px;
        right: 0px;
        top: 32px;
      }
    }
    .text {
      margin: 30px 20px 0;
      display: flex;
      .left {
        width: 120px;
        height: 160px;
        border-radius: 10px;
        img {
          width: 120px;
          height: 160px;
        }
      }
      .right {
        margin-left: 15px;
        width: calc(100% -135px);
        .name {
          height: 63px;
          line-height: 21px;
          font-size: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        .price {
          margin-top: 56px;
          font-weight: bold;
          font-size: 16px;
        }
      }
    }
    .more {
      margin: 0 20px;
      border-radius: 10px;
      padding: 10px;
      margin-top: 20px;
      background: #fff;
      position: relative;
      p {
        font-size: 14px;
        color: #5f646a;
        margin-bottom: 5px;
        width: calc(100% - 42px);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        margin-left: 10px;
      }

      span {
        position: absolute;
        top: 23px;
        right: 15px;
        transform: scaleY(1.7);
        color: red;
      }
    }
    .notice {
      background: rgba(173, 171, 171, 0.1);
      h1 {
        font-size: 22px;
        color: #000;
        padding: 16px 20px 15px 20px;
        font-weight: 800;
      }
      .txt {
        margin: 0 20px;
        line-height: 22px;
        letter-spacing: 2px;
        font-size: 14px;
        color: #7b8187;
      }
    }
  }
  .buy {
    height: 60px;
    width: 100%;
    line-height: 60px;
    display: flex;
    align-items: center;
    span {
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: red;
      font-size: 30px;
      margin-left: 8px;
      border-radius: 50%;
      box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
    }

    a {
      text-align: center;
      flex: 1;
      background: linear-gradient(to right, #ff7e6f, #ff2959);
      box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
      border-radius: 100px;
      height: 44px;
      line-height: 44px;
      font-size: 15px;
      margin: 8px 8px 8px 0;
      color: white;
    }
  }
}
</style>