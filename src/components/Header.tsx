import styles from './Header.module.css'
import Logo from '../assets/logo.png'

const Header = () => {
    return(
        <header className={styles.header}>
            <img 
                src={Logo} 
                alt="Logo escrito 'todo' com um desenho de foguete na frente" 
            />
        </header>
    )
}

export default Header