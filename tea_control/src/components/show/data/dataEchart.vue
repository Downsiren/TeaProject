<!--
 * @Description: 数据图表
 * @Author: zhangxin
 * @Date: 2021-02-17 21:57:29
 * @LastEditTime: 2021-02-24 20:40:45
 * @LastEditors: zhangxin
-->
<template>
    <div class="DataEchart">
    <div id="main"></div>
    </div>
</template>

<script>
export default {
    name: "EchartPractice",
    methods:{
      drawChart() {
        var myEchart = this.$echarts.init(document.getElementById("main"));
        let option = {
          title:{
            // 标题
            text:"设备运行时间"
          },
          // 提示框组件
          tooltip:{},
          // 图例
          legend:{
            data:["时长"]
          },
          // x轴
          xAxis: [
            {
              // 坐标轴类型 类目轴 离散数据
              type: 'category', 
              data: ["CNBJHD01J","CNBJXC01H","CNBJCY01M","CNBJCY01MD"],
              // 解决间隔显示
              axisTick: {
                alignWithLabel: true
               },
              //  该属性设置成0则表示强制显示所有标签，设置为1的话，隔一个标签显示一个标签，以此类推。
              axisLabel: {
                interval:0 
              }
            }
          ],
          // y轴
          yAxis:{},
          // series系列列表，每个系列通过type决定自己的图表类型
          series:[{
            name:'时长',
            type:"bar",
            // 系列中的数据内容数组
            data:[50,60,45,30,]
          }]
        };
        myEchart.setOption(option);
      }
    },
    mounted() {
        this.drawChart();
          
    }
}
</script>

<style scoped>
#main {
  width: 500px;
  height:350px;
  left: 50px;
  /* margin: auto; */
  margin-top: 50px;
}

.DataEchart {
  width: 500px;
  left: 465px;
  position: relative;
}

/* #canvas {
  width: 480px;
} */
</style>