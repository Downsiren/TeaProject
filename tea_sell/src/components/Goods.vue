// 仓库管理
<template>
    <div>
        <div class="head">
            <div class="addGoods">
                <el-button type="primary" icon="el-icon-plus" @click="addGoods()">添加商品入库</el-button>    
            </div>
            <div class="searchGoods">
              <el-input v-model="searchInput" placeholder="请输入产品id"></el-input>  
            </div>
            <div>
                <el-button type="primary" icon="el-icon-search" @click="searchGoods()">搜索</el-button> 
            </div>
           
        </div>
        
            <!-- 表格弹框 -->
            <el-dialog title="添加商品入库" :visible.sync="dialogFormVisible">
            <el-form :model="goods">
                <el-form-item label="输入产品id" :label-width="formLabelWidth">
                    <el-input v-model="goods.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="输入产品名称" :label-width="formLabelWidth">
                    <el-input v-model="goods.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="输入操作员名称" :label-width="formLabelWidth">
                    <el-input v-model="goods.operator" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="输入产品入库数量" :label-width="formLabelWidth">
                    <el-input v-model="goods.num" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="选择入库时间" :label-width="formLabelWidth">
                        <el-date-picker v-model="goods.add_time"  type="datetime" placeholder="选择日期时间"> </el-date-picker>
                </el-form-item>
                <el-form-item label="输入仓库地址" :label-width="formLabelWidth">
                     <el-input type="textarea" v-model="goods.address"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="goodsSubmit()">提 交</el-button>
            </div>
            </el-dialog>
        
        

        <el-table :data="productData"  border style="width: 100%;height: 400px" :default-sort = "{prop: 'add_time', order: 'descending'}">
            <el-table-column fixed prop="num" label="编号" width="80">
            </el-table-column>
            <el-table-column fixed prop="id" label="产品id" width="150">
            </el-table-column>
            <el-table-column prop="name"  label="产品名" width="200">
            </el-table-column>
            <el-table-column prop="operator" label="操作员" width="120">
            </el-table-column>
            <el-table-column prop="product_num" label="产品数量" width="120" sortable>
            </el-table-column>
            <el-table-column prop="add_time" label="入库时间" width="200" sortable>
            </el-table-column>
            <el-table-column prop="warehouse" label="仓库地址" width="350">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
                <el-button  size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini"  type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
        </el-table-column>
        </el-table>

        <div class="page">
             <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div>


    </div>
        

</template>

<script>
import axios from 'axios'

export default {
     

    data() {
      return {
        //   茶叶产品
        productData: [{
          num: '1',
          id: 'N123',
          name: '婺源绿茶',
          operator: '王春华',
          product_num: '50',
          add_time: '2021-04-30 08:00:00',
          warehouse: '江西省南昌市青山湖区蛟桥镇广兰大道东华茶仓'
        },
        {
          num: '2',
          id: 'C123',
          name: '龙井茶',
          operator: '王春华',
          product_num: '20',
          add_time: '2021-04-30 09:00:00',
          warehouse: '江西省南昌市青山湖区蛟桥镇广兰大道东华茶仓'
        },],

        // 当前页面
        currentPage: 1,
        // 弹窗显示
        dialogFormVisible: false,

        // 入库商品提交
        goods: {
            id: '',
            name: '',
            operator: '',
            num: '',
            address: '',
            add_time: ''
        },

        // 搜索商品内容
        searchInput: '',

      }
    },

    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        },
        // 添加商品入库
        addGoods() {
            // 使弹窗显示
            this.dialogFormVisible = true;
            console.log('显示成功');
        },
        // 提交商品
        goodsSubmit() {
            this.dialogFormVisible = false;
            this.$message({
                showClose: true,
                message: '入库成功！',
                type: 'success'
            });
        },
        // 搜索商品
        searchGoods() {
            
        }
        
    },

}
</script>

<style scoped>
/* 翻页 */
.page {
    width: 100%;
    height: 200px;
    display: block;
    align-content: center;
    text-align: center;
}

.head {
    display: flex;
    justify-items: flex-start;
}

/* 添加商品按钮 */
.addGoods {
    margin-left: 10px;
    margin-bottom: 20px;
}

/* 搜索商品 */
.searchGoods {
    width: 250px;
    padding-left: 50px;
    padding-right: 20px;
}
</style>