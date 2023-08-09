import  {Router} from "express"
import { getComm, postComm, updateComm , deleteComm } from "../controllers/commentary.controller.js"
const route = Router()

route.get("/com/:id",getComm)
route.post("/com",postComm)
route.put("/com/:id",updateComm)
route.delete("/com/:id",deleteComm)

export default route