<!--
 * @Description: 统计模块
 * @Author: zhangxin
 * @Date: 2021-02-16 17:27:03
 * @LastEditTime: 2021-02-16 17:30:35
 * @LastEditors: zhangxin
-->
<template>
    <div>
        
        <!-- title -->
        <div class="body-header">
            <span>·</span>
            <!-- &nbsp;空格 -->
            <span>&nbsp;统计模块</span>
        </div>

        <!-- 统计数据模块 -->
        <el-row :gutter="18">
            <el-col :span="12">
                <div>
                    <StatisticEchart1/>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <StatisticEchart2/>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <StatisticEchart3/>
                </div>
            </el-col>
            <el-col :span="12"><div></div></el-col>
        </el-row>




        

    </div>
</template>

<script>
// 引入组件
import StatisticEchart1 from '../statistics/statisticsEchart1'
import StatisticEchart2 from '../statistics/statisticsEchart2'
import StatisticEchart3 from '../statistics/statisticsEchart3'

export default {
    components: {
     StatisticEchart1,
     StatisticEchart2,
     StatisticEchart3,
  },
  data() {
      return {
          
      }
  }
}
</script>

<style scoped>
/* title */
.body-header {
    height: 45px;
    padding-top: 10px;
    padding-left: 15px;
    color: #67676F;
    background-color: #F4F4F4;
}

.body-header span {
    font-size: 22px;
}

/* 设备信息前方块 */
.body-header span:first-child {
    display: inline-block;
    padding: 3px 12px;
    margin-right: 0.5px;
    color: #ffffff;
    background-color: #BE81F7;
    border-radius: 4px;
}

.el-row {
    margin-top: 20px;
    margin-bottom: 20px;
    
 }
 .el-row :last-child {
      margin-bottom: 0;
}

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

/* 图表宫格设置
.tubiao {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 25px;
} */

</style>