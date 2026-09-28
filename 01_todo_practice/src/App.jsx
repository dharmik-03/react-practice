import { useState } from 'react'
import AddTODO from './components/addTODO'

const App = () => {

  const IntialTODOS = [
    {
      id: 1,
      task: "learn react",
      description: "react basic terms"
    },
    {
      id: 2,
      task: "practice",
      description: "practice of react"
    }
  ]

  const [todo, setTodo] = useState(IntialTODOS)

  const addTODO = (input) => {

    const newTODO = {
      id: Date.now(),
      task: input.task,
      description: input.description
    }

    setTodo((prev) => [...prev, newTODO])

  }


  console.log(todo)
  return (
    <>
      <AddTODO addTODO={addTODO} />
    </>

  )
}

export default App