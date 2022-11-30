import styles from './TodoListStats.module.css'

type TodoListStatsProps = {
    numberOfTasks: number
    numberOfTasksDone: number
}
const TodoListStats = (props : TodoListStatsProps) => {
    const {numberOfTasks, numberOfTasksDone} = props
    return(
        <div className={styles.stats}>
            <div>
                <span className="blue">Tarefas criadas</span> <span className={styles.badge}>{ numberOfTasks }</span></div>
            <div>
                <span className="purple">Concluídas</span> <span className={styles.badge}>{ numberOfTasksDone } de { numberOfTasks }</span>
            </div>
        </div>
    )
}

export default TodoListStats