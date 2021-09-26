<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal">
              <div
                class="form-group"
                v-for="(item, index) in form"
                :key="index"
              >
                <label class="col-sm-2 control-label">{{ item.label }}:</label>
                <div class="col-sm-10 col-xs-12" v-if="index < 3">
                  <input
                    type="text"
                    class="form-control"
                    :placeholder="item.placeholder"
                    v-model="item.inputText"
                  />
                </div>
                <div v-else class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="content"
                    rows="8"
                    placeholder="请输入内容"
                    v-model="item.inputText"
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <span @click="submit" class="btn btn-default btn-block"
                    >提交</span
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <p class="text">注：请正确填写信息，我们将在24小时内回复。</p>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { WOW } from 'wowjs'
// import BMap from "BMap";
import { Dialog } from "vant";
import { checkEmail, checkPhone } from "../utils/checkData";
export default {
  name: "ContactUs",
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },

      form: [
        {
          label: "姓名",
          placeholder: "请输入名字",
          inputText: "",
        },
        {
          label: "邮箱",
          placeholder: "请输入邮箱",
          inputText: "",
        },
        {
          label: "电话",
          placeholder: "请输入电话",
          inputText: "",
        },
        {
          label: "内容",
          placeholder: "请输入内容",
          inputText: "",
        },
      ],
    };
  },

  created() {
    // this.initData();
  },
  mounted() {
    // var map = new BMap.Map("map"); // 创建地图实例
    // var point = new BMap.Point(116.301841,40.156506); // 创建点坐标
    // map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    // var marker = new BMap.Marker(point); // 创建标注
    // map.addOverlay(marker); // 将标注添加到地图中
    // var opts = {
    //   width: 50, // 信息窗口宽度
    //   height: 10, // 信息窗口高度
    //   title: "黄元公寓" // 信息窗口标题
    // };
    // var infoWindow = new BMap.InfoWindow(
    //   "我的家",
    //   opts
    // ); // 创建信息窗口对象
    // map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    // var wow = new WOW();
    // wow.init();
  },

  methods: {
    initData() {},
    async submit() {
      let cemail = checkEmail(this.form[1].inputText);
      let cphone = checkPhone(this.form[2].inputText);

      if (!cemail || !cphone) {
        Dialog({ message: "请输入正确的邮箱或电话号码。" });
        return;
      }

      let d = {
        name: this.form[0].inputText,
        email: this.form[1].inputText,
        phone: this.form[2].inputText,
        content: this.form[3].inputText,
      };
      let res = await this.$post("/ow/contactus", d);
      this.form.forEach((item) => {
        item.inputText = "";
      });
      Dialog({ message: "消息已提交，我们将在一小时内回复您。" });
    },
  },
};
</script>
<style scoped>
.form {
  /* width: 0vw; */
  /* padding: 50px; */
}
.text {
  font-weight: 100;
  font-size: 12px;
}
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>

