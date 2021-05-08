// Custom 404 Page
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <div className="content">
            <h1>404</h1>
            <h2>Ooooops! That page cannot be found :&#40;</h2>
            <p>Redirecting to <Link href="/">Homepage</Link> for more Mcmite goodness...</p>

            <style jsx>{`
                
            `}</style>
        </div>
    );
}

export default NotFound;