import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <h1 className="title">Other page</h1>
            <p className="msg">これは別のページです</p>
            <div>
                <Image src="/food_konbini_onigiri.png" width={200} height={200} />
            </div>
            <div>
                <Link href="/">Back</Link>
            </div>
        </main>
    )
}