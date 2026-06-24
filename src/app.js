const express = require("express");
const app = express();

const conectarDB = require("./config/db");
const { conectarRedis } = require("./config/redis");

const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

require("dotenv").config();

const PORT = process.env.PORT || 3000;


app.use(express.json());

const routerPublicaciones = require("./routes/publicaciones.routes");
const routerUsuarios = require("./routes/usuarios.routes");
const routerEtiqueta = require("./routes/etiquetas.routes");
const routerComentarios = require("./routes/comentarios.routes");
const routerFollows = require("./routes/follow.routes");


app.use("/publicaciones", routerPublicaciones);
app.use("/usuarios", routerUsuarios);
app.use("/etiquetas", routerEtiqueta);
app.use("/comentarios", routerComentarios);
app.use("/seguidos", routerFollows);


app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));


app.use('/uploads', express.static('uploads'));

conectarRedis();
conectarDB(); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});