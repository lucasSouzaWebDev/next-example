import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar(props) {
    return (
        <Link href={props.to}>
            <div className={styles.navbar} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.label}
            </div>
        </Link>
    )
}