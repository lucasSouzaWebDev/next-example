import styles from '../styles/Styled.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Styled() {
    return (
        <Layout title="Exemplo de CSS Modularizado">
            <div className={styles.red}>
                <h1>Estilo usando Módulos CSS</h1>
            </div>
        </Layout>
        
    )
}