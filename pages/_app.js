import { ThemeProvider } from 'next-themes'

import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider themes={['dark', 'light']} defaultTheme='dark' storageKey='theme'>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}