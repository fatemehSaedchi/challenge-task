"use client";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "../api/Auth";
import {toast} from "react-toastify";
import {useUser} from "../../context/AuthContext";

interface FormData {
    username: string;
    password: string;
}

export default function Page() {

    const {login} = useUser()

    const { control, handleSubmit, formState: { errors } } = useForm();

    const mutate = useMutation({mutationFn: loginApiCall})

    const onSubmit = (data: FormData) => {
        mutate.mutate(data,{onSuccess: (response)=>{
            console.log('response:', response)
            toast.success('you are login')
                login(response.accessToken, response.firstName)
            },onError: (error)=>{
            toast.error('username or password is wrong')
            }})
    };

    return (
        <div>
            <div className={'flex flex-col justify-center items-center w-fit mx-auto mt-20 shadow shadow-gray-700 rounded-xl p-5'}>
                <h1 className={'text-4xl font-bold mb-3 text-gray-700'}>Login</h1>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ width: '100%', maxWidth: 360 }}
                >
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Username is required"
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Username"
                                margin="normal"
                                autoComplete="username"
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message as string : ''}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Password is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                autoComplete="current-password"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message as string : ''}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={'bg-gray-700 mt-2 font-semibold py-3'}
                    >
                        Login
                    </Button>
                </Box>
            </div>
        </div>
    );
}