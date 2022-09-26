import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../../services/axios.service";
import {todosService} from "../../services";
import {Todo} from "./Todo";

const Todos = () => {
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    },[])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
}
export {Todos};