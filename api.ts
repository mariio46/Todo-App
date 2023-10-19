import { Task } from './types/tasks';

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<Task[]> => {
    const response = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
    const todos = await response.json();
    return todos;
};

export const addNewTodo = async (todo: Task): Promise<Task> => {
    const response = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    const NewTodo = await response.json();
    return NewTodo;
};

export const updateTodoStatus = async (todo: Task): Promise<Task> => {
    const response = await fetch(`${baseUrl}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    const todoStatusUpdated = await response.json();
    return todoStatusUpdated;
};

export const deleteTodo = async (id: string): Promise<any> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
    });
};
