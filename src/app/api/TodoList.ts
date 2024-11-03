import { apiClient } from "./config/ApiClient";
import { TodoListType, TodoType } from "../../types/TodoList";

export function getTodoListApiCall(): Promise<TodoListType> {
    return apiClient.get('/todos', {
        params: {
            limit: 10,
            skip: 0
        }
    });
}

export function addTodoApiCall(data: TodoType): Promise<void> {
    return apiClient.post('/todos/add', data);
}


export function deleteTodoApiCall(id: number): Promise<void> {
    return apiClient.delete(`/todos/${id}`);
}

export function updateTodoApiCall(id: number, updatedData: TodoType): Promise<TodoType> {
    return apiClient.put(`/todos/${id}`, updatedData);
}
