import React from "react";
import "./global.css";
import QueryProvider from './context/QueryClientProvider';

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <QueryProvider>
            {children}
        </QueryProvider>
        </body>
        </html>
    )
}