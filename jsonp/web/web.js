/* 
1、导入express对象
2、创建服务器对象
3、监听端口
4、路由监听

*/
const  express=require('express')
const  app=express()

app.use(express.static('./views'))

app.listen(2001,()=>{
    console.log('http://127.0.0.1:2001')
})


