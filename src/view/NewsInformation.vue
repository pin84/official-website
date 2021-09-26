<template>
  <div id="NewsInformation">
    <div class="container">
      <!-- <div class="container text-center">
        <h3>新闻动态</h3>
        <p style="color: #b2b2b2">Company News</p>
      </div> -->
      <div class="nav container text-center">
        <span
          @click="changeNewList(index)"
          class="pointer"
          :class="{ active: index == curNavIndex }"
          v-for="(item, index) in nav"
          :key="index"
          >{{ item.name }}</span
        >
      </div>
      <ul class="news-container container-fuild">
        <li v-for="(item, index) in newsList" :key="index" class="wow fadeIn">
          <div class="content">
            <p>{{ item.title }}</p>
            <p>{{ item.introduce }}</p>
          </div>
          <div class="time">
            <p>{{ item.date }}</p>
            <span>{{ item.year }}</span>
          </div>
          <div class="circle">
            <img src="../assets/img/circle.png" />
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>
      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "NewsInformation",
  data() {
    return {
      curNavIndex: 0,
      nav: [{ name: "公司新闻" }, { name: "行业新闻" }],
      newsList: [],
      companyNews: [
        {
          id: "001a",
          title: "与融水县中医院达成合作",
          introduce:
            "8月，汉水软件正式再与县中医院开展合作，负责医院公众号-’智慧医院‘的开发工作。",
          date: "08-01",
          year: "2020",
        },
      ],
      industryNews: [
        {
          id: "001",
          title: "世界上第一位程序员 艾达·洛夫莱斯",
          introduce:
            "艾达被认为是世界上的第一位程序员",
          date: "05-24",
          year: "2019",
        },
      ],
    };
  },

  created(){
    this.changeNewList(this.curNavIndex)
  },
  mounted() {
    var wow = new WOW();
    wow.init();
  },
  methods: {
    changeNewList(index) {
      this.curNavIndex = index
      this.newsList = index == 0 ? this.companyNews : this.industryNews;
    },
  },
};
</script>
<style lang='scss' scoped>
#NewsInformation{
  min-height: 50vh;
}
.nav {
  margin: 20px 0;
}
.nav > span {
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}
.nav > span.active {
  color: #1e73be;
  border-color: #1e73be;
}
.nav > span:hover {
  color: #1e73be;
  border-color: #1e73be;
}
.news-container {
  overflow: hidden;
  margin-bottom: 0;
}
.news-container > li {
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.news-container > li:hover {
  color: #1e73be;
  border: 1px solid #1e73be;
  cursor: pointer;
}
.news-container > li:nth-of-type(2n) {
  float: right;
  text-align: left;
}
.news-container > li > .content {
  width: 60%;
  float: left;
  padding: 20px 0;
}
.news-container > li > .time {
  width: 20%;
  float: left;
  padding: 10px 0;
}
.news-container > li > .time > p {
  font-size: 30px;
  margin: 5px 0;
}
.news-container > li > .circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.news-container > li > .circle > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.news-container > li > .circle > i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.news-container > li:nth-of-type(2n) > .content {
  float: right;
}
.news-container > li:nth-of-type(2n) > .time {
  float: right;
}
.news-container > li:nth-of-type(2n) > .circle {
  float: right;
}
.news-container > li:nth-of-type(1) > .circle > i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.more {
  font-size: 25px;
  color: #707070;
}
.more > i {
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .news-container > li {
    width: 100%;
  }
  .news-container > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container > li > .time {
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container > li > .circle {
    display: none;
  }
}
</style>

