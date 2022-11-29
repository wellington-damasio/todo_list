import styles from './TodoInput.module.css'
import { PlusCircle } from 'phosphor-react'

const TodoInput = () => {
    return(
        <div className={styles.todoInput}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">
                Criar 
                <PlusCircle size={20} />
            </button>
        </div>
    )
}

export default TodoInput