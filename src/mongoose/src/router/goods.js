const express=require('express');
const Router=express.Router();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
Router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
Router.use(bodyParser.json())
//数据模型引入
const Goods=require('../mongo/model/goods.js')
//增加商品
//添加商品信息


Router.post('/addGoods',(req,res)=>{
// 1.接受数据
  let {goodsname,type,price,imgpath,num,username}=req.body
 Goods.insertMany({goodsname,type,price,imgpath,num,username})
 .then((data)=>{
 	res.send({err:0,msg:'插入成功',data:null})
 })
 .catch((err)=>{

 	console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })

})
//查询商品


Router.post('/getGoods',(req,res)=>{
  let username = req.body.username;
  Goods.find({username:username})
  .then((data)=>{
  	res.send({err:0,msg:'查询成功',data:data})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'查询错误',data:null})
  })

})
//修改商品

 // 
Router.post('/updateGoods',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改

  let id=req.body.id;
  let {goodsname,type,desc,price,imgpath,num}=req.body
  Goods.update({_id:id},{goodsname,type,price,imgpath,num})
  .then((data)=>{
  	res.send({err:0,msg:'修改成功',data:data})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'修改no成功',data:null})
  })

})
//删除商品


Router.post('/delGood',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改

  let id=req.body.id;
  // Goods.remove({_id:id})//正常的删除
  //let array=['5bdfe8b6b907c6a31b5aac37','5bdfe10748ecfa1380d368f0']
  //Goods.remove({_id:{$in:array}})//批量删除
  Goods.remove({_id:id})
  .then((data)=>{
  	res.send({err:0,msg:'删除功',data:null})
  })
  .catch((err)=>{
  	console.log(err)
  	res.send({err:-1,msg:'删除no成功',data:null})
  })

})

// 批量删除
Router.post('/alldelGood',(req,res)=>{
 let obj =req.body;
 console.log(obj)
 let arry =[];
 for(var i in obj){
    arry.push(obj[i]);
 }
  Goods.deleteMany({_id:{$in:arry}})
  .then((data)=>{
  res.send({err:0,msg:'删除成功',data:data});
  })
  .catch((err)=>{
    res.send({err:-1,msg:'删除失败',data:null});
  })
})
//数量改变
Router.post('/updateNum',(req,res)=>{
  //获取商品的唯一索引 主键（_id）
  // 获取修改的值
  // 执行修改
  let id=req.body.id;
  let {num}=req.body
  Goods.update({_id:id},{num})
  .then((data)=>{
    res.send({err:0,msg:'修改成功',data:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'修改no成功',data:null})
  })

})

module.exports=Router;