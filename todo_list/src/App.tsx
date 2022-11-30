import Header from "./components/Header"
import TodoInput from './components/TodoInput'
import styles from './App.module.css'
import TodoListStats from "./components/TodoListStats"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"

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
  const tasksInCreationOrder = [...tasks].reverse()
  const [taskList, setTaskList] = useState(tasksInCreationOrder)
  const [numberOfTasks, setNumberOfTasks] = useState(taskList.length)

  const getNumberOfTasksDone = taskList.filter(task => task.isDone).length
  const [numberOfTasksDone, setNumberOfTasksDone] = useState(getNumberOfTasksDone)

  const sortTasks = (taskList: Task[]) => {
    const doneTasks = taskList.filter(task => task.isDone)
    const notDoneTasks = taskList.filter(task => !task.isDone)

    return [...notDoneTasks, ...doneTasks]
  }

  const addTask = (task: object) => {
    const newTask: Task = {...task, id: taskList.length + 1}
    const newTaskList: Task[] = sortTasks([newTask, ...taskList])
    setTaskList(newTaskList)
  }

  const deleteTask = (id: number) => {
    const newTaskList = sortTasks(taskList.filter(task => task.id !== id))

    setTaskList(newTaskList)
  }

  const handleTaskDone = (id: number, changedTask: Task) => {
    let newTaskList = [...taskList]
    taskList.forEach((task, i) => {
      if(task.id === id) {
        newTaskList.splice(i, 1)
      }
    })

    newTaskList.push(changedTask)
    const sortedNewTaskList = sortTasks(newTaskList)
    console.log(sortedNewTaskList)
    setTaskList(sortedNewTaskList)
  }

  useEffect(() => {
    setNumberOfTasks(taskList.length)
    setNumberOfTasksDone(getNumberOfTasksDone)
  }, [taskList])

  const sortedTaskList = sortTasks(taskList)
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <TodoInput addTaskFunc={addTask}/>
        <TodoListStats 
          numberOfTasks={numberOfTasks} 
          numberOfTasksDone={numberOfTasksDone}
        />
        <TodoList 
          tasks={sortedTaskList} 
          deleteTaskFunc={deleteTask}
          taskDoneFunc={handleTaskDone}
        />
      </div>
    </>
  )
}

export default App
