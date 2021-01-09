<template>
  <div class="eshop-types">
     <table>
         <tbody>
             <tr>
                 <th>品牌</th>
                 <td>

                     <span :key="i" v-for="(item,i) in brand" @click="brandChoose(item)" :class="{active:brandSelectedMap.get(item[itemKey])}" >{{item.brand}}</span>
                     <!-- <span>类型1</span>
                     <span>类型2</span>
                     <span>类型3</span> -->
                 </td>
             </tr>
             <tr>
                 <th>类别</th>
                 <td>
                     <span :key="i" v-for="(item,i) in types" @click="typesChoose(item)" :class="{active:typesSelectedMap.get(item[itemKey])}" >{{item.type}}</span>
                     <!-- <span class="active">类型1</span>
                     <span>类型2</span>
                     <span>类型3</span> -->
                 </td>
             </tr>
         </tbody>
     </table>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props:['itemKey','brand','brandSelectedKeys','types','typesSelectedKeys'],
  data() {
    return {
        // brandSelectedMap:new Map(),
        // typeSelectedMap:new Map()
    };
  },
  computed: {
       brandSelectedMap:function(){
           const itemKey=this.itemKey
           const brandSelectedKeys=this.brandSelectedKeys;
           let bmap=new Map(brandSelectedKeys.map((item)=>[item,true]))
           return bmap;
       },
       typesSelectedMap:function(){
           const itemKey=this.itemKey
           const typesSelectedKeys=this.typesSelectedKeys;
           let tmap=new Map(typesSelectedKeys.map((item)=>[item,true]));
           return tmap;
       }
  },
  created() {
      console.log("typesCreated")
      console.log(this.brand)
  },
  mounted() {},
  beforeUpdate(){
    //   console.log("typeUpdated")
    //   console.log(this.brand)
    //   this.generate();
  },
//   updated(){
//     console.log("typeUpdated")
//     console.log(this.brand)
    
//   },
  methods:{
    //   generate:function(){
    //     const itemKey=this.itemKey
    //     const brandSelectedKeys=this.brandSelectedKeys;
    //     const typesSelectedKeys=this.typesSelectedKeys;
    //     console.log(brandSelectedKeys,typesSelectedKeys)
    //     let bmap=new Map(brandSelectedKeys.map((item)=>[item[itemKey],true]))
    //     let tmap=new Map(typesSelectedKeys.map((item)=>[item[itemKey],true]));
    //     this.brandSelectedMap=bmap;
    //     this.typesSelectedKeys=tmap;
    //   },
      brandChoose:function(item){
          const brand=this.brand
          const itemKey=this.itemKey;

          const brandSelectedMap=this.brandSelectedMap;
          
          const key=item[itemKey];

          if(brandSelectedMap.get(key)){
              brandSelectedMap.delete(key)
          }else{
              brandSelectedMap.set(key,true)
          }
          
          this.$emit('brandChange',[...brandSelectedMap.keys()],brand.filter((item)=>brandSelectedMap.get(item[key])))
      },

      typesChoose:function(item){
          const types=this.types
          const itemKey=this.itemKey;

          const typesSelectedMap=this.typesSelectedMap;
          
          const key=item[itemKey];

          if(typesSelectedMap.get(key)){
              typesSelectedMap.delete(key)
          }else{
              typesSelectedMap.set(key,true)
          }
          
          this.$emit('typesChange',[...typesSelectedMap.keys()],types.filter((item)=>typesSelectedMap.get(item[key])))
      }
  },
  components: {},
};
</script>

<style lang="less" scoped>
.eshop-types{
    &>table{
        width:100%;
        border-collapse: collapse;
        tr{
            height:@eshop-row-height;
            &>th{
                width: 200px;
                text-align: center;
            }
            &>td{
                text-align: left;
                &>span{
                    display: inline-block;
                    padding:@eshop-content-pad-10;
                    margin-right:10px;
                    margin-left:10px;
                    user-select: none;
                    cursor:pointer;
                }
                &>.active{
                    background-color:#c78a49;
                    color:#ffffff;
                    border-radius:4px;
                }
            }
        }
        tr:nth-child(even){
            background-color: @eshop-bg-grey;
        }
    }
    
    &>table,&>table tr th,&>table tr td { border:1px solid @eshop-sep-grey; }
}
</style>
