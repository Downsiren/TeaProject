<!--
 * @Description: 控制面板框架
 * @Author: zhangxin
 * @Date: 2021-02-15 21:02:58
 * @LastEditTime: 2021-02-17 15:15:59
 * @LastEditors: zhangxin
-->
<template>
    <!-- 布局容器 -->
    <el-container class="all-container">
        <!-- 头部区域 -->
        <el-header height="130px">
            <!-- 头部组件 -->
            <ControlHeader />
        </el-header>
        <!-- 侧边栏 -->
        <el-container>
            <!-- <el-aside width="250px"> -->
                <!-- 侧边栏组件 -->
                <!-- <ControlAside /> -->
            <!-- </el-aside> -->
            <!-- 内容区域 -->
            <el-main>
                <!-- 内容组件 -->
                <!-- <ControlBody /> -->
                <!-- 路由占位符 --> 
                <router-view></router-view> 
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// 引入封装组件
import ControlHeader from '../components/main/header'
//import ControlAside from '../components/main/aside'
// import ControlBody from '../components/main/body'

export default {
    name: 'ControlBoard',
    components: {
   // ControlAside,
    ControlHeader,
    // ControlBody
  }
}
</script>

<style scoped>
/* 头部栏 */
.el-header{
    padding: 0;
}

/* 布局容器 */
.all-container {
    height: 100%;
}

.el-aside {
    background-color: #585858;
}

</style>