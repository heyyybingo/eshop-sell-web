<template>
  <div class="eshop-home">
    <div >
      <div class="eshop-home-carousel">
        <a-carousel >
          <img v-for="(item,index) in bannerImgs" :key="index" :src="item?item:normal">
          <!-- <img src="~/assets/images/other/img12.png">
          <img src="~/assets/images/other/img13.png"> -->
        </a-carousel>
    </div>
    </div>
    <div class="eshop-home-main">

      <div class="eshop-home-list">
        <HorizontalList :productList="recommendList"/>
      </div>
      <div v-for="(activity) in activities" :key="activity.id" class="eshop-home-activity">
        <div class="eshop-home-title">
            <h1>{{activity.title}}</h1>
            <!-- <h3>副标题</h3> -->
        </div>

        <Activity :productList="activity.productList" :imgs="[]"/>
      </div>

      <!-- <div class="eshop-home-recommend">
        <div class="eshop-home-title">
            <h1>专属活动</h1>
            <h3>副标题</h3>
        </div>
        <Recommend/>
      </div> -->

      <!-- <div class="eshop-home-brand">
        <div class="eshop-home-title">
            <h1>专属活动</h1>
            <h3>副标题</h3>
        </div>
        
      </div>
      <div class="eshop-home-brand">
        <Activity :imgs="[0,1,2,3]"/>
      </div> -->

    </div>
  </div>
</template>

<script>
import normal from '~/assets/images/other/img11.png'
import HorizontalList from '~/components/home/horizontalList.vue'
import Activity from '~/components/home/activity.vue'
import Recommend from '~/components/home/recommend.vue'
export default {
  name: 'Hello',
  data() {
    return {
      banner:null,
      recommendList:[],
      activities:[],
      normal
    };
  },
  computed: {
    bannerImgs:function(){
      return this.activities.map((item)=>item.avator?item.avator:'')
    }
  },
  created() {
      this.refresh();
  },
  mounted() {},
  methods: {
    refresh:async function(){
      try{
        let bannerRes=await this.$axios.get("/banner/getall");
      console.log(bannerRes);
      let recRes=await this.$axios.get("/recommend/getall")
      console.log(recRes)
      if(bannerRes&&bannerRes.data.data&&recRes&&recRes.data.data){
        this.activities=bannerRes.data.data;
        this.recommendList=recRes.data.data;
      }
      }catch(err){
        console.log(err);
        this.$message.error('获取首页信息失败')
      }finally{

      }
    }
  },
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
  margin-top:@eshop-header-height;

  &-carousel{
    // height:100%;
    // .ant-carousel{
    //   height:100%;
    // }
    // .slick-slider{
    //   height:100%;
    // }
    .ant-carousel .slick-track {
      height:calc(100vw / 2);
    }
    .ant-carousel .slick-slide img{
        height:calc(100vw / 2);
    }
    // .ant-carousel>img{
    //   width:100vw;
     
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
    max-width: @eshop-max-content;
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
