"use client";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

interface Props {

}

export default function Page({}: Props) {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Enter a valid email"
                            }
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Email"
                                margin="normal"
                                autoComplete="email"
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message as string : ''}
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