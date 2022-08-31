import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function CustomerByCode() {
    const router = useRouter();
    return (
        <Layout title="Navegação Dinâmica">
            <div>Código = {router.query.code}</div>
            <div>Filial = {router.query.branch}</div>
        </Layout>
    )
}