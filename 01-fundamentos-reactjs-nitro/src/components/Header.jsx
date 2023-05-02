import styles from '../css/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export function Header() {

    return (
        <header className={styles.header}>

            <FontAwesomeIcon icon={faLaptopCode} className={styles.icon}/>
            <p>Publicações </p>
            
        </header>
    );

}