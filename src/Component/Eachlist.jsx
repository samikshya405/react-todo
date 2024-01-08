import { DeleteOutlined } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Eachlist({id, taskName, hours, onDelete, onMove}) {
  const handleDelete=(taskName, hours)=>{
    onDelete(taskName, hours)
  }
  
  const handleMove=(taskName, hours)=>{
    onMove(taskName, hours)
  }
  return (
    <>
    <Stack
          direction={"row"}
          spacing={3}
          sx={{ background: "#f1eaf2" }}
          padding={2}
        >
          <span>{id}</span>
          <span>{taskName}</span>
          <span>{hours}</span>
          <div>
            <IconButton aria-label="delete" sx={{color:"red"}} onClick={()=>handleDelete(taskName, hours)}>
              <DeleteOutlined />
            </IconButton>
            <IconButton onClick={()=>handleMove(taskName, hours)}>
              <ArrowRightAltIcon />
            </IconButton>
          </div>
        </Stack>
    </>
  )
}

export default Eachlist