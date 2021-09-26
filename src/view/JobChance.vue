<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container">
      <div class="JobChance-container wow pulse">
        <h2>node工程师</h2>
        <p>岗位职责</p>
        <ol>
          <li>参与nodejs服务的功能设计和研发工作；</li>
          <li>参与功能和技术预研；</li>
          <li>保障服务性能，维护服务功能；</li>
          <li>维护功能的单元测试；</li>
          <li>维护系统的设计文档；</li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>
            javascript编程2年以上，且nodejs高性能服务开发经验1年以上，熟练掌握es6、es7语法；
          </li>
          <li>熟悉typescript，熟练掌握接口、类型约束等相关功能；</li>
          <li>熟悉设计模式，能够熟练使用类之间关系实现业务功能；</li>
          <li>熟悉nodejs的事件机制、常见模块的使用方法；</li>
          <li>全用github管理代码</li>
          <li>了解并掌握http、websocket等常用通信协议；</li>
          <li>了解msql的使用，并掌握mongoDB、redis其中一种数据库的使用；</li>
          <li>
            要求有较强的逻辑思维和数据思维，有良好的解决问题的能力，能够独立承担复杂功能的开发工作，具有团队管理经验者优先；
          </li>
          <li>
            远程办公，无需坐班。
          </li>
        </ol>
        <button
          @click="$router.push('contactus')"
          class="center-block btn btn-warning btn-lg"
        >
          联系我们
        </button>
      </div>
    </div>
    <!-- <div class="nodata">
      无
    </div> -->
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "JobChance",
  data() {
    return {};
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
};
</script>


<style   scoped>
.nodata {
  height: 500px;
}
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}
.JobChance-container h2 {
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p {
  font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}
.JobChance-container ol {
  list-style-type: decimal;
  padding-left: 30px;
}
.JobChance-container ol > li {
  font-size: 14px;
  line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>

