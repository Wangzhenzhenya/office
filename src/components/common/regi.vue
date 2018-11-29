<template>
    <el-form :model="ruleForm2 "  action="" status-icon :rules="rules2" ref="ruleForm2 dynamicValidateForm" label-width="100px" class="demo-ruleForm form1" method='post'>
        <p>Register</p>
        <el-form-item label="用户名" required="true" prop="name">
            <el-input type="text" v-model="ruleForm2.name" autocomplete="off" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" required="true" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="password"></el-input>
        </el-form-item>
        <el-form-item required=true label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="input same password"></el-input>
        </el-form-item>
        <el-form-item required=true label="邮箱" prop="email" >
            <el-input type="email" v-model="ruleForm2.email" placeholder="QQemail" ></el-input>
        </el-form-item>
        <el-form-item required=true label="验证码" prop="verification">
            <el-input v-model="ruleForm2.checkVerification"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default{
    data() {
      var checkVerification = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('验证码不能为空'));
            }
      };
      var checkName=(rule,value,callback)=>{
          if(!value){
              return callback(new Error('用户名不能为空'));
          }
      };
      var checkVerification=(rule,value,callback)=>{
          if(!value){
              return callback(new Error('验证码不能为空'));
          }
      };
      var checkEmail=(rule,value,callback)=>{
          if(!value){
              return callback(new Error('邮箱不能为空'));
          }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
        }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          verification: '',
          name:'',
          email:'',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name:[
              {validator:checkName,trigger:'blur'}
          ],
          email:[
              {validator:checkEmail,trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
    
</script>

<style scoped>
.form1{
    width: 35%;
    margin: 0 auto;
    margin-top: 100px;
    border: 1px solid #409EFF;
    text-align: center;
}
.form1 p {
    margin-bottom: 20px;
    letter-spacing: 3px;
    font-size: 1.5em;
    padding: 20px;
    color: #e5e7ea;
    background-color: #409EFF;
}
.el-form-item {
    margin-bottom: 22px;
    margin-right: 50px;
}
</style>

