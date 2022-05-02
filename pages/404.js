import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'
const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go();
            router.push("/")
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oops</h1>
            <h2>This page cannot be found</h2>
            <Link href="/"><a>Homepage</a></Link>
        </div>
    );
}

export default NotFound;

