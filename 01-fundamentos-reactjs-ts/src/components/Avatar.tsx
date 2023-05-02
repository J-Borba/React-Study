import { ImgHTMLAttributes } from 'react';
import styles from '../css/Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
}

export function Avatar({...props}:AvatarProps) {

    return (

        <div className={styles.avatarContainer}>
            <img
                className={styles.avatar} alt="FotoPerfil"
                {...props}
            />
        </div>

    );

}