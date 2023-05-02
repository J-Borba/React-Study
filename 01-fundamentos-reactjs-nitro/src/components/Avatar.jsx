import styles from '../css/Avatar.module.css'

export function Avatar(props) {

    return (

        <div className={styles.avatarContainer}>
            <img className={styles.avatar} src={props.src} alt="FotoPerfil" />
        </div>

    );

}