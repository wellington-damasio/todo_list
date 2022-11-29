import { format} from 'date-fns'
import ptBr from 'date-fns/esm/locale/pt-BR/index.js'
import { Trash } from 'phosphor-react'
import { useRef, useState } from 'react'
import styles from './Todo.module.css'

type TodoProps = {
    id: number,
    textContent: string,
    isDone: boolean
    createdAt: Date
}

const Todo = (props: TodoProps) => {
    const [taskDone, setTaskDone] = useState(props.isDone)
    const { id, textContent, isDone, createdAt }: TodoProps = props

    const formattedDate = format(createdAt, 'dd/MM/yyy',{locale: ptBr})
    const formattedDateTime = format(createdAt, "dd 'de' MMMM 'de' yyyy", {
        locale: ptBr
    })

    return(
        <div className={styles.todo}>
            <label className={styles.checkboxContainer}>
                <input 
                    type="checkbox"
                    onChange={() => setTaskDone(!taskDone)}
                />
                <span className={styles.checkmark}></span>
            </label>
            {taskDone
                ? (
                    <p className={styles.taskDoneText}>{ textContent }</p>
                )
                : (
                    <p>{ textContent }</p>
                )
            }
            <button><Trash size={22}/></button>
            <time 
                title={formattedDateTime}
                dateTime={formattedDateTime}
            >
                Criada em { formattedDate }
            </time>
        </div>
    )
}

export default Todo