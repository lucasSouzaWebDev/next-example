import Layout from '../components/Layout'
import Header from "../components/Header"

export default function Example() {
    return (
        <Layout title="Usando componentes">
            <Header title="titulo 1" />
            <Header title="titulo 2" />
        </Layout>
    )
}