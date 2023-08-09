import { conexion } from "../db.js"

export const postUser = async (req, res) => {
  const { name, email, password, birthdate, image } = req.body
  try {
    const [response] = await conexion.query("insert into  users(name,email,password,birthdate,image) values (?,?,?,?,?);", [name, email, password, birthdate, image])
    console.log(response)
    res.send("Se ha realziado insercion")
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async (req, res) => {
  const id = req.params.id
  try {
    const [response] = await conexion.query("select name,email,password,date_format(birthdate,'%Y-%m-%d') as birthdate,image from users where id = ?", [id])
    console.log(response[0])
    res.json(response[0])
  } catch (error) {
    console.error(error)
  }
}

export const updateUser = async (req, res) => {
  const id = req.params.id
  try {
    const [response] = await conexion.query("update users set ? where id = ?", [req.body, id])
    console.log(response)
    res.send("se ha actualizado")
  } catch (error) {
    console.error(error)
  }
}

export const logUser = async (req, res) => {
  const { email, password } = req.params
  console.log(req.params)
  try {
    const [response] = await conexion.query("select * from users where email=? and password =? ", [email, password])
    res.json(response)

  } catch (error) {
    console.log(error)
  }
}

export const getHome = async (req, res) => {
  try {
    const [response] = await conexion.query('select users.id, users.name,users.image ,blog.id as blog,blog.title,blog.author_id,date_format(blog.create_at,"%d-%m-%Y") as create_at from users inner join blog on users.id = blog.author_id')
    //Importante siempre que hace una consulta debe siempre ponerse un res.json
    res.json(response)
    console.log(response)
  } catch (error) {
    console.error(error)
  }

}