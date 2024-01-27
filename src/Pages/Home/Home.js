import { useReducer, useState } from "react" 
const Home=()=>{
    const ACTIONS={
        ADD:"add",
        DELETE:"delete",
        TOGGLE:"toggle"
    }
     const reducer=(todos,action)=>{
         switch(action.type){
             case ACTIONS.ADD: 
             return [...todos,newTodo(action.payload)]
             case ACTIONS.DELETE: 
             return todos.filter(todo=>todo.id !== action.payload)
             case ACTIONS.TOGGLE: 
             return todos.map((todo)=>{
                if(todo.id === action.payload){
                    return {...todo,isCompleted:!todo.isCompleted}
                }
                return todo
             })
              default: 
              return todos 
            } } 

            const handleSubmit=(e)=>{ 
                e.preventDefault() 
                dispatch({type:ACTIONS.ADD,payload:name}) 
                setName("")
            } 
            const newTodo=(name)=>{return {id:Date.now(),name:name,isCompleted:false}}
            const [name,setName]=useState("") 
            const [todos,dispatch]=useReducer(reducer,[]) 
            
            return( 
            <div> 
                <form onSubmit={handleSubmit}> 
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </form> 
                {todos.map((todo)=>(
                    <div key={todo.id}>
                        {todo.isCompleted ?<p className="text-green-500">{todo.name}</p> :<p className="text-yellow-400">{todo.name}</p>}
                        <button onClick={()=>dispatch({type:ACTIONS.TOGGLE,payload:todo.id})}>toggle</button>
                        <button onClick={()=>dispatch({type:ACTIONS.DELETE,payload:todo.id})}>delete</button>

                    </div>
                ))}
                </div> ) 
                } 
                export default Home