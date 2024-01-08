import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function AddnewTask({onsubmit}) {
    const [taskName, settaskName] = useState('')
    const [hours, setHours] = useState('')
    
    const handleAddtask=()=>{
        onsubmit(taskName, hours)
        settaskName('')
        setHours('')

    }
    const handleChnageTask=(event)=>{
        settaskName(event.target.value)
    }
    const handleChnageHours=(event)=>{
        setHours(event.target.value)
    }
  return (
    <Stack spacing={2}>
    <TextField type='text' placeholder='Enter a task..' onChange={handleChnageTask} value={taskName} />
    <TextField  type='number' placeholder='Enter no. of hrs'onChange={handleChnageHours} value={hours} />
    <Button variant='contained' onClick={handleAddtask}>Add new Task</Button>
    </Stack>
  )
}

export default AddnewTask