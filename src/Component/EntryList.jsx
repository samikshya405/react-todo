import { Stack } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Eachlist from "./Eachlist";



function EntryList({entryList, onDelete, onMove}) {
  return (
    <>
      <h3>Entrylist</h3>
      <Stack className="list" spacing={1}>

        {entryList.map((list,index)=>(
            <Eachlist key={list.taskname+index} id={index+1} taskName={list.taskName} hours={list.hours} onDelete={onDelete}  onMove={onMove}/>
        ))}
        
      </Stack>
    </>
  );
}

export default EntryList;
