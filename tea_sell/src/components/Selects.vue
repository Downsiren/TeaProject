<!--
 * @Description: 
 * @Author: zhangxin
 * @Date: 2021-02-04 22:28:44
 * @LastEditTime: 2021-02-08 20:11:40
 * @LastEditors: zhangxin
-->
<template>
    <div>
        <div class="results-title">
          <span>溯源码：</span>
          <span class="returnNum">{{ returnNum }}</span>
          <span>查询结果如下</span>
        </div>
        <!-- 茶叶图 -->
        <div class="teaImg">
            <el-image :src="teaSrc">
                <div slot="placeholder" class="image-slot">加载中
                    <span class="dot">...</span>
                </div>
             </el-image>
        </div>
        <!-- 结果表 -->
        <div>
            <mailTable :tableData="tableData"></mailTable>
        </div>
    </div>
</template>

<script>
// 引入组件

import mailTable from './tableComponent'
export default {
    //引入组件
    components: {
          mailTable,
    },
    data() {
        return {
            // 返回上一页面查询的溯源码
            returnNum: '123456',
            // 茶叶图的地址
            teaSrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            //数据tableData格式如下：
            tableData: [
                    {key: '溯源码', value: '123456'},
                    {key: '产品名称', value: '婺源绿茶'},
                    {key: '采摘园区', value: 'A123'},
                    {key: '保质期', value: '1年'},
                    {key: '制茶厂', value: '江西省xx市xx厂'},
                    {key: '销售商', value: '天虹Space超市'},
                    {key: '水分', value: '10g'},
                    {key: '总灰分', value: '2ml'},
                    {key: '农药残留量', value: '0'},
                    {key: '粉末', value: '0.05g'},
                    {key: '水浸出物', value: '0'},
                    {key: '粗纤维', value: '0'},
                    {key: '碎茶', value: '2g'},
            ],

        }  
    }
}
</script>

<style scoped>
.results-title {
    font-size: 20px;
    margin-bottom: 10px;
}

.returnNum {
    color:#2ECCFA;
    padding-top: 3px;
    padding-right:10px;
    font-size:16px;
}

.teaImg {
    position: relative;
    left: 50%;
    margin-left: -20%;
    margin-bottom: 15px;
    width: 450px;
    height: inherit;
}

</style>