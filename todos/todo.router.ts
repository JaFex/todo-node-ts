import express, { Request, Response } from "express";
import * as TodoController from "./todo.controller";
import { CreateTodo } from "./todo.dto";

export const todosRouter = express.Router();


todosRouter.get('/', async (req : Request, res : Response) => {
  try {
    let todos = await TodoController.findAll();
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.get('/:id', async (req : Request, res : Response) => {
  try {
    let todos = await TodoController.find(parseInt(req.params.id));
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.post('/', async (req : Request, res : Response) => {
  try {
    const todo : CreateTodo = req.body;
    const newTodo = await TodoController.create(todo);
    res.status(200).send(newTodo);
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.put('/:id', async (req : Request, res : Response) => {
  try {
    const todo : any = req.body;
    const todoUpdated = await TodoController.update(parseInt(req.params.id), todo);
    res.status(200).send(todoUpdated);
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.delete('/:id', async (req : Request, res : Response) => {
  try {
    const todo = await TodoController.remove(parseInt(req.params.id));
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send();
  }
});


