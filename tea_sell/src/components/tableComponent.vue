<!--
 * @Description: 
 * @Author: zhangxin
 * @Date: 2021-02-08 16:30:24
 * @LastEditTime: 2021-02-08 17:02:47
 * @LastEditors: zhangxin
-->
<template>
    <table class="mailTable" :style="styleObject" v-if="s_showByRow">
        <tr v-for="index in rowCount" :key="index.key">
            <td class="column">{{tableData[index*3-3].key}}</td>
            <td>{{tableData[index*3-3].value}}</td>
            <td class="column">{{tableData[index*3-2] !== undefined ? tableData[index*3-2].key : ''}}</td>
            <td>{{tableData[index*3-2] !== undefined ? tableData[index*3-2].value : ''}}</td>
            <td class="column">{{tableData[index*3-1] !== undefined ? tableData[index*3-1].key : ''}}</td>
            <td>{{tableData[index*3-1] !== undefined ? tableData[index*3-1].value : ''}}</td>
        </tr>
    </table>
    <table class="mailTable" :style="styleObject" v-else>
        <tr v-for="index in rowCount" :key="index.key">
            <td class="column">{{tableData[index-1].key}}</td>
            <td>{{tableData[index-1].value}}</td>
            <td class="column">{{tableData[rowCount/2+index-1] !== undefined ? tableData[rowCount/2+index-1].key : ''}}</td>
            <td>{{tableData[rowCount/2+index-1] !== undefined ? tableData[rowCount/2+index-1].value : ''}}</td>
            <td class="column">{{tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].key : ''}}</td>
            <td>{{tableData[rowCount+index-1] !== undefined ? tableData[rowCount+index-1].value : ''}}</td>
        </tr>
    </table>
</template>
 
<script>
    export default {
        data() {
            return {
                styleObject: {},
                s_showByRow: true,
            };
        },
        props: ['tableData', 'tableStyle', 'showByRow'],
        computed: {
            rowCount: function() {
                //设置为几列数据就除以几。通过td tr模拟表格
                return Math.ceil(this.tableData.length/3);
            }
        },
        created() {
            this.styleObject = this.tableStyle;
            if(this.showByRow !== undefined){
                this.s_showByRow = this.showByRow;
            }
        },
    }
</script>
 
<style>
        .mailTable, .mailTable tr, .mailTable tr td{ border:1px solid #E6EAEE; }
        .mailTable{ font-size: 14px; color: #71787E; width:100%; height:100%;}
        .mailTable tr td{ border:1px solid #E6EAEE; width: 15%; height: 76px; box-sizing: border-box; padding: 0 10px; }
        .mailTable tr td.column { background-color: #EFF3F6; color: #000000; font-size: 14px;}
</style>