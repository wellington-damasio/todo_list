import Todo from './Todo'

import styles from './TodoList.module.css'

import Clipboard from '../assets/clipboard.png'

type Task = {
    id: number
    text_content: string
    isDone: boolean
    createdAt: Date
}

type TodoListProps = {
    tasks: Task[]
    deleteTaskFunc: (id :number) => void
    taskDoneFunc: (id: number, newTask : Task) => void
}

const TodoList = (props: TodoListProps) => {
    const todos: Task[] = props.tasks
    const {deleteTaskFunc, taskDoneFunc} = props


    return(
        <div className={styles.todoList}>
            {todos.length > 0 ? (
                todos.map((todo: any) => {
                    return(
                        <Todo 
                            key={todo.id}
                            id={todo.id}
                            textContent={todo.text_content}
                            isDone={todo.isDone}
                            createdAt={todo.createdAt}
                            deleteTaskFunc={deleteTaskFunc}
                            taskDoneFunc={taskDoneFunc}
                        />
                    )
                })
            )  
            : (
                <div className={styles.isEmptyContainer}>
                    <img src={Clipboard} alt="" />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            )}
        </div>
    )
}

export default TodoList