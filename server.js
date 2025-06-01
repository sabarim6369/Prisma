import express from 'express';
const app=express();
import { PrismaClient } from '@prisma/client';
const prisma=new PrismaClient();
const fun = async () => {
  try {
    const post = await prisma.post.create({
      data: {
        title: "Hello",
        body: "hello"
      }
    });
   
    console.log("Post created:", post);
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

fun()
const addauthmodal=async()=>{
    const data=await prisma.auth.create({
        data:{
name:"sabari",
email:"sabari@gmail.com",
password:"1234"
        }
    })
    console.log(data);
}
addauthmodal();
app.post("/",(req,res)=>{
    
})
app.listen(3000,()=>{
    console.log('server running in port 3000');
})