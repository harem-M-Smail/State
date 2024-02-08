const Todo=({todo,dispatch,ACTIONS})=>{
    return(
            <div className="flex items-center mt-3 break-words min-w-72 rounded-md p-2  w-[50%] border-solid border-cyan-100 border shadow-md shadow-slate-200 hover:shadow-slate-300 transition-shadow" key={todo.id}>
                        <p className=" w-[100%] " style={todo.isCompleted?{textDecoration:"line-through",color:"grey"}:{}}>{todo.name}</p>
                        <button className="mx-2 min-w-14 h-8 bg-[#A6FF4D] rounded-lg self-center" onClick={()=>dispatch({type:ACTIONS.TOGGLE,payload:todo.id})}>toggle</button>
                        <button className="mx-2 min-w-14  h-8 bg-[#fe6464] rounded-lg self-center" onClick={()=>dispatch({type:ACTIONS.DELETE,payload:todo.id})}>delete</button>
            </div>
    )
}
export default Todo