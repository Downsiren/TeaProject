<!--
 * @Description: 登录页面
 * @Author: zhangxin
 * @Date: 2021-01-28 15:42:46
 * @LastEditTime: 2021-01-29 16:10:02
 * @LastEditors: zhangxin
-->
<template>
    <div class="login_container"> 
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../assets/user.jpg" alt="">
            </div>
            <!-- 登录表单区域  -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input 
                        prefix-icon="el-icon-user-solid"
                        placeholder="用户名"
                        v-model="loginForm.username"
                    ></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input 
                        prefix-icon="el-icon-lock"
                        placeholder="密码"
                        type="password"
                        v-model="loginForm.password" 
                    ></el-input>
                </el-form-item>
                <!-- 提交 -->
                <el-form-item class="btns">
                    <el-row>  
                        <el-button type="primary" @click="login" round>登录</el-button>
                        <el-button type="info" @click="resetLoginForm" round>重置</el-button>
                    </el-row>
                </el-form-item>
            </el-form>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
          //登陆表单的数据绑定对象
        loginForm: {
          username:'',
          password:''
        },
        //这是表单的验证规则对象
        loginFormRules:{
            //验证用户名是否合法
            username:[
                { required: true, message: '请输入登录用户名', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
            ],
            //验证密码是否合法
            password:[
                { required: true, message: '请输入登录密码', trigger: 'blur' },
                { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
            ]
        }
      };
    },
    methods: {
        //点击重置按钮，重置登陆表单
        resetLoginForm() {
            //console.log(this)
            this.$refs.loginFormRef.resetFields();
        },
        // login() {
        //     this.$refs.loginFormRef.validate(async valid =>{
        //         //console.log(valid);
        //         if(!valid) return;
        //         //结构出promise对象中的data数据，重命名为res
        //         const {data: res} = await this.$http.post('login',this.loginForm);
        //         //根据后台返回数据中的格式判断
        //         if(res.meta.status !== 200)
        //             return this.$message.error('登陆失败！');
        //         this.$message.success('登陆成功！');

        //         //console.log(res)
        //         window.sessionStorage.setItem('token' , res.data.token);
        //         this.$router.push('/home')
        //     })
        // }
    }
}
</script>

<style lang="less" scoped>

.login_container{
    background-color: #2b4b6b;
    height: 100%;
}

.login_box{
    width:450px ;
    height: 300px;
    background-color:#fff ;
    /*圆角边框 */
    border-radius: 3px;
    /*绝对定位 居中*/
    position: absolute;
    left: 50%;
    top: 50%;
    /*减去自身大小50% */
    transform: translate(-50%, -50%);
    .avatar_box{
        height: 130px;
        width:130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
         width: 100%;
         height: 100%;
         border-radius: 50%;
         background-color: #eee;
        } 
    }
}

.btns{
    display: flex;
    justify-content: flex-end;
}

.login_form{
    position: absolute;
    bottom:0;
    width: 100%;
    padding: 0 20px;
    /**防止溢出 */
    box-sizing: border-box;
}
</style>