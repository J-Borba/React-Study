export function Post(props) {

    return (
        <div className="card">
            <strong>
                <h3>{props.author}</h3>
            </strong>

            <p>{props.content}</p>
        </div>
    )
} 