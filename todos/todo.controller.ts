import { CreateTodo } from "./todo.dto";
import { Todo } from "./todo.interface";

const todos: Todo[] = [
    {
        id: 1,
        title: 'Todo Test',
        description: 'Juts a Description'
    }
];

const findIndex = async (id: number): Promise<number> => todos.findIndex(x => x.id === id);

export const findAll = async (): Promise<Todo[]> => todos;

export const find = async (id: number): Promise<Todo | undefined> => todos.find(elem => elem.id === id);

export const create = async (newTodo: CreateTodo): Promise<Todo> => {
    const id = new Date().valueOf();
    const todo: Todo = {
        id,
        ...newTodo,
    };
    todos.push(todo);
    return todo;
};

export const update = async (id: number, todoUpdate: CreateTodo): Promise<Todo> => {
    let index = await findIndex(id);
    if (index < 0) {
        throw Error('Todo not found!');
    }
    let todo = todos[index];
    Object.assign(todo, todoUpdate);
    return todo;
};

export const remove = async (id: number): Promise<Todo> => {
    let index = await findIndex(id);
    if (index < 0) {
        throw Error('Todo not found!');
    }
    const todo = todos[index];
    todos.splice(index, 1);
    return todo;
  };