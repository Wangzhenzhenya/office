<template>
    <div>
         <form action="" :model="ruleForm2 " ref="ruleForm2"  onsubmit="return validate_form(this)" method="post" class="smart-green form" >
                <h1>注册 <span>请填入您的真实有效信息.</span></h1>
                <label for="">
                    <span><i class=" icon iconfont icon-yonghu"></i>用户名:</span>
                    <input type="text" v-model="username" id="username"  placeholder="username">
                </label>

                <label for="">
                    <span><i class="icon iconfont icon-mima"></i>初始密码:</span>
                    <input type="password" name="" id="password" placeholder="password">
                </label>
                <label for="">
                    <span><i class="icon iconfont icon-mima"></i>再次输入密码:</span>
                    <input type="password" name="" id="password2" placeholder="password">
                </label>

                <label for="">
                    <span><i class="icon iconfont icon-youxiang1"></i>QQ邮箱:</span>
                    <input type="email" style="width: 55%;  float: left;" name="" id="QQmail" placeholder="email"> <input id='send' type="button" value="发送验证码" @click="send">
                </label>
                
             <label for="">
                 <span><i class="icon iconfont icon-yanzhengma3"></i>验证码:</span>
                    <input type="text" name="" id="PIN" placeholder="验证码">
             </label>
                    


                <p class="logining">
                    <el-button id='register'  plain @click='register'> <router-link :to=link id="button" class="button">注册</router-link></el-button> 
                    <input class="reset" type="reset" value="重置"> <router-link to='/login' class="returnlogin"><i class="iconreturn iconfont icon-fanhui"></i></router-link>
                </p>
               
              
        </form>
       <p id="errorinfo">{{regmsg}}</p>
    </div>
    
</template>
<script>
    export default {
        data(){
            return{
                username:'',
                ruleForm2:'',
                regmsg:'',
                sendmsg:'发送成功',
                link:''
            }
        },
        methods:{
            Verification(){
                this.$notify({
                    title: '注册成功',
                    message: '恭喜您，成功加入我们',
                    type: 'success'
                    });
                    this.$router.go('/login')
            },
            regerror(){
               this.$notify.error({
                title: '注册失败',
                message: '请再次重新输入'
                });
            },
            senderror(){
                this.$message(
                    this.sendmsg
                );
            },
            // validate_required(field,alerttxt)
            //     {
            //             if(field.value==null||value==''){
            //                 alert(alerttxt);return false
            //             }else {return true}
                    
            //     },
            // validate_form(thisform)
            // {
            //     let i=this.elements["email"];
            //         if(validate_required(i,'email must be filled out')==false){
            //             {email.focus();return false}
            //         }
            
            // },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            register(){
                var username=$("#username").val();
                var password=$("#password").val();
                var password2=$("#password2").val();
                var QQmail=$("#QQmail").val();
                var PIN=$("#PIN").val();
                document.getElementById('register').disabled=true;
                setTimeout(() => {
                    document.getElementById('register').disabled=false;
                }, 6000);
                $.ajax({
                    url:"RegisterServlet?method=register",//url:服务器地址;
                    请求方式:"post",//请求方式：post|get;
                    async:false,
                    data:"username="+username+"&password="+password+"&QQmail="+QQmail+"&PIN="+PIN+"&password2="+password2,//data:请求数据;
                    success:function(result,testStatus){
                         if(result=='1'){
                             alert(result);
                              this.$notify({
                                title: '注册成功',
                                message: '恭喜您，成功加入我们',
                                type: 'success'
                                });
                             window.location.href='http://localhost:8080/OurProject001/index.html#/';
                            //  this.Verification();
                        }
                        else{
                            this.regmsg=result;
                        }
                    }.bind(this),
                    error:function(xhr,errorMessage,e){
                    }
                });
            },
            send(){
                var QQmail=$("#QQmail").val();
                // $('#send').css({"background-color":'#918d8f'});
                // document.getElementById('send').disabled=true;
                // setTimeout(() => {
                //     document.getElementById('send').disabled=false;
                //     $('#send').css({"background-color":'#7cd970'});
                // }, 30000);
                $.ajax({
                    url:"RegisterServlet?method=send",//url:服务器地址;
                    请求方式:"post",//请求方式：post|get;
                    data:"QQmail="+QQmail,//data:请求数据;
                    success:function(result,testStatus){
                       this.sendmsg=result;
                       if(result=='发送成功'){
                           $('#send').css({"background-color":'#918d8f'});
                            document.getElementById('send').disabled=true;
                            setTimeout(() => {
                                document.getElementById('send').disabled=false;
                                $('#send').css({"background-color":'#7cd970'});
                            }, 30000);
                       }
                       console.log(this.sendmsg);
                       this.senderror();
                    }.bind(this),
                    error:function(xhr,errorMessage,e){
                    }
                });
            }
        }
    }
</script>
<style scoped>
.iconreturn {
    font-size: 2em;
    position: absolute;
    bottom: 0;
    right: 0;
}
.returnlogin{
    text-decoration: none;
    color: #008eff;

}
.icon{
    margin-right: 8px;
}
#errorinfo{
    font-size: 2em;
    color: #ff2121;
}
#log{
    padding: 0;
    border: 0;
}
#register{
    padding: 0;
    border: 0;
}
#send{
    background-color: #7cd970;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    margin-top: 6px;
    -moz-border-border-radius: 5px;
    border: none;
    padding: 3px;
    margin-left: 10px;
    /* padding: 2px 14px 0px 20px; */
    color: #FFF;
    text-shadow: 1px 1px 1px #949494;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    float: left;

}

.logining {
    margin-top: 20px;
}
.smart-green {
    margin-left: auto;
    margin-right: auto;
    max-width: 24%;
    /* border: 1px solid #409EFF; */
    background: #F8F8F8;
    padding: 30px 30px 20px 30px;
    font: 12px Arial, Helvetica, sans-serif;
    color: #666;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    margin-top: 61px;
    position: relative;
}

.smart-green h1 {
    font: 24px "Trebuchet MS", Arial, Helvetica, sans-serif;
    padding: 20px 0px 20px 40px;
    display: block;
    margin: -30px -30px 10px -30px;
    color: #FFF;
    background: #409EFF;;
    text-shadow: 1px 1px 1px #949494;
    border-radius: 5px 5px 0px 0px;
    -webkit-border-radius: 5px 5px 0px 0px;
    -moz-border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid #409EFF;

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
    font-size: 1.2em;
    width: block;
    display: inline-block;
    width: 100%;
    text-align: left;
}

.smart-green input[type="text"],
.smart-green input[type="password"],
.smart-green input[type="email"],
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
    background-color: #409EFF;
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
    background-color: rgb(100, 177, 255);
}
.reset {
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
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    transition: all 1s
}

.reset:hover{
    color: #409EFF;
    border: 1px solid #409EFF;
}
</style>

