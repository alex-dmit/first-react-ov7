import styles from './List.module.css'
/**
 * @param {PostsListProp} props 
 */
export default function List(props) {
    const liArray = props.list.map(post => {
        return <li key={post.id}>
            <span className={styles.title}>{post.title}</span>: {post.body}
        </li>
    })
    return <ul>
        {liArray}
    </ul>
}

