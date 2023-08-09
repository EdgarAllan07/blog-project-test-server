import { conexion } from "../db.js";

export const getComm = async(req,res)=>{
  const id = req.params.id
  try{
    const [result] =  await conexion.query("select * from commentary where id = ?",id)
    res.send("comentario obtenido")
    console.log(result)
  }catch(error){
    console.error(error)
  }
}

export const postComm = async(req,res)=>{
  const {author_id,blog_id,comment} = req.body
  try{
    const [response] = await conexion.query("insert into commentary(author_id,blog_id,comment) values (?,?,?);",[author_id,blog_id,comment])
    console.log(response)
    res.send("insercion completa")
  }catch(error){
    console.error(error)
  }
}

export const updateComm = async(req,res)=>{
  const id = req.params.id
  try{
    const [response] = await conexion.query("update commentary set ?  where id = ? ",[req.body,id])
    console.log(response)
    res.send("Actualizacion completa")
  }catch(error){
    console.error(error)
  }
}

export const deleteComm = async(req,res)=>{
  const id = req.params.id
  console.log(id)
  try{
    const [response] = await conexion.query("delete from commentary  where id =  ? ",id)
    console.log(response)
     res.send("Eliminacion completa")
  }catch(error){
    console.error(error)
  }
}
