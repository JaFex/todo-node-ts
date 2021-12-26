import express from 'express';
import { todosRouter } from './todos/todo.router';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Well done!');
});

app.use('/api/todo', todosRouter)

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})