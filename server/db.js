import mysql from "mysql2/promise"
import { PORT,DB_DATABASE,DB_PASSWORD,DB_HOST,DB_PORT,DB_USER } from "./config.js"
export const conexion = mysql.createPool({
  host:DB_HOST,
  user:DB_USER,
  password:DB_PASSWORD,
  database:DB_DATABASE,
  port:DB_PORT
})

