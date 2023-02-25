<!--
 * @Description: 操作模块
 * @Author: zhangxin
 * @Date: 2021-02-16 17:29:49
 * @LastEditTime: 2021-02-16 17:40:23
 * @LastEditors: zhangxin
-->
<template>
    <div>   
        <!-- title -->
        <div class="body-header">
            <span>·</span>
            <!-- &nbsp;空格 -->
            <span>&nbsp;设备操作</span>
        </div>

        <!-- 中间操作部分 -->
        <el-divider content-position="left">环境参数设置</el-divider>
        <!-- 温度传感器 -->
        <div class="form">
            <div class="title_sm">温度传感器</div>
            <el-form :inline="true" :model="tempDevice">
                <el-form-item label="型号" class="formItem">
                    <el-select v-model="tempDevice.id" placeholder="设备型号">
                    <el-option label="A区传感器" value="a1"></el-option>
                    <el-option label="B区传感器" value="a2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="温度上限设置 (℃)" class="formItem">
                    <el-input v-model="tempDevice.up" placeholder="温度上限值"></el-input>
                </el-form-item>
                <el-form-item label="温度下限设置 (℃)" class="formItem">
                    <el-input v-model="tempDevice.down" placeholder="温度下限值"></el-input>
                </el-form-item>
                <el-form-item class="formItem">
                    <el-button type="primary" @click="tempSet">设置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 湿度传感器 -->
        <div class="form">
            <div class="title_sm">湿度传感器</div>
            <el-form :inline="true" :model="humDevice">
                <el-form-item label="型号" class="formItem">
                    <el-select v-model="humDevice.id" placeholder="设备型号">
                    <el-option label="A区传感器" value="a1"></el-option>
                    <el-option label="B区传感器" value="a2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="湿度上限设置  " class="formItem">
                    <el-input v-model="humDevice.up" placeholder="温度上限值"></el-input>
                </el-form-item>
                <el-form-item label="湿度下限设置  " class="formItem">
                    <el-input v-model="humDevice.down" placeholder="温度下限值"></el-input>
                </el-form-item>
                <el-form-item class="formItem">
                    <el-button type="primary" @click="humSet">设置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 光照传感器 -->
        <div class="form">
            <div class="title_sm">光照传感器</div>
            <el-form :inline="true" :model="lightDevice">
                <el-form-item label="型号" class="formItem">
                    <el-select v-model="lightDevice.id" placeholder="设备型号">
                    <el-option label="A区传感器" value="a1"></el-option>
                    <el-option label="B区传感器" value="a2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="光照上限设置 （lux）" class="formItem">
                    <el-input v-model="lightDevice.up" placeholder="光照上限值"></el-input>
                </el-form-item>
                <el-form-item label="光照下限设置 （lux）" class="formItem">
                    <el-input v-model="lightDevice.down" placeholder="光照下限值"></el-input>
                </el-form-item>
                <el-form-item class="formItem">
                    <el-button type="primary" @click="lightSet">设置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 查询部分 -->
        <el-divider content-position="left">传感器信息查询</el-divider>
        <!-- 园区温湿度查询 -->
        <div class="form">
            <div class="title_sm">园区温湿度查询</div>
            <el-form :inline="true" :model="selectDevice">
                <el-form-item label="园区" class="formItem">
                    <el-select v-model="selectDevice.id" placeholder="设备型号">
                    <el-option label="A区" value="a1"></el-option>
                    <el-option label="B区" value="a2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="园区当前温度" class="formItem">
                    <el-input v-model="selectDevice.temp" placeholder="园区当前温度"></el-input>
                </el-form-item>
                <el-form-item label="园区当前湿度" class="formItem">
                    <el-input v-model="selectDevice.hum" placeholder="园区当前温度"></el-input>
                </el-form-item>
                <el-form-item label="园区当前光照" class="formItem">
                    <el-input v-model="selectDevice.light" placeholder="园区当前光照"></el-input>
                </el-form-item>
                <el-form-item class="formItem">
                    <el-button type="primary" @click="Search">查询</el-button>
                </el-form-item>
            </el-form>
        </div>


    </div>   
</template>

<script>
export default {
     data() {
      return {
    //    温度传感器设置
        tempDevice :{
            id: '',
            up: '',
            down: ''
        },
    //    湿度传感器设置
        humDevice :{
            id: '',
            up: '',
            down: ''
        },
        //    光照传感器设置
        lightDevice :{
            id: '',
            up: '',
            down: ''
        },
        // 园区状况查询
        selectDevice :{
            id: '',
            temp: '',
            hum: '',
            light: ''
        }
      }
     },
     methods: {
         tempSet() {
            this.$message({
                message: '参数设置成功',
                type: 'success'
            });
             console.log('设置成功');
         },
         humSet() {
            this.$message({
                message: '参数设置成功',
                type: 'success'
            });
            console.log('设置成功');
         },
         lightSet() {
            this.$message({
                message: '参数设置成功',
                type: 'success'
            });
            console.log('设置成功');
         },
         Search() {
            this.$message({
                message: '查询成功',
                type: 'success'
            });
            console.log('查询成功');
         }
     }
}
</script>

<style scoped>
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
    background-color: #819FF7;
    border-radius: 4px;
}

/* 设备设置小模块 */
/* 设备类型标题 */
.title_sm {
    margin-bottom: 15px;
    width: 135px;
    height: 30px;
    padding-top: 5px;
    text-align: center;
    align-content: center;
    border: #819FF7 solid 1.75px;
    border-radius: 5px;

}

/* 每块的表单格式 */
.form {
    margin-left: 30px;
    margin-bottom: 13px;
}

.formItem {
    padding-left: 20px;
    padding-right: 20px;
}
</style>