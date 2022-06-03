import Head from "next/head"
import { FC } from "react"

interface Props {
    children: React.ReactNode;
}

export const Layout:FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title> Search hotel </title>
                <meta name="author" content="Pablo Palou"/>
                <meta name="description" content={`Search the best hotel for you!`}/>
                <meta name="keywords" content={`hotel, simplenight, search`}/>
            </Head>

            <main>
                { children }
            </main>
        </>
    )
}
