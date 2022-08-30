import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <div className={styles.red}>
            <h1>Estilo usando Módulos CSS</h1>
            <Link href="/" >Voltar</Link>
        </div>
    )
}