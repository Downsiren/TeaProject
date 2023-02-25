<!--
 * @Description: 主页
 * @Author: zhangxin
 * @Date: 2021-01-29 16:12:13
 * @LastEditTime: 2021-02-06 22:40:21
 * @LastEditors: zhangxin
-->
<template>
    <el-container class="home-container" >
        <!-- 头部区域 -->
        <el-header height="110px" >
            <div >
               <img src="../assets/title.png" alt="" class="title-img">
               <span><font  face=华文行楷 color=#336699>茶叶溯源系统</font></span>
            </div> 
            <!-- 用户名 -->
            <!-- 未登录就显示登录注册，登录显示用户名和退出 -->
            <div>
              <i class="el-icon-user-solid user"> {{ username }} </i>   
              <el-button type="info" @click="logout">退出</el-button>    
            </div>              
           
        </el-header>
        <!-- 页面主体区域 -->
        <el-container direction="vertical">
             <!-- 导航栏 -->
                <el-menu :router="true" class="el-menu-demo" mode="horizontal" background-color="#545c64"
                text-color="#fff" active-text-color="#409EFF" :default-active="$route.path">
                   <!-- 导航栏菜单区域 -->
                   <!-- 二级菜单 -->
                    <el-menu-item :index="'/' + item.path" v-for="item in menulist" :key="item.id" @click="saveNavPath()">
                    {{ item.authName }}
                    </el-menu-item>    
                </el-menu>
                
            <!-- 内容主体 -->
            <el-main>
                 
                
                <!-- 宣传轮播图 -->

                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            // 用户名
            username: 'Administrator',
            //导航菜单数据
            menulist: [
                {
                    id: 1,
                    authName: '首页',
                    path: 'homePage'
                },
                {
                    id: 2,
                    authName: '溯源查询',
                    path: 'selects'
                },
                {
                    id: 3,
                    authName: '商品管理',
                    path: 'goods'
                },
                {
                    id: 4,
                    authName: '订单管理',
                    path: 'orders'
                },
            ],
            //激活的当前导航地址
            activePath: ''
        }
    },
    methods: {
        logout() {

        },
        // //退出登录
        // logout() {
        //     //清空 token
        //     window.sessionStorage.clear()
        //     // 跳转到登录页
        //     this.$router.push('/login');
        // },
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
.home-container {
    height: 100%;
}

.el-header {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center; 
    font-size: 40px;
    /* background-image: url("../assets/background.jpg");
    -moz-background-size:100% 100%; 
    background-size:100% 100%; */
    /* background-color: #7DB996; */
}

.el-header div {
    display: flex;
    align-items: center;
}


.el-main {
    /* background-color: #eaedf1; */
    background-color: #fff;
}

.title-img {
    padding: 20px 20px;
    padding-left: 50px;
    height: 80px;
    width:80px;
    justify-content: flex-start;
}

.el-menu-demo {
    border-bottom-style: none;
    padding:  0 65px;
}

.el-menu-item {
    padding: 0 45px;
    font-size: 16px;
}

/* 去整体下划线 */
.el-menu.el-menu--horizontal{
  border: none;
}

/* 点击出来的下划线进行隐藏 */
.el-menu-item.is-active {
    border-bottom: none!important;
}

/* 点击出来的下划线动效残留进行隐藏 */
.el-menu--horizontal>.el-menu-item{
    border-bottom: none;
}

/* 用户名 */
.user {
    font-size: 15px;
    color: #909399;
    padding: 0 10px;
}

</style>