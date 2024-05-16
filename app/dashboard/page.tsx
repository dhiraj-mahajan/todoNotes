import { Box, Typography, Button, Stack, SvgIcon } from "@mui/material";
import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import NoteListView from "./noteList";
import ProfilePanel from "../components/profilePanel/profilePanel";
import Image from "next/image";




type NoteData = {
  id : string,
  title: string,
  desc:string,
  date:string,
  color: string,
  severity: string
}

const Dashboard = () => {
  return (
    <Stack direction={"row"}>
      {/* Left side logo panel */}
      <Box sx={{ width: "12vw", height: "15vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Image width={50} height={50} src="/noteLogo.svg"/>
      </Box>

      {/* Right side Notes panel */}
      <Box sx={{ width: "88vw", height: "100vh", }}>
        <NoteListView></NoteListView>
      </Box>
    </Stack>
  );
};

export default Dashboard;
