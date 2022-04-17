import { Request, Response } from "express";
import { Item } from "../models/Item";

export const ping = (_req: Request, res: Response) => {
    res.json({
        message: "pong",
    });
}

export const showAllTodos = async (_req: Request, res: Response) => {
    let todos = await Item.findAll();
    res.json({
        message: "GET alcançado com sucesso",
        list: todos 
    });
}

export const createNewTodo = async (req: Request, res: Response) => {
    if (req.body.title) {
        let newTodo = await Item.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });
        res.status(201).json({
            message: "Todo criado com sucesso", 
            item: newTodo 
        });
    }
    else {
        res.json({ error: "Dados não foram enviados" });
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    if (req.params.id) {
        try {
            await Item.update({
                title: req.body.title,
                done: req.body.done ? req.body.done : false,
            }, 
            { 
                where: { 
                    id: req.params.id 
                }
            });
            
            res.json({ message: "Atualizado com sucesso" });
        }
        catch (e){
            res.json({ error: e })
        }
    }
    else {
        res.json({
            message: "Erro! Não foi possível completar sua requisição",
        });
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    if (req.params.id) {
        try {
            let deletedTodo = await Item.destroy({
                where: {
                    id: req.params.id,
                }
            });

            res.json({ message: `${deletedTodo === 1 ? "Deletado com sucesso" : "Erro"}` })
        }
        catch (e) {
            res.json({ error: e })
        }
    }
}
