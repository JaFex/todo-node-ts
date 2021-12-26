import express, { Request, Response } from "express";

export const todosRouter = express.Router();


todosRouter.get('/', async (req : Request, res : Response) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.get('/:id', async (req : Request, res : Response) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.post('/', async (req : Request, res : Response) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.put('/:id', async (req : Request, res : Response) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send();
  }
});

todosRouter.delete('/:id', async (req : Request, res : Response) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send();
  }
});


