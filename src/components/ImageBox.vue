<template>
  <!-- <div class="img-wrapper"> -->
    <div :style="imgBoxStyle" class="img-box">
      <img :src="imgURL" alt="" />
    </div>

    <!-- <div class="icon-box" @click="$emit('closeImgBox')">
      <i class="iconfont iconguanbi"></i>
    </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    imgBoxStyle: {
      type: Object,
      default: () => {
        return {
          width: "40vw",
          height: "40vw",
          // border: "1px solid red",
        };
      },
    },
    imgURL: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
// .img-wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
  .img-box {
    overflow: hidden;
    // border:1px solid red;
    display: flex;
    align-items: center;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .icon-box {
    padding:0 5px;
    .iconguanbi {
      display: inline-block;
      font-size: 16px;
    }
  }
// }
</style>