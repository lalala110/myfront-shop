<template>
  <div class="login">
    <section>
      <h1>知识分享</h1>
      <!-- model主要用作设置表单数据的对象，rules 设置验证的规则 ref 绑定的数据 -->
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" labelPosition="top">
        <el-form-item label="用户名" prop="user_name">
          <el-input type="text" v-model="ruleForm2.user_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
      
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button type="danger" @click="resetForm('ruleForm2')">重置</el-button>
           
        </el-form-item>
      </el-form>
    </section>

  </div>

</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
      "user_name":"ivanyb",
      "password":"123"
       
      },
      rules2: {
        user_name: [ { required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
       
      }
    };
  },
  methods: {
    login(){
      this.$axios.post(this.$api.login,this.ruleForm2).then((res)=>{
      console.log(res)
      if(res.data.status==0){
        this.$alert("登录成功",'提示',
        {callback:()=>{
         
           localStorage.setItem('user_name', res.data.message.user_name);
           console.log(localStorage)
          // this.$router.push({name:"admin"})
          let nextPath=this.$route.query.next||'/goods';
          console.log(nextPath);
          // this.$router.push({path:nextPath})
          }
        })
      }
        else{
          this.$alert("登录失败")
        }
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
         this.login();
         
        } else {
          this.$alert("用户名或者密码是错误的哦")
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login {
 
  height: 100%;
 	background:#AB82FF;


  section {
    height: 100%;
    h1{
      text-align: center;
      color:#fff;
      font-size: 20px;
    }
 
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 300px;
    padding: 50px;
    border: 5px solid #ccc;
    border-radius: 5px;
  }
}
</style>

