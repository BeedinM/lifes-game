import styles from './celula.module.css';

export default function Celula({ item, id }) {
    return (
        <span id={id} className={item === 1 ? styles.celulaViva : styles.celulaMorta}>
            <p className={styles.numero}>{item}</p>
        </span>
    )
}