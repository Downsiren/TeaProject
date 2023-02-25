// 头部区域
<template>
     <div class="header-wrapper">
                <!-- 标题图标 -->
                <img src="../../assets/title.png" alt="" class="title-img">
                <li class="title-font">
                    <p><font  face=华文行楷 color=#ffffff>茶叶溯源系统</font></p>
                </li>
                    <!-- 功能bar -->
                    <li>
                        <p><router-link to="/data"><i class="el-icon-s-data"></i></router-link></p>
                        <p class="header-i-info">数据</p>
                    </li>
                    <li>
                        <p><router-link to="/statistics"><i class="el-icon-pie-chart"></i></router-link></p>
                        <p class="header-i-info">统计</p>
                    </li>
                    <li>
                        <p><router-link to="/test"><i class="el-icon-odometer"></i></router-link></p>
                        <p class="header-i-info">调试</p>
                    </li>
                    <li>
                        <p><router-link to="/aboutsoft"><i class="el-icon-cpu"></i></router-link></p>
                        <p class="header-i-info">设备</p>
                    </li>
                    <li>
                        <p><router-link to="/location"><i class="el-icon-map-location"></i></router-link></p>
                        <p class="header-i-info">定位</p>
                    </li>
                    <li>
                        <p><router-link to="/operation"><i class="el-icon-s-operation"></i></router-link></p>
                        <p class="header-i-info">操作</p>
                    </li>
                    <li>
                        <p><router-link to="/tools"><i class="el-icon-s-cooperation"></i></router-link></p>
                        <p class="header-i-info">工具</p>
                    </li>
                    <li>
                        <p><router-link to="/setting"><i class="el-icon-s-tools"></i></router-link></p>
                        <p class="header-i-info">管理</p>
                    </li>
                    <li>
                        <p><router-link to="/out"><i class="el-icon-switch-button"></i></router-link></p>
                        <p class="header-i-info">退出</p>
                    </li>
            </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.header-wrapper {
    width: 100%;
    height: 130px;
    box-sizing: border-box; 
    background-color: #8CC540;
}

.header-wrapper  li {
    display: inline-block;
    width: 140px;
    height: 130px;
    box-sizing: border-box;
    text-align: center;
    vertical-align: top;
    font-weight: 700;
  }
  
.header-wrapper  li a {
    text-decoration: none;
    display: inline-block;
  }
.header-wrapper  li i {
    font-size: 40px;
    color: #ffffff;
  }

.header-i-info {
    /* margin-top: 10px; */
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
}

.title-img {
    padding: 20px 10px;
    height: 80px;
    width:80px;
    justify-content: flex-start;
}

.title-font{
    width: 150px;
    margin: 22px 0 auto;
    font-size: 22px;
    text-align: center;
    vertical-align: top;
}

</style>