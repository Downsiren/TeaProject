<!--
 * @Description: 统计图表
 * @Author: zhangxin
 * @Date: 2021-02-17 21:57:29
 * @LastEditTime: 2021-02-24 20:40:45
 * @LastEditors: zhangxin
-->
<template>
    <div class="StatisticEchart1">
    <div id="main1"></div>
    </div>
</template>

<script>
export default {
    name: "StatisticEchart1",
    methods:{
      drawChart1() {
        var myEchart1 = this.$echarts.init(document.getElementById("main1"));
        let option = {
            title: {
              text: '温度传感器记录数据',
              subtext: '一周'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['最高气温', '最低气温']
          },
          
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} °C'
              }
          },
          series: [
              {
                  name: '最高气温',
                  type: 'line',
                  data: [10, 11, 13, 11, 12, 12, 9],
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name: '最低气温',
                  type: 'line',
                  data: [1, -2, 2, 5, 3, 2, 0],
                  markPoint: {
                      data: [
                          {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'},
                          [{
                              symbol: 'none',
                              x: '90%',
                              yAxis: 'max'
                          }, {
                              symbol: 'circle',
                              label: {
                                  position: 'start',
                                  formatter: '最大值'
                              },
                              type: 'max',
                              name: '最高点'
                          }]
                      ]
                  }
              }
          ]
        };
        myEchart1.setOption(option);
      }
    },

    mounted() {
        this.drawChart1();
    }
}
</script>

<style scoped>
#main1 {
    /* display: inline; */
    width: 100%;
    height:450px;
    /* left: 50px; */
  /* margin: auto; */
  /* margin-top: 50px; */
}

.StatisticEchart1 {
  /* display: inline; */
  width: 100%;
  height:100%;
}


/* #canvas {
  width: 480px;
} */
</style>