<!--
 * @Description: 
 * @Author: zhangxin
 * @Date: 2021-02-04 21:10:59
 * @LastEditTime: 2021-02-08 20:17:43
 * @LastEditors: zhangxin
-->
<template>
    <div>
        
        <!-- 轮播图 -->
         <el-carousel height="360px" > 
            <el-carousel-item v-for="item in scollImg" :key="item.id" >
                <img class="scollImgs" :src="require(`../assets/scoll/${item.src}.jpg`)" alt="">
            </el-carousel-item>
        </el-carousel>
        <!-- 搜索界面 -->
        <div class="inputBlock">
            <div class="search-title">
                <span>产品溯源查询</span>
                <i class="el-icon-s-opportunity title-label" style="padding-left:25px;padding-right=20px;"></i>
                <span class="title-label">请输入唯一溯源码</span>
            </div>
            <!-- 搜索框 -->
            <div class="search-flex">
                <el-input class="inputToSearch" v-model="input" placeholder="请输入产品唯一溯源码"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            </div>
            
        </div>
        
        <!-- 展示页 -->
        <div class="showGoods">
        <el-row>
            <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                <img :src="showSrc" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
        </div>
        

        
    </div>

</template>  

<script>
export default {
    data() {
        return {
            // 轮播图
            scollImg: [
                {
                  id: 1, 
                  src: 'scoll1'
                },
                {
                  id: 2, 
                  src: 'scoll2'
                },
                {
                  id: 3, 
                  src: 'scoll3'
                },
                {
                  id: 4, 
                  src: 'scoll4'
                },
            ],
            // 输入溯源码
            input: '',
            // 产品展示图
            showSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            currentDate: new Date(),
        }
    },
    methods: {
        // 搜索溯源码，跳转结果页
        search() {
            console.log(this.input)
            this.$router.push('/selects')
        }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

/* 轮播图满屏 */
.scollImgs {
    width: 100%;
}

/* 溯源界面 */
.inputBlock {
    margin:25px;
    margin-bottom: 160px;
}

.inputToSearch {
    width: 60%;
    padding-left: 30px;
}

.search-title {
    padding-left: 20px;
    padding-bottom: 20px;
    font-size: 20px;

}

.title-label {
    font-size:16px;
    color:#475669;
}

.search-flex {
    width: 100%;
    display: inline-flex;
    justify-content: center;
}

/* 展示页 */
.showGoods {
    position: relative;
    left: 12%;
}


 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>