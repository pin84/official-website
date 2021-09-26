<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
    <ImageBox :imgBoxStyle='imgBoxStyle' :imgURL='require("@/assets/img/logo_black.png")'  />
      <!-- <img src="@/assets/img/logo_black.png" alt="logo图"> -->
    </div>
    <p class="title">柳州汉水软件科技有限公司</p>
    <p class="address_tel_fax">
      <span>地址：广西柳州融水民族大道180号7栋2单元104</span>
      <br />
      <a href="tel:18977256053">Tel：18977256053</a>
      <!-- <span>Fax：8888-88888888</span> -->
    </p>
    <p class="email_wx">
      <a href="mailto:qp1984@live.com">邮箱：qp1984@live.com</a>
      <!-- <span>公司微信号：软水软件</span> -->
    </p>
    <p class="copy">Copyright &copy; 2018 - 2019 柳州汉水软件科技有限公司</p>
  </div>
</template>
<script>
import ImageBox from './ImageBox.vue'
export default {
  name: "Footer",
  data() {
    return {
      imgBoxStyle:{
        width:'50px',
        height:'50px'
      }
    };
  },
  components:{
    ImageBox
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 50px auto 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

