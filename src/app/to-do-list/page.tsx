"use client";

import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Checkbox, Divider, TextField, Button, Box } from '@mui/material';
import { TodoType } from "../../types/TodoList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodoApiCall, deleteTodoApiCall, getTodoListApiCall, updateTodoApiCall } from "../api/TodoList";
import { Controller, useForm } from "react-hook-form";

export default function Page() {
    const queryClient = useQueryClient();
    const { control, handleSubmit, reset, formState: { errors } } = useForm<{ todoTitle: string }>();

    const { data: todosData, isLoading, isError } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodoListApiCall
    });

    const addTodoMutation = useMutation({
        mutationFn: addTodoApiCall,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            reset();
        }
    });

    const deleteTodoMutation = useMutation({
        mutationFn: deleteTodoApiCall,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    const updateTodoMutation = useMutation({
        mutationFn: ({ id, updatedData }: { id: number, updatedData: TodoType }) => updateTodoApiCall(id, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    const onSubmit = (data: { todoTitle: string }) => {
        const newTodo: TodoType = {
            id: (todosData?.todos.length ?? 0) + 1,
            todo: data.todoTitle,
            completed: false,
            userId: 13,
        };
        addTodoMutation.mutate(newTodo);
    };

    const toggleTodoCompletion = (todo: TodoType) => {
        const updatedTodo: TodoType = { ...todo, completed: !todo.completed };
        updateTodoMutation.mutate({ id: todo.id, updatedData: updatedTodo });
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data.</p>;

    return (
        <div className="flex flex-col w-fit mx-auto rounded-xl my-10">
            <h1 className="text-4xl font-bold text-gray-700 text-center">To Do List</h1>
            <List>
                {todosData?.todos.map((todo: TodoType) => (
                    <div key={todo.id}>
                        <ListItem className={'gap-3'}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    onChange={() => toggleTodoCompletion(todo)}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={todo.todo}
                                secondary={todo.completed ? "Completed" : "Pending"}
                                primaryTypographyProps={{
                                    style: { textDecoration: todo.completed ? 'line-through' : 'none' }
                                }}
                            />
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={() => deleteTodoMutation.mutate(todo.id)}
                            >
                                Delete
                            </Button>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-3 items-center mt-4"
            >
                <Controller
                    name="todoTitle"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Todo title is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Add more to do"
                            margin="normal"
                            error={!!errors.todoTitle}
                            helperText={errors.todoTitle ? (errors.todoTitle.message as string) : ''}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className="w-fit"
                >
                    Add
                </Button>
            </Box>
        </div>
    );
}
