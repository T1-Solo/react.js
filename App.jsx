


import { TodoInput , TodoLists} from "./3-dars";
import { useState } from 'react';
function App() {
  const [todo , setTodo] = useState([])
  return (
    <div className="w-75 mx-auto d-flex align-items-center" style={{minHeight:"100vh"}}>
      <div className=" text-center todos_align w-100">
        <h1>Todos</h1>
      <TodoInput todo={todo} setTodo={setTodo}/>
       <TodoLists todo={todo}/>
      </div>
      
      
    </div>
  );
}

export default App;
