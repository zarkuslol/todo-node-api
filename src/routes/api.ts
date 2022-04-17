import { Router } from "express";
import bodyParser from "body-parser";

import * as ApiController from "../controllers/apiController";

const api = Router();
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

api.get("/ping", ApiController.ping);
api.get("/todo", ApiController.showAllTodos);
api.post("/todo", ApiController.createNewTodo);
api.put("/todo/:id", ApiController.updateTodo);
api.delete("/todo/:id", ApiController.deleteTodo);

export default api;
