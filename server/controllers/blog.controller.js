//Creando el crud de insertar,eliminar,actualizar y mostrar el blog
import { query } from "express";
import { conexion } from "../db.js";

export const getBlog = async(req,res)=>{
  try{
    const id = req.params.id
    const [response] = await conexion.query(
      "select * from blog where id = ? ",[id]
    )
    console.log(response[0])
    res.json(response)
  }catch(error){
    console.error(error)
  }
}

export const postBlog = async (req,res)=>{
  const {title,content,author_id,category,image_url} = req.body
  try{
    const [response] = await conexion.query("insert into  blog(title,content,author_id,category,image_url) values (?,?,?,?,?)",[title,content,author_id,category,image_url]);
    res.send("insertando el blog")
    console.log(response)
  }catch(error){
    console.error(error)
  }
}

export const updateBlog = async (req,res)=>{
  const id = req.params.id;
  try{
    const [response] = await conexion.query("update blog set ? where id= ? ",[req.body,id])
    console.log(response)
    res.send("actualizando el blog")
  }catch(error){
    console.error(error)
  }
}

export const deleteBlog = async(req,res)=>{
  const id= req.params.id;
  try{
    const [response] = await conexion.query('delete from blog where id = ?',id)
    console.log(response)
    res.send("eliminando el blog")
  }catch(error){
    console.error(error)
  }
}

export const getBlogs = async(req,res)=>{
  try{
      const[response]= await conexion.query("select * from blog")
      console.log(response)
      res.json(response)
  }catch(error){
    console.error(error)
  }
}