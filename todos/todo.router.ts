import express, { Request, Response } from "express";

export const todosRouter = express.Router();


todosRouter.get('/', async (req : Request, res : Response) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send();
  }
});

//Get By Id

//Post

//Put

//Delete


