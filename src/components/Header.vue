<template>
  <div class="content">
    <div class="back" @click="back()"><</div>
    <div class="select">
      <slot>选择演出城市</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  components: {},

  created() {},

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
  display: flex;
  border-bottom: 1px solid black;
  .back {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: red;
    transform: scaleY(1.7);
  }
  .select {
    flex: 1;
    padding-right: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 17px;
  }
}
</style>