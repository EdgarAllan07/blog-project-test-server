import {Router} from "express"
import { postUser,getUser, updateUser,logUser,getHome } from "../controllers/user.controller.js"
const route = Router()
//Conectando la base de datos Usuario

route.post("/user",postUser)
route.get("/user/:id",getUser)
route.put("/user/:id",updateUser)
route.get("/user/:email/:password",logUser)
route.get("/home",getHome)
export default route