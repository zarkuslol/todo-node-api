import express from "express";
import dotenv from "dotenv";
import routes from "./routes/api";

dotenv.config();

const server = express();

server.use(routes);

server.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
})
