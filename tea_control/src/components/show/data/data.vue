<!--
 * @Description: 数据模块
 * @Author: zhangxin
 * @Date: 2021-02-16 17:24:44
 * @LastEditTime: 2021-02-24 19:15:47
 * @LastEditors: zhangxin
-->
<template>
    <!-- 左侧设备栏 -->
    <div class="body-wrapper">
    <div class="body-header">
      <span>·</span>
      <!-- &nbsp;空格 -->
      <span>&nbsp;设备信息</span>
    </div>
    <div class="info">

      <!-- 左侧设备信息列表 -->
        <DeviceInfo />
        
      <!-- 引入echart组件 -->
        <DataEchart />
       
      <!-- 右侧浮动栏 -->
       <div class="info-right">
       
        <div class="i-r-bottom-device">
          <ul class="device-info">
            <li class="de-if-tit">
              <span><b>联网设备</b></span>
              <span style="font-size:14px;">共54台</span><br>
              <span style="font-size:14px;">联机：53台</span>
              <span style="font-size:14px;">脱机1台</span>
            </li>
            <li class="de-if-con">
              <i class="iconfont icon-anquan left" :style="{color:'#22AE9A'}"></i>
              <p><b :style="{color:'#22AE9A'}">正常设备</b></p>
              <p>当前设备工作正常，共53台，警告信息涉及5台设备</p>
            </li>
            <li class="de-if-con">
              <i class="iconfont icon-shandian left"></i>
              <p><b>待检设备</b></p>
              <p>需要停机检查的设备共1台</p>
            </li>
          </ul>
        </div>
        <!-- background-color:'#9DD443' -->
        <div class="i-r-bot-btn">
          <button :style="{background:'#9DD443','margin-right':'.2rem'}">查看运行数据</button>
          <button :style="{background:'#FED667'}">设备检查</button>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
// 引入组件
import DeviceInfo from '../data/deviceInfo'
import DataEchart from '../data/dataEchart'

export default {
   components: {
     DeviceInfo,
     DataEchart
  },
    data() {
      return {
        
      }
    },
   
}
</script>

<style scoped>
/* 去掉列表的点 */
ul{
    list-style-type: none;
    padding: 0px;
}


/* 设备信息 */
.body-wrapper {
    color: #67676F;
}

.body-header {
    height: 45px;
    padding-top: 10px;
    padding-left: 15px;
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
    background-color: #8CC540;
    border-radius: 4px;
}

  /* info */
    /* left */
.info {
    padding-top: 2px;
    padding-left: 20px;
    font-size: 20px;
}


/* right */
.info-right {
  /* 调整右侧浮动栏位置 */
  position: relative;
  top: -330px;
    float: right;
    /* 右侧边距 */
    margin-right: 3px;
}

.de-if-con i{
  width: 50px;
  height: 50px;
  font-size: 5px;
  margin-right: 3px;
}

  .i-r-bottom-device{
    width: 450px;
    height: 100%;
    margin-top: 5px;
    box-sizing: border-box;
    background-color: #FAFAFA;
    border: 1px solid #EBEBEB;
  }
  .i-r-bottom-device .device-info{
    font-size: 18px;
    font-weight: 400;
  }
  .i-r-bottom-device .device-info > li{
    margin-bottom: 4px;
  }
  .i-r-bottom-device .device-info b{
    font-size: 18px;
  }
  .device-info li.de-if-tit{
    margin-bottom: 3px;
  }
  .de-if-tit span{
    margin-right: 3px;
  }
  .i-r-bot-btn{
    margin-top: 3px;
    float: right;
  }
  li.de-if-con p{
    font-size: 16px;
    margin-bottom: 2px;
  }
  /* 按钮 */
  .i-r-bot-btn button{
    outline: none;
    border: none;
    padding: 10px;
    width: 120px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }

</style>