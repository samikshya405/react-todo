
import { Stack } from '@mui/material'
import './App.css'
import AddnewTask from './Component/AddnewTask'
import BadList from './Component/BadList'
import EntryList from './Component/EntryList'
import { useEffect, useState } from 'react'



function App() {
  const [entryList, setEntryList] = useState([])
  const [badList,setbadList] = useState([])
  const [totalhours, setTotalhours] = useState(0)
  const [savedHr, setsavedHr] = useState(0)


  const calculateTotalHr=()=>{
    let badHr = badList.reduce((a,b)=>{
      return a + Number(b.hours)
    },0)

    let entryHr = entryList.reduce((a,b)=>a+ Number(b.hours),0)
    setsavedHr(badHr)
    setTotalhours(Number(badHr)+Number(entryHr))
  }
  useEffect(()=>{
    calculateTotalHr()
  },[entryList, badList])

  const callBackfromParent=(newTask,newHours)=>{
    let obj = {taskName:newTask, hours:newHours}
    setEntryList([...entryList, obj])

  }
  const deleteEntryList =(taskName)=>{
    const newList =[...entryList]
    const filteredList = newList.filter(task=>task.taskName!==taskName)
    setEntryList([...filteredList])
    
    
  }
  const movetoBadList =(newtask, newHours)=>{
    const newList =[...entryList]
    const filteredList = newList.filter(task=>task.taskName!==newtask)
    setEntryList([...filteredList])
    let obj = {taskName:newtask, hours:newHours}
    setbadList([...badList, obj])
    
    
  }
  const deleteBadList=(newtask, newHours)=>{
    const newList =[...badList]
    const filteredList = newList.filter(task=>task.taskName!==newtask)
    setbadList([...filteredList])


  }

  const movetoEntryList =(newtask, newHours)=>{
    const newList =[...badList]
    const filteredList = newList.filter(task=>task.taskName!==newtask)
    setbadList([...filteredList])
    let obj = {taskName:newtask, hours:newHours}
    setEntryList([...entryList, obj])
    
    
  }
  
  return (
    <>
    <h1>Not to do List</h1>
      <AddnewTask onsubmit={callBackfromParent}/>
      
      <EntryList entryList={entryList} onDelete = {deleteEntryList} onMove={movetoBadList}/>

      <BadList badlist={badList} onDelete={deleteBadList} onMove={movetoEntryList}/>
      <h4>You could have saved {savedHr} hr this week</h4>
      <h2>Total hour allocated this week: {totalhours} hr</h2>
      
    </>
  )
}

export default App
