import type { Todo } from "../types";


type TodoItemProps = {
    todo: Todo;
};


export function TodoItem({ todo }: TodoItemProps) {

    if(todo.dueDate){
        const now = new Date();
        const year = String(now.getFullYear());
        const month = String(now.getMonth());
        const day = String(now.getDay());
        const date = `${year}-${month}-${day}`;
        const result = date.split("-");
        const todo_result = todo.dueDate.split("-");
        var Fontcolor = "";

        if (Number(result[0]) > Number(todo_result[0]) || Number(result[1]) > Number(todo_result[1]) || Number(result[2]) > Number(todo_result[2])) {
            Fontcolor = "red";
        }else{
            Fontcolor = "black";
        }
    }
    

    return (
        <li>
            <strong>{todo.title}</strong>
            <span> {todo.completed ? "(完了)": "(未完了)"}</span>
            {todo.dueDate && <span style={{ color: Fontcolor }}>期限: {todo.dueDate}</span>}
        </li>
    );
}