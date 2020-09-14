<template>
  <swiper class="swiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import "@/swipe/swiper.animate.min.js";
import "@/swipe/js.js";

export default {
  name: "swiper-example-autoplay",
  title: "Autoplay",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      // swiperOption: {
      //   spaceBetween: 30,
      //   centeredSlides: true,
      //   observe: true,
      //   observeParents: false,
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   },
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
      // },
    };
  },
  async mounted() {
    //这里用到的http.get是在下自己写的一个小方法，你可以换成ajax / fetch什么的
    new Swiper(".swiper-container", {
      //swiper再mounted中进行初始化
      //具体设置参加swiper官网api，这里是就是把自己随便设置的部分贴上来了
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      observeParents: false, //注意这里！！
      observer: true, //也要注意这里！！
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/swipe/base.scss";
</style>