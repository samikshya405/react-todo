import { DeleteOutlined } from '@mui/icons-material'
import { Box, IconButton, Stack, colors } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Eachlist from './Eachlist';


function BadList({badlist, onDelete, onMove}) {
  return (
    <>
    
    <h3>Badlist</h3>
    <Stack className='list' spacing={1}>
    {badlist.map((list,index)=>(
            <Eachlist key={list.taskname+index} id={index+1} taskName={list.taskName} hours={list.hours} onDelete={onDelete}  onMove={onMove} />
        ))}
      </Stack>
    
    </>
  )
}

export default BadList