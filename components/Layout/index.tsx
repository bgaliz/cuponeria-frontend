import Head from 'next/head';
import React from 'react';

export const Layout: React.FC = ({children}) => {
    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div>{children}</div>
        </div>
    )
}