<!--
 * @Description: 侧边栏
 * @Author: zhangxin
 * @Date: 2021-02-16 16:30:55
 * @LastEditTime: 2021-02-16 20:47:01
 * @LastEditors: zhangxin
-->
<template>
    <!-- 导航栏 -->
    <el-menu :router="true" background-color="#585858" text-color="#fff" active-text-color="#8CC540" :default-active="$route.path">
                <el-menu-item class="menu-item" :index="'/' + item.path"  v-for="item in navMenuList" :key="item.id">
                    <!-- 图标 -->
                    <i :class="item.icon" style="color:#F2F2F2;"></i>
                    <!-- 文本 -->
                    <span slot="title">{{ item.name }}</span>
                </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            // 当前激活导航页面
            activePath: '',
            // 导航菜单数组
            navMenuList: [
                {
                    id: '1',
                    name: '控制台',
                    icon: 'el-icon-menu',
                    path: ''
                },
                {
                    id: '2',
                    name: '查看',
                    icon: 'el-icon-view',
                    path: 'check'
                },
                {
                    id: '3',
                    name: '配置及工具',
                    icon: 'el-icon-setting',
                    path: 'setTools'
                },
                {
                    id: '4',
                    name: '监控',
                    icon: 'el-icon-monitor',
                    path: 'monitor'
                },
                {
                    id: '5',
                    name: '退出系统',
                    icon: 'el-icon-switch-button',
                    path: 'back'
                }

            ],
        }
    },
    methods: {
        //保存高亮链接
        saveNavPath() {
            console.log('this.$route.path' ,this.$route.path)
            this.activePath = this.$route.path;
        }
    },
    watch: {
        $route: "saveNavPath"
    }
}
</script>

<style scoped>
.menu-item {
    height: 90px;
    font-size: 20px;
    padding: 18px;
}
</style>