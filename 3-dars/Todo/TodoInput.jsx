
import {v4} from "uuid"
export const TodoInput = ({todo ,setTodo}) => {
    const handleKey = (event) => {
        
        if(event.keyCode === 13 ) {
        
            let todo ={
                name : "salom",
                id:v4()
            }
            setTodo((todos) => [...todos, todos])
        }
    }
    return (
        <input type="text" className="form-control w-50 mx-auto" onKeyUp={handleKey} />
    )
}