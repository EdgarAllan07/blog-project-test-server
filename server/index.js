import express from "express"
import indexRouter from "./routes/index.routes.js"
import userRouter from "./routes/user.routes.js"
import blogRouter from "./routes/blog.routes.js"
import commRouter  from "./routes/commentary.routes.js"
import cors from "cors"

const port = 4000
const app = express()

// Configuración CORS
app.use(cors({
  origin: "http://localhost:3000"
}));

// Middleware para parsear JSON en solicitudes
app.use(express.json());

// Rutas
app.use(blogRouter)
app.use(indexRouter)
app.use(userRouter)
app.use(commRouter)

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});