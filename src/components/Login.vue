<template>
  <div class="login">
    <div class="login-conter">
      <div class="login-input">
        <div class="login-input-title" @click="toLogin">{{ logintitle }}</div>
        <el-form
          v-if="isLogin"
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
        >
          <el-form-item label="手机号" prop="phone">
            <el-input
              maxlength="11"
              v-model="loginForm.phone"
              type="text"
              auto-complete="off"
              placeholder="手机号"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              auto-complete="off"
              show-password
              placeholder="密码"
              @keyup.enter.native="handleLogin"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="login-btn" style="width: 100%">
            <el-button
              :loading="loading"
              size="medium"
              type="primary"
              style="width: 100%"
              @click.native.prevent="handleLogin"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>

        <!-- 注册表单 -->
        <el-form
          v-else
          ref="regForm"
          :model="regForm"
          :rules="loginRules"
          class="reg-form"
        >
          <el-form-item label="手机号" prop="phone">
            <el-input
              maxlength="11"
              v-model="regForm.phone"
              type="text"
              auto-complete="off"
              placeholder="手机号"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="regForm.password"
              type="password"
              auto-complete="off"
              show-password
              placeholder="密码"
              @keyup.enter.native="handleReg"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkpwd">
            <el-input
              v-model="regForm.checkpassword"
              type="password"
              auto-complete="off"
              show-password
              placeholder="确认密码"
              @keyup.enter.native="handleReg"
            >
            </el-input>
          </el-form-item>
          <el-form-item class="login-btn" style="width: 100%">
            <el-button
              :loading="loading"
              size="medium"
              type="primary"
              style="width: 100%"
              @click.native.prevent="handleReg"
            >
              <span v-if="!loading">注 册</span>
              <span v-else>注 册 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="banner">
        <el-carousel>
          <el-carousel-item v-for="item in 3" :key="item">
            <img
              class="banner-img"
              @click="jumpUrl"
              src="../assets/banner1.jpg"
              alt=""
            />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
// import { login } from "@/api/login";

export default {
  data() {
    return {
      isLogin: true,
      logintitle: "还没有账号，注册一个",
      loginForm: {
        phone: "13068868038",
        password: "123456789",
      },
      loginRules: {
        phone: [
          {
            required: true,
            trigger: "blur",
            message: "手机号不能为空",
          },
          {
            min: 11,
            max: 11,
            message: "请输入11位完整的手机号",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" },
          { min: 8, max: 18, message: "请输入8~15位的密码", trigger: "blur" },
        ],
        checkpwd: [
          { required: true, trigger: "blur", message: "密码不能为空" },
        ],
      },
      regForm: {
        phone: "",
        password: "",
        checkpassword: "",
      },
      loading: false,
      redirect: undefined,
    };
  },
  methods: {
    //登录
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$http
            .post("login", this.loginForm)
            .then((res) => {
              console.log(res);
              if (res.data.statusCode === 200) {
                // console.log("登录成功");
                this.$message({
                  message: res.data.tis,
                  type: res.data.status,
                });
                this.loading = false;
                this.$router.push('/home')
                sessionStorage.setItem('userinfo',JSON.stringify(res.data))
              } else {
                this.$message({
                  message: res.data.tis,
                  type: res.data.status,
                });
                this.loading = false;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },

    // 注册
    handleReg() {
      this.$refs.regForm.validate((valid) => {
        // console.log(valid);
        if (valid) {
          if (this.regForm.password === this.regForm.checkpassword) {
            // console.log("密码一致");
            this.$http.post("reg", this.regForm).then((res) => {
              console.log("返回来的", res);
              if (res.data.statusCode === 209) {
                this.$message({
                  message: res.data.tis,
                  type: res.data.status,
                });
                this.isLogin = false;
              } else if (res.data.statusCode === 203) {
                this.$message({
                  message: res.data.tis,
                  type: res.data.status,
                });
                this.isLogin = true;
              }
            });
          } else {
            console.log("密码不一致");
          }
        }
      });
    },
    jumpUrl() {
      window.open("http://www.baidu.com");
    },
    toLogin() {
      this.isLogin = !this.isLogin;
      if (this.isLogin == true) {
        this.logintitle = "还没有账号，注册一个";
      } else if (this.isLogin == false) {
        this.logintitle = "已有账户？ 登录";
      }
    },
  },
};
</script>

<style scoped>
/* element ui 样式 */

.el-carousel__item:nth-child(2n) {
  background-color: #315992;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #293849;
}

/* 自定义样式 */
.login {
  width: 100%;
  height: 100vh;
  background: #00043c;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.login-conter {
  width: 60%;
  height: 60%;
  margin: 10% auto;
  background: #d8d8d8;
  display: flex;
  flex-direction: row;
}

.login-input {
  width: 70%;
  height: 100%;
  background-image: url("../assets/login-bg.jpg");
  display: flex;
  flex-direction: column;
}

.login-input-title {
  user-select: none;
  cursor: pointer;
  width: 100%;
  height: 50px;
  background: #d8d8d8;
  opacity: 0.5;
  line-height: 50px;
  font-size: 20px;
  font-family: "Helvetica Neue";
}

.banner {
  user-select: none;
  width: 30%;
  height: 100%;
}

.el-carousel {
  line-height: 0;
  width: 100%;
  height: 100%;
}
.el-carousel-item {
  line-height: 0;
  width: 100%;
  height: 100%;
}

.banner-img {
  width: 100%;
  height: 100%;
}

.login-form {
  width: 60%;
  height: 40%;
  margin: 10% auto;
  border-radius: 10px;
  background: #00043c;
  opacity: 0.7;
  padding: 40px;
}

.reg-form {
  width: 60%;
  height: 50%;
  margin: 8% auto;
  border-radius: 10px;
  background: #00043c;
  opacity: 0.7;
  padding: 40px;
}
.login-btn {
  margin-top: 60px;
}
</style>