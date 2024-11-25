export function TodoItem (props) {

    const {deleteFunc, toggleFunc, completed, id, title} = props;

    return (
        <>
            <li>
                <label>
                    <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={e => toggleFunc(id, e.target.checked)}
                    />
                    {title}
                </label>
                <button className="btn btn-danger" onClick={() => deleteFunc(id)}>Delete</button>
            </li>
        </>
    )
}