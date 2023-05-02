import styles from '../css/Post.module.css'
import { Avatar } from './Avatar';

export function Post() {

return (

<article className={styles.post}>

    <header>

        <div className={styles.author}>

            <Avatar src="https://avatars.githubusercontent.com/u/60452036?v=4"/>

            <div className={styles.authorInfo}>
                <strong>João Borba</strong>
                <span>System Analyst</span>
            </div>
            
        </div>

        <time title='28 de abril às 20:11h' dateTime='2023-04-28 08:10:36pm'>Publicado há 1h</time>
    </header>

    <div className={styles.content}>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio aliquid commodi sunt accusamus hic adipisci</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error inventore odio suscipit vero quae distinctio eum quaerat itaque sed? Quos aliquam illo voluptatibus eaque nulla, omnis consectetur quis nam rem!</p>
        <a href="#">#LoremIpsumELegal</a> 
        <a href="#">#Testando123</a>
        <a href="#">#OlhaQueLegal</a>
    </div>


    <form className={styles.commentForm}>
        <strong>Deixe seu Feedback!</strong>
        <textarea 
            placeholder='Deixe um comentário'
        />

        <div className={styles.btnContainer}>
            <button type="submit">Publicar</button>
        </div>
    </form>
</article>

);
}