// 引入模块
const express = require('express');
// 引入数据库公共模块
const pool = require('../utils/pool');
// 创建路由器对象
const userRouter = express.Router();

// 登录模块
userRouter.post('/login', (req, res) => {

    let reqObj = req.body;

    let strSql = 'SELECT* FROM users WHERE uname=? and upwd=?'

    pool.query( strSql, [reqObj], (err,data) => {

        console.log(data);
        res.send({code:200, msg:'登陆成功'})
    })
})

module.exports = userRouter;