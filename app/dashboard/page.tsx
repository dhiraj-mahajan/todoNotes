"use client";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import NoteDialog from "../components/dialog/dialog";
import NoteListView from "./noteList";
import ProfilePanel from "../components/profilePanel/profilePanel";

type NoteData = {
  id : string,
  title: string,
  desc:string,
  date:string,
  color: string,
  severity: string
}

const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [noteList, setNoteList] = useState<object[]>([]);


  const closeDialog = () => setOpenDialog(!openDialog);
  const noteListUpdate = (value: object[]) => {console.log("value ==", value)
   setNoteList(value);}
  const deleteNote = (val:String)=>{
    const sortedArray = noteList.filter((item)=> item?.id !== val)
    setNoteList(sortedArray)

  }

  return (
    <Stack direction={"row"}>
      {/* Left side logo panel */}
      <Box sx={{ width: "12vw" }}>
        <ProfilePanel/>
      </Box>

      {/* Right side Notes panel */}
      <Box sx={{ width: "88vw", height: "100vh", }}>
        <NoteListView
          openDialog={openDialog}
          closeDialog={closeDialog}
          noteListUpdate={noteListUpdate}
          noteList={noteList}
          deleteNote={deleteNote}
        ></NoteListView>
      </Box>
    </Stack>
  );
};

export default Dashboard;
