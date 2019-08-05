<template>
  <div class="loginbox">
    <el-card class="box-card">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 表单验证部分 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        status-icon
        ref="loginForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="loginForm.mobile"
            style=" margin-top:10px"
            autocomplete="on"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            style="width:232px; margin-right:10px"
            autocomplete="off"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-checkbox v-model="checked" style="float:left">我已阅读并同意用户协议和隐私条款</el-checkbox>
        <el-button
          type="primary"
          :disabled="!checked"
          style="width:100%; margin-top:10px"
          @click="submit('loginForm')"
        >登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data () {
    var validateMobile = (rule, value, callback) => {
      const reg = /^1[3-9]\d{9}/
      if (!reg.test(value)) {
        callback(new Error('手机格式输入不正确'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      checked: true,
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '验证码格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 发送请求
          // this.$http
          //   .post(
          //     'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
          //     this.loginForm
          //   )
          //   .then(result => {
          //     store.setUser(result.data)
          //     this.$router.push('/')
          //   })
          //   .catch(() => {
          //     this.$message.error('输入的手机号或者验证码不正确')
          //   })
          // 使用async和await进行优化

          try {
            let { data } = await this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.loginForm
            )
            store.setUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('输入的手机号或者验证码不正确')
          }
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.loginbox {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;

  .box-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: 400px;
    height: 300px;
    text-align: center;
    img {
      width: 200px;
    }
  }
}
</style>
