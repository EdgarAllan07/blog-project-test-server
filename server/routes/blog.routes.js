import {Router} from "express"
import { getBlog,postBlog,updateBlog,deleteBlog,getBlogs } from "../controllers/blog.controller.js"
const route = Router()

route.get("/blog/:id",getBlog)
route.get("/blog/",getBlogs)
route.post("/blog",postBlog)
route.delete("/blog/:id",deleteBlog)
route.put("/blog/:id",updateBlog)
export default route
