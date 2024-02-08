import { useReducer, useState } from "react" 
import Todo from "./Todo"
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
            const sortedTodos=todos.sort((a,b)=>{
                if(a.isCompleted===true){
                    return -1
                }else if(a.isCompleted===false){
                    return 1
                }else {
                    return 0
                }
            })

            return (
              <div className="flex flex-col items-center p-2">
                <form onSubmit={handleSubmit}>
                  <input
                    className=" shadow-md shadow-slate-300  p-1 rounded-md min-w-72 focus:outline-none"
                    placeholder="Add a Todo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </form>
                {sortedTodos.map((todo) => (
                  <Todo todo={todo} dispatch={dispatch} ACTIONS={ACTIONS} />
                ))}
              </div>
            ); 
                } 
                export default Home
            