import styles from './index.module.css'
import { Link } from 'react-router-dom'

export function NotFound(){
    return(
        <div className={styles.container}>
            <h1 >Erro 404. Página não encontrada. </h1>
            <Link to="/">
                Acessar cripto moedas
            </Link>
        </div>
    )
}