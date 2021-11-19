<template>
  <div class="home">
    <div class="nav">
      <div class="nav-conter">
        <img class="logo" src="../assets/logo.png" alt="" />
        <div class="title">
          <a href="#">首页</a>
          <a href="#">官方文档</a>
          <a href="#">主题仓库</a>
          <a href="#">博客</a>
          <a href="#">论坛</a>
        </div>
        <div class="login-reg">
          <el-button
            type="primary"
            icon="el-icon-user-solid"
            circle
            @click="userInfo"
          ></el-button>
          <!-- <span>{{ userinfo.phone }}</span> -->
        </div>
      </div>
    </div>

    <div class="nav-text">博客</div>
    <div class="nav-tips">首页 > 博客</div>

    <div class="conter">
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span @click="showCode">查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
      <div class="conter-card">
        <img src="../assets/banner1.jpg" />
        <div class="conter-msg">
          <span class="conter-title">Halo 1.4.12 发布</span>
          <div class="see">
            <i class="el-icon-view">1308</i>
            <span>查看 <span class="el-icon-arrow-right" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="goUP" @click="toTop">
      <i class="el-icon-arrow-up"></i>
    </div>
    <div class="footer-msg">
      <span>Copyright © 2021 HayBlog dev. Powered by HayBlog 1.0.2-+</span>
    </div>

    <!-- 用户信息 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
      v-if="isEdit"
    >
      <el-descriptions
        class="margin-top"
        title="用户信息"
        :column="3"
        :size="size"
        border
      >
        <template slot="extra">
          <el-button
            type="warning"
            size="small"
            icon="el-icon-edit"
            circle
            @click="editUserinfo"
          ></el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          {{ userinfo.name || "暂无" }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          {{ userinfo.phone }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          {{ userinfo.city || "暂无" }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            个性签名
          </template>
          {{ userinfo.sign || "暂无" }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          {{ userinfo.address || "暂无" }}
        </el-descriptions-item>
      </el-descriptions>

      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="loginout">退 出 登 录</el-button>
      </span>
    </el-dialog>

    <!-- 修改用户信息 -->
    <el-dialog
      v-else
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <el-descriptions
        class="margin-top"
        title="用户信息"
        :column="3"
        :size="size"
        border
      >
        <template slot="extra"> </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            用户名
          </template>
          <el-input
            v-model="userinfo.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
          </template>
          <el-input
            v-model="userinfo.phone"
            placeholder="请输入手机号"
            :disabled="true"
          ></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
          </template>
          <el-input
            v-model="userinfo.city"
            placeholder="请输入居住地"
          ></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            个性签名
          </template>
          <el-input
            v-model="userinfo.sign"
            placeholder="请输入个性签名"
          ></el-input>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
          </template>
          <el-input
            v-model="userinfo.address"
            placeholder="请输入联系地址"
          ></el-input>
        </el-descriptions-item>
      </el-descriptions>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="saveUserinfo">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  data() {
    return {
      token: null,
      userinfo: {
        name: "",
      },
      dialogVisible: false,
      size: "",
      isEdit: true, //是否修改用户信息
    };
  },

  // },
  methods: {
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },

    // 个人信息
    userInfo() {
      let userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
      this.userinfo = userinfo;
      if (userinfo === null || userinfo === "") {
        this.$router.push("/");
      } else {
        this.dialogVisible = true;
        this.$http.post("userinfo", this.userinfo).then((res) => {
          this.userinfo = res.data[0];
        });
      }
    },

    // 修改个人信息
    editUserinfo() {
      this.isEdit = false;
      this.$http.post("userinfo", this.userinfo).then((res) => {
        console.log(res.data);
        this.userinfo = res.data[0];
      });
    },

    // 退出修改个人信息
    cancle() {
      // this.dialogVisible = false;
      this.isEdit = true;
    },

    //保存修改的用户信息
    saveUserinfo() {
      console.log("保存用户信息");
      this.isEdit = true;
      this.$http.put("editUser", this.userinfo).then((res) => {
        console.log(res.data);
        this.$message({
          message: res.data.tis,
          type: res.data.status,
        });
      });
    },

    //退出登录
    loginout() {
      sessionStorage.removeItem("userinfo");
      this.dialogVisible = false;
      this.userinfo = {};
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
          this.isEdit = true;
        })
        .catch((_) => {});
    },
    showCode(){
      this.$router.push('/code')
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #3c4858;
  font-size: 14px;
  font-weight: 550;
}
a:hover {
  color: #a5b6ec;
}
.home {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
.nav {
  width: 100%;
  border-bottom: 1px #d8d8d8 solid;
  background: #fff;
  position: sticky;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.nav-conter {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}
.logo {
  float: left;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-right: 300px;
}
.title {
  width: 100%;
  margin-right: 300px;
  display: flex;
  justify-content: space-evenly;
}

.login-reg {
  width: 255px;
}
.login-reg span {
  margin-left: 10px;
}

.nav-text {
  user-select: none;
  width: 100%;
  height: 300px;
  background: #d8d8d9;
  text-align: center;
  font-size: 30px;
  line-height: 300px;
  font-weight: 500;
}

.nav-tips {
  width: 200px;
  height: 50px;
  background: #fff;
  border: 1px #d8d8d8 solid;
  border-radius: 10px;
  line-height: 50px;
  margin: -20px auto;
}
.conter {
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.conter-card {
  user-select: none;
  box-sizing: border-box;
  width: 380px;
  height: 300px;
  margin: 10px;
  border-radius: 8px;
  border: 1px #d8d8d8 solid;
  overflow: hidden;
}
.conter-card:hover {
  opacity: 0.85;
  transition: all 0.3s;
  transform: translateY(-8px);
  box-shadow: 0 0 5px 5px #d8d8d8;
}
.conter img {
  width: 380px;
  height: 200px;
}
.conter-msg {
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.conter-title {
  font-size: 20px;
  font-weight: 600;
  float: left;
}
.see {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.see i:hover {
  cursor: pointer;
  color: #e43f52;
}
.see span:hover {
  cursor: pointer;
  color: #2f55d4;
}
.el-backtop {
  position: fixed;
  right: 20px;
  bottom: 40px;
}

.goUP {
  user-select: none;
  width: 40px;
  height: 40px;
  border: 2px solid #d8d8d8;
  line-height: 40px;
  border-radius: 50%;
  position: fixed;
  right: 2%;
  bottom: 10%;
}
.goUP:hover {
  box-shadow: 0 0 5px 5px #3c4858;
}

.footer-msg {
  width: 100%;
  height: 100px;
  background: #202942;
  margin-top: 50px;
  font-size: 18px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>