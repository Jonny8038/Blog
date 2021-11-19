module.exports = {
    devServer: {
      proxy: {
        "/api": { //自定义
        //   target: "http://localhost:3000", //这里可以跟随项目实际部署服务器来
          target: "http://192.168.110.221:9105", //这里可以跟随项目实际部署服务器来
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            "^/api": ""//自定义
          }
        }
      }
    }
  }