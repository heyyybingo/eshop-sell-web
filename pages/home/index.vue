<template>
  <div class="eshop-home">
    <div >
      <div class="eshop-home-carousel">
        <a-carousel >
          <img src="~/assets/images/other/img11.png">
          <img src="~/assets/images/other/img12.png">
          <img src="~/assets/images/other/img13.png">
        </a-carousel>
    </div>
    </div>
    <div class="eshop-home-main">

      <div class="eshop-home-list">
        <HorizontalList/>
      </div>
      <div class="eshop-home-activity">
        <div class="eshop-home-title">
            <h1>专属活动</h1>
            <h3>副标题</h3>
        </div>

        <Activity/>
      </div>

      <div class="eshop-home-recommend">
        <div class="eshop-home-title">
            <h1>专属活动</h1>
            <h3>副标题</h3>
        </div>
        <Recommend/>
      </div>

      <div class="eshop-home-brand">
        <div class="eshop-home-title">
            <h1>专属活动</h1>
            <h3>副标题</h3>
        </div>
        
      </div>
      <div class="eshop-home-brand">

      </div>

    </div>
  </div>
</template>

<script>
import HorizontalList from '~/components/home/horizontalList.vue'
import Activity from '~/components/home/activity.vue'
import Recommend from '~/components/home/recommend.vue'
export default {
  name: 'Hello',
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {
    HorizontalList,
    Activity,
    Recommend
  },
};
</script>

<style lang="less" >
.eshop-home{
  width:100%;


  &-carousel{
    // height:100%;
    // .ant-carousel{
    //   height:100%;
    // }
    // .slick-slider{
    //   height:100%;
    // }
    .ant-carousel .slick-dots li button{
      width:22px;
      height:8px;
    }
    .ant-carousel .slick-dots li.slick-active button{
      background-color: #c78a49;
    }
  }
  &-main{
    max-width: 1440px;
    margin:0 auto;

    
  }
  &-list{
    height:400px;
  }
  &-title{
    text-align: center;
    &>h1{
      font-weight: 600;
    }
    &>h3{
      color:#666666;
    }
  }
  
}

</style>
