export interface TodoListType {
    todos: TodoType[]
    total: number
    skip: number
    limit: number
}

export interface TodoType {
    id: number
    todo: string
    completed: boolean
    userId: number
}
