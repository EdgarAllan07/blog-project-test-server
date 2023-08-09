import { conexion } from "../db.js"

export const testPing = (req,res)=>{
  res.send("pong")
}

export const conexionDB = async (req,res)=>{
  const [response] = await conexion.query(
    "select 2+2 as result"
  )
  res.send("it's Working")
  console.log(response[0])
}