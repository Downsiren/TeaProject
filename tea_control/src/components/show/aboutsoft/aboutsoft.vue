<!--
 * @Description: 设备模块
 * @Author: zhangxin
 * @Date: 2021-02-16 17:28:19
 * @LastEditTime: 2021-02-16 17:37:38
 * @LastEditors: zhangxin
-->
<template>
    <div>

        <!-- title -->
        <div class="body-header">
            <span>·</span>
            <!-- &nbsp;空格 -->
            <span>&nbsp;设备模块</span>
        </div>

        <!-- 设备搜索 -->
        <div class="searchBar">
            <el-cascader placeholder="试试搜索：A区" :options="options" size="medium" filterable clearable></el-cascader>
            <div class="searchInput">
                <el-input placeholder="请输入搜索内容"  v-model="searchInput" prefix-icon="el-icon-search"  clearable></el-input>
            </div>
            <el-button type="success" icon="el-icon-search">搜索设备</el-button>

        </div>

        <div class="table">
            <!-- 设备列表 -->
            <el-table :data="deviceData" style="width: 100%"    :row-class-name="tableRowClassName" :default-sort = "{prop: 'add_date', order: 'descending'}">
                <el-table-column prop="device_id" label="设备编号" width="250">
                </el-table-column>
                <el-table-column  prop="device_name" label="设备名称"  width="200">
                </el-table-column>
                <el-table-column  prop="device_type" label="设备型号"  width="200">
                </el-table-column>
                <el-table-column prop="address" label="地址" width="200">
                </el-table-column>
                <el-table-column prop="add_date" label="设备添加时间" width="235" sortable>
                </el-table-column>
                <el-table-column prop="name" label="操作员" width="180">
                </el-table-column>
                <el-table-column prop="device_status" label="设备状态" width="150">
                </el-table-column>
            </el-table>
        </div>
        

    </div>
</template>

<script>
export default {
    data() {
        return {
            deviceData: [{
                device_id: 'CNSUDY8W123',
                device_name: 'A区温度传感器',
                device_type: 'SYN型',
                address: 'A区101号',
                add_date: '2021-04-30 10：00：00',
                name: '王小伟',
                device_status: '正常',
            },
            {
                device_id: 'SSJDIAJD456',
                device_name: 'B区温度传感器',
                device_type: 'SYN型',
                address: 'B区985号',
                add_date: '2021-05-01 11：00：00',
                name: '王小伟',
                device_status: '警告',
            },
            {
                device_id: 'XSHXAIDHI789',
                device_name: 'A区光照传感器',
                device_type: 'CHU型',
                address: 'A区211号',
                add_date: '2021-05-01 12：00：00',
                name: '王小伟',
                device_status: '故障',
            },],

            // 搜索组件数据
            options: [{
                value: 'address',
                label: '园区地址',
                children: [{
                    value: 'qu',
                    label: 'A区'
                },
                {
                    value: 'Bqu',
                    label: 'B区'
                }]
            },
            {
                value: 'device_type',
                label: '设备型号',
                children: [{
                    value: 'SYN',
                    label: 'SYN型'
                },
                {
                    value: 'CHU',
                    label: 'CHU型'
                }]
            }],

            // 搜索框内容
            searchInput: '',
        }
    },
    methods: {
        // 表格背景颜色变化
      tableRowClassName({row, rowIndex}) {
        if (row.device_status == '正常'){
            console.log('正常成功');
            return 'success-row';    
        }
        else if (row.device_status == '警告'){
            console.log('警告成功');
             return 'warning-row';
        }
        else if (row.device_status == '故障'){
            console.log('故障成功');
             return 'bad-row';
        }
        return '';
      }

    },

}
</script>

<style >
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
    background-color: #01DF74;
    border-radius: 4px;
}

/* 搜索Bar */
.searchBar {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
}


.searchInput {
    padding-left: 20px;
    width: 300px;
    padding-right: 30px;
}

/* 表格 */
.table {
    margin: 20px;
}

/* 表格设备状态 */
.el-table  .warning-row {
    background: oldlace ;
}

.el-table  .success-row {
    background: white ;
}

.el-table  .bad-row {
    background: #F5BCA9 ;
    color: #DF0101;
}

</style>