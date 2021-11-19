<template>
  <div class="pay">
    <div class="code">
      <div class="handle">
        <el-button @click="crateQrcode" v-if="isShow">生成二维码</el-button>
        <el-button @click="cleanCode" v-else>清除二维码</el-button>
      </div>
      <div id="qrcode" ref="qrcode" />
      <span>{{ link }}</span>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";

import axios from "axios";

export default {
  data() {
    return {
      isShow: true,
      // link: "https://www.baidu.com",
      link: "weixin://wxpay/bizpayurl?pr=p4lpSuKzz",
      //   link: "忠于祖国，忠于人民",
    };
  },

  created() {
    axios
      .get("/api/pay/yaojianlin/pay")
      .then((res) => {
        console.log(res.data);
        this.link = res.data;
      })
      .catch((err) => console.log(err));

    this.crateQrcode(); //先生成二维码
  },

  beforeMount() {
    this.payOrder(); //把信息写入二维码
  },

  methods: {
    // 把信息写入二维码
    payOrder() {
      this.innerVisible = null;
      this.qrcode = this.link;
      this.$nextTick(() => {
        this.crateQrcode();
      });
    },

    // 生成二维码
    crateQrcode() {
      this.cleanCode();
      this.isShow = false;
      this.link = "https://www.baidu.com";
      this.qr = new QRCode("qrcode", {
        width: 300, //宽度
        height: 300, // 高度
        text: this.qrcode, // 二维码内容
        render: "table", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
      });
    },

    //清除二维码
    cleanCode() {
      this.$refs.qrcode.innerHTML = "";
      this.link = "";
      this.isShow = true;
    },
  },
};
</script>

<style scoped>
.pay {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* background: brown; */
  /* display: flex;
    justify-content: center;
    align-items: center; */
}
.code {
  width: 400px;
  height: 800px;
  background: #d8d8d8;
  box-shadow: 0 0 5px 5px gray;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.code span {
  font-size: 30px;
  height: 30px;
}
.handle {
  display: flex;
  flex-direction: row;
}
#qrcode {
  width: 300px;
  height: 300px;
  margin: 100px auto;
}
</style>