import React from "react";
import "./global.css";
import 'react-toastify/dist/ReactToastify.css'

import QueryProvider from '../context/QueryClientProvider';
import {ToastContainer} from "react-toastify";
import {AuthContextProvider} from "../context/AuthContext";


export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <QueryProvider>
            <AuthContextProvider>
                {children}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    theme="dark"
                    className={'custom-toast-container'}
                />
            </AuthContextProvider>
        </QueryProvider>
        </body>
        </html>
    )
}