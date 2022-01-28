import Head from "next/head";
import Navbar from "./Navbar";
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>David Adewole</title>
                <meta name="description" content="Portfolio App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Navbar />
                {children}
            </div>
        </>
    );
}
