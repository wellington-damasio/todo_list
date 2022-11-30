import { format} from 'date-fns'
import ptBr from 'date-fns/esm/locale/pt-BR/index.js'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Todo.module.css'

type TodoProps = {
    id: number,
    textContent: string,
    isDone: boolean
    createdAt: Date
    deleteTaskFunc: (id: number) => void
    taskDoneFunc: (id: number, newTask: any) => void
}
const Todo = (props: TodoProps) => {
    // const [taskDone, setTaskDone] = useState<boolean>(props.isDone)
    const { id, textContent, createdAt, deleteTaskFunc, taskDoneFunc, isDone}: TodoProps = props

    const formattedDate = format(createdAt, 'dd/MM/yyy',{locale: ptBr})
    const formattedDateTime = format(createdAt, "dd 'de' MMMM 'de' yyyy", {
        locale: ptBr
    })

    const handleTaskDone = () => {
        const newTask = {
            id,
            text_content: textContent,
            isDone: !isDone,
            createdAt
        }
        // setTaskDone(!taskDone)
        taskDoneFunc(id, newTask)
    }

    const handleDeleteTask = () => {
        deleteTaskFunc(id)
    }

    return(
        <>
        {
            props.isDone
            ? (
                <div className={styles.todo}>
                    <label className={`${styles.checkboxContainer} ${styles.checked}`}>
                        <input 
                            type="checkbox"
                            onChange={handleTaskDone}
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                    {props.isDone
                        ? (
                            <p className={styles.taskDoneText}>{ textContent }</p>
                        )
                        : (
                            <p>{ textContent }</p>
                        )
                    }
                    <button onClick={handleDeleteTask}>
                        <Trash size={22}/>
                    </button>
                    <time 
                        title={formattedDateTime}
                        dateTime={formattedDateTime}
                    >
                        Criada em { formattedDate }
                    </time>
                </div>
            )
            : (
                <div className={styles.todo}>
                    <label className={styles.checkboxContainer}>
                        <input 
                            type="checkbox"
                            onChange={handleTaskDone}
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                    {props.isDone
                        ? (
                            <p className={styles.taskDoneText}>{ textContent }</p>
                        )
                        : (
                            <p>{ textContent }</p>
                        )
                    }
                    <button onClick={handleDeleteTask}>
                        <Trash size={22}/>
                    </button>
                    <time 
                        title={formattedDateTime}
                        dateTime={formattedDateTime}
                    >
                        Criada em { formattedDate }
                    </time>
                </div>
            )
        }
        </>
    )
}

export default Todo