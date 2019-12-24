const  express=require('express')
const  app=express()

const  cors=require('cors')
app.use(cors())

/* 2、设置响应头  */

app.get('/aa',(req,res)=>{
    res.send('fn({id:1,name:"jack"})')
})

app.get('/bb',(req,res)=>{ 
    res.send('fn2({id:2,name:"rose"})')
})
app.listen(2002,()=>{
    console.log('http://127.0.0.1:2002')
})