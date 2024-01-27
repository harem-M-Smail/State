const Todo=({todo,dispatch})=>{
    return(
        <div>
            <p>{todo.todo}</p>
            <button onClick={()=>dispatch({type:"toggle",payload:todo.id})}>Toggle</button>
            <button onClick={()=>dispatch({type:"delete",payload:todo.id})}>Delete</button>
        </div>
    )
}
export default Todo