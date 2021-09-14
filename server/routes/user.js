// 引入模块
const express = require('express');
// 引入数据库公共模块
const pool = require('pool');
// 创建路由器对象
const userRouter = express.Router();

// 登录模块
userRouter.post('/login', (req, res) => {
    console.log(req.body);
    res.send('hello');
})