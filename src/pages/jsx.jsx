import Layout from '../components/Layout'

export default function Jsx() {
    const titulo = <h1>Jsx é um conceito Central</h1>
    return (
        <Layout title="Entendendo o JSX">
            <div>
                {titulo}
            </div>
        </Layout>

    )
}