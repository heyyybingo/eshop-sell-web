<template>
  <div class="eshop-types">
     <table>
         <tbody>
             <tr>
                 <th>类型</th>
                 <td>
                     <span>类型1</span>
                     <span>类型2</span>
                     <span>类型3</span>
                 </td>
             </tr>
             <tr>
                 <th>类型</th>
                 <td>
                     <span>类型1</span>
                     <span>类型2</span>
                     <span>类型3</span>
                 </td>
             </tr>
         </tbody>
     </table>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
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
                text-align: center;
            }
            &>td{
                text-align: left;
                &>span{
                    padding:@eshop-content-pad-10;
                    margin-right:10px;
                    cursor:pointer;
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
