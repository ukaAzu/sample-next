import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1 className="title">Other page</h1>
            <p className="msg">これは別のページです</p>
            <div>
                <Link href="/">Back</Link>
            </div>
        </main>
    )
}