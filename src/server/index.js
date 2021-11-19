const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017').then(res=>console.log('数据库连接成功'))
