// 引入连接池
const pool = require('../utils/pool.js');

var usersController = 
{
    // 用户界面登录数据库处理
    login:(req,res,next) => {
        // 处理接收数据
        let reqObj = req.body;

        // 执行登录验证逻辑
        let strSql = 'SELECT * FROM users WHERE uname=? AND upwd=?';
        // test
        console.log(reqObj.uname, reqObj.upwd);
        
        pool.query(strSql, [reqObj.uname, reqObj.upwd], (err, data) =>{

                // if(err){
                //     next(err)
                //     return;
                // }
                let json = {};

                if(1 == data.length){
                    json = {
                        code: '200',
                        msg: '登录成功'
                    }
                    res.send(json)
                }else{
                    json = {
                        code: '202',
                        msg: '登录失败'
                    }
                    res.send(json)
                }
        })
    },

    
}

module.exports = usersController;