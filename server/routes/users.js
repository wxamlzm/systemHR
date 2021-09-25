// 引入模块
const express = require('express');
// 引入数据库公共模块
const pool = require('../utils/pool');
// 创建路由器对象
const usersRouter = express.Router();

// 登录模块
usersRouter.post('/login', (req, res, next) => {
    let reqObj = req.body;
    console.log(reqObj);
    let strSql = 'SELECT* FROM users WHERE uname=? and upwd=?'

    pool.query( strSql, [reqObj.uname, reqObj.upwd], (err,data) => {
        if(err){
            next(err);
            return
        }
        console.log('验证成功');
        let json = {
            code: 200,
            msg: '登录成功',
            data: data
        }
        res.send(json)
    });
}); 

module.exports = usersRouter;