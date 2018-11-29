<template>
    <div class="loginbox">
     <form :model="ruleForm2 " ref="ruleForm2"  method="post" class="smart-green" id="form1">
                <h1>登录 <span>Please fill all the texts in the fields then click the button.</span></h1>
                <label for="">
                    <span><i class=" icon iconfont icon-yonghu"></i>用户名:</span>
                    <input type="text" v-model="username" name="username" id="username" placeholder="username">
                </label>

                <label for="">
                    <span><i class="icon iconfont icon-mima"></i> 密码:</span>
                    <input type="password" name="password" id="password" placeholder="密码">
                </label>

                <p class="logining">
                    <!-- <el-button id='log' plain native-type="submit" npm @click="open"> <router-link plain id="button" class="button" to="">登录</router-link></el-button> -->
                    <input  value="登录"  @click="login" style="width:30px" id='log button' class="button" >
                    <el-button id='register'  :plain="true" @click='prompt'><router-link  id="button" class="button" to="/register">注册</router-link></el-button>
                </p>

    
            </form>  
            
            </div>
            
</template>

<script>
    export default{
        data(){
            return{
                ruleForm2:'',
                username : "",
                aaa: "",
                name:'pig'
            }
        },
        methods:{
            asd(){
                console.log( this.username )
                this.aaa = this.username
            },
            open(){
                this.$notify({
                title:'登录成功',
                message:'恭喜您，成功进入！',
                type:'success'
                });
                ruleForm2.submit();
            },
            errorinfo(){
                this.$message({
                message:'输入有误，请重新输入！',
                type:'woring'
                });
            },
            prompt(){
                this.$message({
                    showClose: true,
                    message:'请输入您的真实有效信息'
                })
            },
            login(){
                var username=$("#username").val();
                var password=$("#password").val();
                
                $.ajax({
                    url:"LoginServlet",//url:服务器地址;
                    请求方式:"post",//请求方式：post|get;{}

                    data:"username="+username+"&password="+password,//data:请求数据;
                    success:function(result,testStatus){
                        if(result=="登录成功")
                            {
                                alert('jump!')
                                 window.location.href='/OurProject001/index.html#/office';
                            }
                        else{
                            alert(result);
                        }
                    }.bind(this),
                    error:function(xhr,errorMessage,e){
                        
                    }
            });
        }
    }
}
        
</script>

<style scoped>
#login{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: all .1s;
    font-weight: 500;
 
    font-size: 14px;
    border-radius: 4px;
    background-color: #9DC45F;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-border-radius: 5px;
    border: none;
    padding: 10px 25px 10px 25px;
    color: #FFF;
    text-shadow: 1px 1px 1px #949494;
    -webkit-transition: all 0.5s;
}
.icon {
    margin-right: 8px;
}
#login:hover{
    background-color: #688934;
}
#log{
    padding: 0;
    border: 0;
}
#register{
    padding: 0;
    border: 0;
}
.logining {
    margin-top: 20px;
}
.smart-green {
    margin-left: auto;
    margin-right: auto;
    max-width: 366px;
    background: #F8F8F8;
    padding: 30px 30px 20px 30px;
    font: 12px Arial, Helvetica, sans-serif;
    color: #666;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    margin-top: 100px;
}

.smart-green h1 {
    font: 24px "Trebuchet MS", Arial, Helvetica, sans-serif;
    padding: 20px 0px 20px 40px;
    display: block;
    margin: -30px -30px 10px -30px;
    color: #FFF;
    background: #9DC45F;
    text-shadow: 1px 1px 1px #949494;
    border-radius: 5px 5px 0px 0px;
    -webkit-border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #89AF4C;

}

.smart-green h1>span {
    display: block;
    font-size: 11px;
    color: #FFF;
}

.smart-green label {
    display: block;
    margin: 0px 0px 5px;
}

.smart-green label>span {
    float: left;
    margin-top: 10px;
    color: #5E5E5E;
}

.smart-green input[type="text"],
.smart-green input[type="password"],
.smart-green textarea,
.smart-green select {
    color: #555;
    height: 30px;
    line-height: 15px;
    width: 100%;
    padding: 0px 0px 0px 10px;
    margin-top: 2px;
    border: 1px solid #E5E5E5;
    background: #FBFBFB;
    outline: 0;
    -webkit-box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
    box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
    font: normal 14px/14px Arial, Helvetica, sans-serif;
}



.smart-green textarea {
    height: 100px;
    padding-top: 10px;
}

.smart-green select {
    /* background: url('down-arrow.png') no-repeat right, -moz-linear-gradient(top, #FBFBFB 0%, #E9E9E9 100%);
    background: url('down-arrow.png') no-repeat right, -webkit-gradient(linear, left top, left bottom, color-stop(0%, #FBFBFB), color-stop(100%, #E9E9E9)); */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
    width: 100%;
    height: 30px;
}

.smart-green .button {
    background-color: #9DC45F;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-border-radius: 5px;
    border: none;
    padding: 10px 25px 10px 25px;
    color: #FFF;
    text-shadow: 1px 1px 1px #949494;
    transition: all 0.5s;
}

.smart-green .button:hover {
    background-color: #80A24A;
}
</style>
