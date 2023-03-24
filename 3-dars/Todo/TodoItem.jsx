export const TodoItem = () => {
    return (
        <li className="d-flex mt-2 pb-2 border-bottom justify-content-between align-items-center">
        <div className="d-flex align-items-center">
            <input type="checkbox" className="form-check-input mx-2" />
            <h3>name</h3>
        </div>
        <div>
            <button className="btn btn-success mx-2">Edit</button>
            <button className="btn btn-danger mx-2">Delete</button>
        </div>
    </li>
    )
}