 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let userSchema=new Schema({
 	// _id:{type:Number,required:true},
 	name:{type:String,required:true},
 	pass:{type:String,required:true},
 	mail:{type:String,required:true},
 	// shijian:{type:String,required:true}
 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let user=mongoose.model('users',userSchema);

module.exports=user
//抛出数据模型