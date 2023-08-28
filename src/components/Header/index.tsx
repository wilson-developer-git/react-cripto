import { Link } from 'react-router-dom'
import logoimg from '../../assets/logo.svg'
import styles  from './index.module.css'

export function Header(){
    return(
      <header className={styles.container}>
        <div>
            <Link to="/">
                <img src={logoimg} alt="Logo cripto"/>
            </Link>
        </div>
      </header>  
    )
}