const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(require('cors')())
app.use(express.json())



mongoose.connect('mongodb://localhost:27017/project').then(res => console.log('数据库连接成功'))


//用户数据表
const Users = mongoose.model('Users', new mongoose.Schema({
    phone: {
        type: String,
        required: [true, '请输入手机号'],
        minlength: 11,
        maxlength: 11
    },
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        },
        required: [true, '请输入密码'],
    },
    createTime: {
        type: Date,
        default: Date.now()
    },
    articleId: {
        type: Array
    },
    name: String,
    city: String,
    sign: String,
    address: String

}))

//登录接口
app.post('/api/login', async (req, res, next) => {
    const user = await Users.findOne({
        phone: req.body.phone,
    })

    console.log(user);

    if (!user) {
        return res.status(202).send({
            statusCode: 202,
            status: 'error',
            tis: '该手机号未注册！'
        })
    }

    const isPasswordValid = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )

    const SECRET = 'token_secret'
    const token = jwt.sign({
        id: String(user._id)
    }, SECRET)

    if (!isPasswordValid) {
        console.log('密码错误');
        return res.status(201).send({
            statusCode: 201,
            status: 'error',
            tis: '密码错误！'
        })
    } else {
        console.log('密码正确');
        return res.status(200).send({
            userId: user._id,
            phone: user.phone,
            statusCode: 200,
            status: 'success',
            tis: '登录成功！',
            tokenId: token
        })
    }

    res.send(user)
})

//注册接口
app.post('/api/reg', async (req, res, next) => {

    const user = await Users.findOne({
        phone: req.body.phone,
    })

    if (user === null) {
        Users.create({
            phone: req.body.phone,
            password: req.body.password
        })
        res.status(203).send({
            statusCode: 203,
            status: 'success',
            tis: '注册成功'
        })
    } else if (user.phone === req.body.phone) {
        res.status(209).send({
            statusCode: 209,
            status: 'warning',
            tis: '该号码已注册'
        })
    }
})

//查询用户信息
app.post('/api/userinfo', async (req, res, next) => {

    console.log('请求的', req.body.phone);

    const userinfo = await Users.find({
        phone: req.body.phone
    })
    // console.log(userinfo);
    res.status(200).send(userinfo)
})

// 修改用户信息
app.put('/api/editUser', async (req, res, next) => {

    const userinfo = await Users.findOne({
        phone: req.body.phone
    })

    // console.log(userinfo.phone);
    // // console.log('请求：', req.body);

    Users.updateOne({
        phone: userinfo.phone
    }, {
        // phone: req.body.phone,
        name: req.body.name,
        city: req.body.city,
        address: req.body.address,
        sign: req.body.sign
    }).then(res => console.log(res))

    res.status(200).send({
        statusCode: 200,
        status: 'success',
        tis: '修改成功'
    })

})


const Article = mongoose.model("Article", new mongoose.Schema({
    title: { //标题
        type: String,
        required: true
    },
    content: { //内容
        type: String,
        required: true
    },
    author: { //坐着
        type: String
    },
    see: { //查看人数
        type: Number
    },
    likes: {
        type: Number
    },
    createTime: { //发布时间
        type: Date,
        default: Date.now()
    },
}))

Article.create({
    title: 'wenzhang',
    content: '11111111'

}).then(res => {
    console.log(res)
})

app.listen(3000, () => {
    console.log('监听端口：3000');
})