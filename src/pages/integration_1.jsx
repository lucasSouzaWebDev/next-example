import { useState } from 'react';
import Layout from '../components/Layout'

export default function Integration() {

    const [code, setCode] = useState(1)
    const [customer, setCustomer] = useState({})

    async function getCustomer(){
        const response = await fetch(`http://localhost:3000/api/customers/${code}`)
        const data = await response.json()
        setCustomer(data)

        /* fetch(`http://localhost:3000/api/customers/${code}`)
            .then(response => response.json())
            .then(data => setCustomer(data)) */
    }

    return (
        <Layout title="Integração 1">
            <div>
                <input type="number" value={code} onChange={e => setCode(e.target.value)} />
                <button onClick={getCustomer}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {customer.id}</li>
            </ul>
        </Layout>
    )
}