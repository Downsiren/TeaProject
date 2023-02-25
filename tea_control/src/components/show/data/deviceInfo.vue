<!--
 * @Description: 左侧设备信息
 * @Author: zhangxin
 * @Date: 2021-02-17 21:37:47
 * @LastEditTime: 2021-02-17 21:48:22
 * @LastEditors: zhangxin
-->
<template>
    <!-- 左侧设备栏 -->
      <div class="info-left">
        <p class="info-tit">设备运行故障/警告信息</p>
        <p class="count-info">{{ errorFirstDate }} - {{ errorLastDate }}</p>
        <p class="count-info">共产生{{ warnNum }}次警告，{{ errorNum }}次错误，共计{{ sumNum }}次</p>
        <div class="info-list">
          <ul>
            <li v-for="item in deviceList" :key="item.id">
              <span class="tit" v-if=" item.status == 'error' " :style="{background: '#18BA9A'}">{{ item.id }}</span>
              <span class="tit" v-else-if=" item.status == 'warn' " :style="{background: '#17D1C8'}">{{ item.id }}</span>
              <span class="tit" v-else :style="{background: '#2087C9'}">{{ item.id }}</span>
              <span>&nbsp;{{ item.deviceName }} &nbsp;</span>
              <span v-if=" item.status == 'error' " class="error-li">{{ item.statusDetail }}</span>
              <span v-else-if=" item.status == 'warn' " class="warn-li">{{ item.statusDetail }}</span>
              <span v-else>{{ item.statusDetail }}</span>
              <span class="time">&nbsp;发生在{{ item.time }}</span>
            </li> 
          </ul>
        </div>
      </div>
</template>

<script>
export default {
    data() {
      return {
        // 故障时间段
        // 开始日期
        errorFirstDate: '2017/12/10',
        // 最后日期
        errorLastDate: '2017/12/11',
        // 警告次数
        warnNum: '4',
        // 故障次数
        errorNum: '1',
        // 问题总次数
        sumNum : '5',
        // 设备信息数组
        deviceList: [
          {
              id: '1',
              deviceName: 'CNBJHD01JXQ',
              statusDetail: '温度异常',
              status: 'error',
              color: '#18BA9A',
              time: '2017/12/10 10:41'
          },
          {
              id: '2',
              deviceName: 'CNBJXC01HSI',
              statusDetail: '电压波动',
              status: 'warn',
              color: '#17D1C8',
              time: '2017/12/10 10:54'
          },
          {
              id: '3',
              deviceName: 'CNBJCY01MDA',
              statusDetail: '参数损坏',
              status: 'error',
              color: '#18BA9A',
              time: '2017/12/10 10:58'
          },
          {
              id: '4',
              deviceName: 'CNBJCY01MDA',
              statusDetail: '正常',
              status: 'normal',
              color: '#2087C9',
              time: '2017/12/10 11:20'
          },
        ],
      }
    },
}
</script>

<style scoped>

ul{
    list-style-type: none;
    padding: 0px;
}

  /* info */
    /* left */
.info {
    padding-top: 2px;
    padding-left: 20px;
    font-size: 20px;
}

.info-left{
    float: left;
}

.info-tit {
    margin-bottom: 20px;
    
    font-size: 22px;
}

/* 错误信息 */
.count-info {
    width: 100%;
    line-height: 10px;
    font-size: 18px;
    word-break: break-all;
}

/* 设备信息列表 */
.info-list {
    width: 100%;
    font-size: 18px;
    margin-top: 8px;
    align-items: baseline;
}

/* 设备信息横栏 */
.info-list li {
    line-height: 18px;
    padding-top: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid #F4F4F4;
}

/* 方块 */
.info-list li span:first-child {
    display: inline-block;
    width: 22px;
    height: 28px;
    line-height: 25px;
    padding-left: 8px;
    padding-top: 2px;
    color: white;
    border-radius: 4px;
    background-color: #2087C9;
    align-items: center;
}
/* 设备异常 */
.error-li {
    color: red;
}

/* 警告设备 */
.warn-li {
  color: #dddd02;
}


</style>