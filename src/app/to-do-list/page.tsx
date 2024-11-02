import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Checkbox, Divider } from '@mui/material';

export default function Page(){

    const todos = [
        { id: 1, todo: "Do something nice for someone you care about", completed: false },
        { id: 2, todo: "Memorize a poem", completed: true },
        { id: 3, todo: "Watch a classic movie", completed: true },
        { id: 4, todo: "Watch a documentary", completed: false },
        { id: 5, todo: "Invest in cryptocurrency", completed: false }
    ];

    return (
        <div className={'flex flex-col w-fit mx-auto rounded-xl'}>
            <h1 className={'text-4xl font-bold text-gray-700 text-center mt-20'}>To Do List</h1>
            <List sx={{ bgcolor: 'background.paper' }}>
                {todos.map((todo, index) => (
                    <div key={todo.id}>
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox edge="start" checked={todo.completed} />
                            </ListItemIcon>
                            <ListItemText
                                primary={todo.todo}
                                secondary={todo.completed ? "Completed" : "Pending"}
                                primaryTypographyProps={{
                                    style: { textDecoration: todo.completed ? 'line-through' : 'none' }
                                }}
                            />
                        </ListItem>
                        {index < todos.length - 1 && <Divider />}
                    </div>
                ))}
            </List>
        </div>
    );
}
