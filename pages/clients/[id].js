import { useRouter } from 'next/router'

function ClientPage() {
    const router = useRouter() 

    return <div>
        <h1>The Client's Page</h1>
    </div>
}

export default ClientPage