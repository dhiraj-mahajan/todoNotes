import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Stack,TextareaAutosize, MenuItem,
  Typography
} from "@mui/material";
import { toggleDialog, notesColor, severity } from "@/app/type/types";
import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';

type newType = toggleDialog & {
  triggerClear: ()=>void
}

const NoteDialog = ({ openDialog, closeDialog, noteListUpdate, noteList, triggerClear }: newType ) => {

  const [value, setValue] = useState<string>('');
  const [isInputEmpty, setIsInputEmpty ] = useState<boolean>(false)
  const [noteColor, setNoteColor] = useState("#e0e0e0")
  const [noteDescp, seNoteDescp] = useState<string>()
  const [noteseverity, setNoteSeverity] = useState<string>('')

useEffect(()=>{
    setValue('')
    seNoteDescp('')
    setNoteColor("#e0e0e0")
}, [triggerClear])

  const onInputFieldChange = (inpVal: string) => {
    if(inpVal){
        setIsInputEmpty(false)
        setValue(inpVal)
    }else{
        setIsInputEmpty(true)
        setValue('')
    }
    

  }

  const addNoteInList = (val: string) => { 
    if(val){
        let todaysDate = new Date()
        const impObj = {
            id: uuidv4(),
            title: val,
            desc:noteDescp,
            date:`${todaysDate.getDate()} . ${todaysDate.getMonth() + 1} . ${todaysDate.getFullYear()}`,
            color:noteColor,
            severity: noteseverity
        }

        let listItem = [...noteList]
        listItem.push(impObj)
        noteListUpdate(listItem)
        closeDialog()
    }else{
        setIsInputEmpty(true)
    }

  }

  return (
    
    <Dialog open={openDialog} >
      <DialogContent>
        <Stack sx={{ padding: 2, direction:"column", gap:2}}>
          <TextField
            label="Add Note"
            required
            value={value}
            onChange={(e) => onInputFieldChange(e.target.value)}
            error={isInputEmpty}
            helperText={isInputEmpty && "This field can't be empty"} sx={{width:"40vw"}}
          ></TextField>
          <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
          <TextField label="Select color" select sx={{width:"48%"}} value={noteColor} onChange={(e)=> setNoteColor(e.target.value)}>
            {
                notesColor.map((item, index)=>(
                    <MenuItem key={index} value = {item?.value}>
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                    <Box sx={{height:"20px", width:"20px", bgcolor:item?.value, borderRadius:"4px"}}></Box> <Typography>{item?.color}</Typography>
                </Stack>
            </MenuItem>

                ))
            }  
          </TextField>

          <TextField label="Select severity" select sx={{width:"48%"}} value={noteseverity} onChange={(e)=>setNoteSeverity(e.target.value)}>
            {
                severity.map((item, index)=>(
                    <MenuItem key={index} value = {item?.value}>
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                    <Box sx={{height:"20px", width:"20px", bgcolor:item?.value, borderRadius:"4px"}}></Box> <Typography>{item?.sev}</Typography>
                </Stack>
            </MenuItem>

                ))
            }  
          </TextField>
          </Stack>
          <TextField multiline={true} rows={4} label="Description" value={noteDescp} onChange={(e)=>seNoteDescp(e.target.value)}></TextField>

        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" gap={1} padding={2}>
          <Button onClick={() => closeDialog()} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => addNoteInList(value)}
            variant="contained"
          >
            Add
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default NoteDialog;
