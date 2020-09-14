<template>
  <li>
    <img :src="`${'https://static.228.cn'}/${i.IMG}`" />
    <p class="name">{{i.VNAME}}</p>
    <p class="position">{{i.ADDRESS}}</p>
  </li>
</template>

<script>
export default {
  props: ["i"],
  data() {
    return {};
  },
};
</script>

<style scoped lang='scss'>
li {
  width: calc(50% - 7px);
  height: 180px;
  margin-bottom: 12px;
  img {
    border-radius: 10px;
    width: 100%;
    height: 140px;
  }
  .name {
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
    margin-top: 5px;
    color: #333;
    font-weight: bold;
  }
  .position {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 11px;
    color: #999;
  }
}
</style>