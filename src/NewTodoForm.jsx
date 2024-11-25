import {useRef} from "react"

export function NewTodoForm(props) {
    const inputRef = useRef()

    const {onSubmit} = props;


    function handleSubmit(e) {
        e.preventDefault()    
       
        if (inputRef.current.value === "") {return}

        onSubmit(inputRef.current.value)

    }


    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Todo</label>
                <input 
                type="text" 
                id="item"
                ref={inputRef}
                />
                <button className="btn">Add</button>
            </div>
        </form>
    )
}