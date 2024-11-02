import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Checkbox, Divider } from '@mui/material';
import {TodoType} from "../../types/TodoList";


export default async function Page(){

    const response = await fetch('https://dummyjson.com/todos?limit=10&skip=0',{cache: 'no-cache'});
    const data = await response.json();
    console.log('data', data)
    const todos = data.todos

    return (
        <div className={'flex flex-col w-fit mx-auto rounded-xl my-10'}>
            <h1 className={'text-4xl font-bold text-gray-700 text-center'}>To Do List</h1>
            <List sx={{bgcolor: 'background.paper'}}>
                {todos.map((todo: TodoType, index: number) => (
                    <div key={todo.id}>
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox edge="start" checked={todo.completed}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={todo.todo}
                                secondary={todo.completed ? "Completed" : "Pending"}
                                primaryTypographyProps={{
                                    style: {textDecoration: todo.completed ? 'line-through' : 'none'}
                                }}
                            />
                        </ListItem>
                        {index < todos.length - 1 && <Divider/>}
                    </div>
                ))}
            </List>
        </div>
    );
}
