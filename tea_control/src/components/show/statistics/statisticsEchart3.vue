<!--
 * @Description: 统计图表
 * @Author: zhangxin
 * @Date: 2021-02-17 21:57:29
 * @LastEditTime: 2021-02-24 20:40:45
 * @LastEditors: zhangxin
-->
<template>
    <div class="StatisticEchart3">
    <div id="main3"></div>
    </div>
</template>

<script>
export default {
    name: "StatisticEchart3",
    methods:{
      drawChart3() {
        var myEchart3 = this.$echarts.init(document.getElementById("main3"));
        let option = {
                title: {
                    text: '蒸发量和降雨量',
                    subtext: '一周'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['蒸发量', '降雨量']
                },
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '蒸发量',
                        type: 'bar',
                        data: [2.0 ,7.0, 23.2, 25.6, 76.7, 135.6, 162.2],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值', value:162.2},
                                {type: 'min', name: '最小值', value:2.0}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name: '降雨量',
                        type: 'bar',
                        data: [2.6, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2],
                        markPoint: {
                            data: [
                                {name: '周最高', value: 182.2, xAxis: 6, yAxis: 183},
                                {name: '周最低', value: 2.6, xAxis: 0, yAxis: 3}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
        };
                
            
    
        myEchart3.setOption(option);
      }
    },
    mounted() {
        this.drawChart3();
          
    }
}
</script>

<style scoped>
#main3 {
    /* display: inline; */
    width: 100%;
    height:450px;
  /* margin: auto; */
  /* margin-top: 50px; */
}

.StatisticEchart3 {
  width: 100%;
  height:100%;

}


/* #canvas {
  width: 480px;
} */
</style>