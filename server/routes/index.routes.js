import {Router} from "express"
import { testPing,conexionDB } from "../controllers/index.controller.js"

 const route = Router()

 //Pruebas con Nodejs y Mysql2
route.get("/ping",testPing)
route.get("/",conexionDB)


export default route