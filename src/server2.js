const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const email=require('./mongoose/src/mongo/model/sendmail.js')
console.log(email);
const path =require('path');


const db=require('./mongoose/src/mongo/mongoose.js')
// const mysql=require('./src/mysql/test.js')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'./public')))
 app.use('/admin',express.static(path.join(__dirname,'./admin')))
  //路由
  const adminRouter=require('./mongoose/src/router/admin.js')
  // const uploadRouter=require('./src/router/upload2.js')
  const goodsRouter=require('./mongoose/src/router/goods.js')

  app.use('/admin',adminRouter)
  // app.use('/upload',uploadRouter)
   app.use('/goods',goodsRouter)
app.listen(4000,()=>{
	console.log('server start in port'+4000);
})