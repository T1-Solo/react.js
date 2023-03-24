import { TodoItem } from "./TodoItem"

export const TodoLists =({todo}) => {
    console.log(todo)
    return(
        <>
        {todo?.length? 
        <ul className=" list-unstyled w-50 mx-auto mt-3 p-3 text-center border rounded">
           {todo?.map((item) => (
            <TodoItem id={item.id} key={item.id}/>
           ))}
        </ul>
        : false}
        </>
    )
}