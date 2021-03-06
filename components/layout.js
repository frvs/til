import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const title = 'today i learned (hoje eu aprendi)'
export const siteTitle = 'TIL Notes'

export default function Layout({ children, home }) {

    const { theme, setTheme } = useTheme()

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Anotações do que Eu Aprendi Hoje. Feito por Lucas Frois"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                <div
                    className={styles.lightbulb}
                    style={
                        {
                            display: `block`,
                            width: `100%`,
                            animationDuration: `1s`,
                            animationFillMode: `both`,
                            animationName: `fadeIn`,
                            cursor: `pointer`
                        }
                    }

                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <i style={{ fontSize: `36px` }} className="far fa-lightbulb"></i>
                </div>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/icon.png"
                            height={144}
                            width={144}
                            alt={title}
                        />
                        <h1 className={utilStyles.heading2Xl}>{title}</h1>
                        <h2 className={utilStyles.headingMd}>feito por <a target="_blank" href="https://frvs.com.br" rel="noreferrer">frvs</a></h2>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/icon.png"
                                    height={144}
                                    width={144}
                                    alt={title}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{title}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Voltar para o início</a>
                    </Link>
                </div>
            )}
        </div>
    )
}