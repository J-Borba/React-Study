import styles from '../css/Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>

            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>

                <Avatar src="https://avatars.githubusercontent.com/u/60452036?v=4"/>

                <strong>João Borba</strong>
                <span>Systems Analyst</span>
            </div>

            <footer>
                <a href="mailto:joao3borba3@gmail.com">
                    Enviar mensagem
                </a>
            </footer>
        </aside>
    );
}