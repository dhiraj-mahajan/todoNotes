"use client";
import {
  Box,
  Stack,
  Paper,
  InputBase,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import NoteDialog from "../components/dialog/dialog";
import Notes from "../components/notes/note";
import {data} from "../dummyData"
import {
  AddCircle,
  Search
} from "@mui/icons-material";
import { useState } from "react";

console.log("data", data);


// m: 3, width: "60%",

const NoteListView = () => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [noteList, setNoteList] = useState<object[]>([]);
  const [preserveList, setPreserveList] = useState<object[]>([]);
  const [triggerClear, setTriggerClear] = useState(0)
  const [triggerExpand, setTriggerExpand] = useState('')
  const [isEditMode, setIsEditMode] = useState('')

  const expandOrEditNote = (values:object) => {
    if(values?.type == "expand"){
        setTriggerExpand(values?.id)
        setIsEditMode('')
    setOpenDialog(true)
    }else if(values?.type == "edit"){
        setIsEditMode(values?.id)
        setTriggerExpand('')
    setOpenDialog(true)

    }
    
}

  const closeDialog = () => {setOpenDialog(!openDialog)
    setTriggerExpand('')
    setIsEditMode('')
  };

  const noteListUpdate = (value: object[]) => {
    setNoteList(value);
    setPreserveList(value);
}
  const deleteNote = (val:String)=>{
    const sortedArray = noteList.filter((item)=> item?.id !== val)
    setNoteList(sortedArray)
    setPreserveList(sortedArray)
  }

  const searchOption = (searchVal:String)=>{
    if(searchVal){
        let newlist = preserveList.filter((lstItem)=>{
            return (lstItem?.title.toLowerCase().includes(searchVal) || lstItem?.desc.toLowerCase().includes(searchVal))

        })
        setNoteList(newlist)

    }else{
        setNoteList([...preserveList])
    }
  }

  return (
    <Box>
      {/* Search bar section............... */}
      <Box sx={{ height: "15vh", display: "flex", alignItems: "center" }}>
        <Paper
          component="form"
          onSubmit={(e)=>e.preventDefault()}
          sx={{
            display: "flex",
            borderRadius: 6,
            alignItems: "center",
            width: "60%",
            boxShadow:"none"
          }}
        >
          <Search sx={{ p: 1.5 }} />
          <InputBase
            placeholder="Search"
            fullWidth
            onChange={(e)=>searchOption(e.target.value.toLowerCase())}
          ></InputBase>
        </Paper>
      </Box>

      {/* Note list Section.................. */}

      <Box
        sx={{
          height: "calc(85vh - 32px)",
          bgcolor: "#FFFFFF",
          //   overflow:"hidden",
          //   overflowY:"scroll",
          borderRadius: "2rem",
          mr: 3,
        }}
      >
        <Box sx={{ p: 2 }}>
          <Grid container direction="row">
            {/* Add new notes box ........... */}
            <Grid item xs={6} md={4}>
              <Box
                sx={{
                  // bgcolor: "themeBg.lite",
                  overflow: "hidden",
                  height: "calc(40vh - 32px)",
                  mr: 2,
                  mb: 2,
                }}
              >
                <Stack
                  height={"100%"}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box
                    component="section"
                    height={"10rem"}
                    width={"10rem"}
                    sx={{
                      display: "flex",
                      border: "2px dashed grey",
                      borderRadius: "1.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        closeDialog() 
                        setTriggerClear(triggerClear+1)
                      }}
                      sx={{ "&:hover": { background: "none" } }}
                    >
                      <Stack alignItems={"center"} gap={1}>
                        <AddCircle sx={{color:"iconColor.main", fontSize: 40 }} />
                        <Link variant="body2">Add Note</Link>
                      </Stack>
                    </IconButton>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            {/* Iterate through data to display notes */}
            {noteList.map((item)=><Notes key={item.id} id={item.id} desc={item.desc} title={item.title} date={item.date} color={item.color} severity={item.severity} deleteNote={deleteNote} expandOrEditNote={expandOrEditNote}/>)}

          </Grid>
        </Box>
      </Box>

      <NoteDialog
        openDialog={openDialog}
        closeDialog={closeDialog}
        noteListUpdate={noteListUpdate}
        preserveList={preserveList}
        triggerClear={triggerClear}
        triggerExpand={triggerExpand}
        isEditMode={isEditMode}
      ></NoteDialog>
    </Box>
  );
};

export default NoteListView;
