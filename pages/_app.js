import '../styles/globals.css';

import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({ subsets: ['latin'] })

export default function App ( {Component, pageProps} ) {
    return (
        <main className={exo2.className}>
            <Component {...pageProps} />
        </main>
    )
};