import Header from "./components/Header"
import TodoInput from './components/TodoInput'
import styles from './App.module.css'
import TodoListStats from "./components/TodoListStats"
import TodoList from "./components/TodoList"

type Task = {
  id: number
  text_content: string
  isDone: boolean
  createdAt: Date
}
const tasks: Task[] = [
  {
    id: 1,
    text_content: 'Fazer as malas',
    isDone: false,
    createdAt: new Date(2002, 10, 11)
  },
  {
    id: 2,
    text_content: 'Tomar suplementos',
    isDone: false,
    createdAt: new Date(2002, 10, 11)
  },
  {
    id: 3,
    text_content: 'Fazer exercícios (peito)',
    isDone: true,
    createdAt: new Date(2002, 10, 13)
  },
  {
    id: 4,
    text_content: 'Ler \'Como Fazer Amigos e Influenciar Pessoas\'',
    isDone: true,
    createdAt: new Date(2002, 10, 13)
  },
  {
    id: 5,
    text_content: 'Aprender a fazer frango',
    isDone: false,
    createdAt: new Date(2022, 10, 21)
  },
  {
    id: 6,
    text_content: 'Comer mais granola',
    isDone: false,
    createdAt: new Date(2022, 10, 25)
  }
]

function App() {
  const numberOfTasks = tasks.length
  const numberOfTasksDone = tasks.filter(task => task.isDone).length
  const tasksInCreationOrder = [...tasks].reverse()
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <TodoInput/>
        <TodoListStats 
          numberOfTasks={numberOfTasks} 
          numberOfTasksDone={numberOfTasksDone}
        />
        <TodoList tasks={tasksInCreationOrder}/>
      </div>
    </>
  )
}

export default App
