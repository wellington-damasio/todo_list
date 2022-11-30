import styles from './TodoInput.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
type TodoInputProps = {
    addTaskFunc: (newTask :object) => void
}

const TodoInput = (props: TodoInputProps) => {
    const [textInput, setTextInput] = useState('')

    const handleSubmit = (event: any) => {
        const newTask = {
            text_content: textInput,
            isDone: false,
            createdAt: new Date()
        }

        event.preventDefault()
        props.addTaskFunc(newTask)
        setTextInput('')
    }

    const handleTextInputChange = (event: any) => {
        setTextInput(event.target.value)
    }

    return(
        <form className={styles.todoInput} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                onChange={handleTextInputChange}
                value={textInput}
                required
            />
            <button type="submit">
                Criar 
                <PlusCircle size={20} />
            </button>
        </form>
    )
}

export default TodoInput