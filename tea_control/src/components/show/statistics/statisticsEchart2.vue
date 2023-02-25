<!--
 * @Description: 统计图表
 * @Author: zhangxin
 * @Date: 2021-02-17 21:57:29
 * @LastEditTime: 2021-02-24 20:40:45
 * @LastEditors: zhangxin
-->
<template>
    <div class="StatisticEchart2">
    <div id="main2"></div>
    </div>
</template>

<script>
export default {
    name: "StatisticEchart2",
    methods:{
      drawChart2() {
        var myEchart2 = this.$echarts.init(document.getElementById("main2"));
        let option = {
                title: {
                    text: '光照强度',
                    subtext: '一天'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['光照lux']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['10点', '11点', '12点', '13点', '14点', '15点', '16点']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} lux'
                    }
                },
                series: [{
                    name: '光照lux',
                    data: [820, 932, 200, 934, 1290, 1330, 1320],
                    type: 'line',
                    symbol: 'triangle',
                    symbolSize: 20,
                    lineStyle: {
                        color: '#5470C6',
                        width: 4,
                        type: 'dashed'
                    },
                    itemStyle: {
                        borderWidth: 3,
                        borderColor: '#EE6666',
                        color: 'yellow'
                    }
                }]
        };
                
            
    
        myEchart2.setOption(option);
      }
    },
    mounted() {
        this.drawChart2();
          
    }
}
</script>

<style scoped>
#main2 {
    /* display: inline; */
    width: 100%;
    height:450px;
  /* margin: auto; */
  /* margin-top: 50px; */
}

.StatisticEchart2 {
  width: 100%;
  height:100%;

}


/* #canvas {
  width: 480px;
} */
</style>