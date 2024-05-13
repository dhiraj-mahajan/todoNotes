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
import { toggleDialog } from "../type/types";

console.log("data", data);


// m: 3, width: "60%",

const NoteListView = ({
  openDialog,
  closeDialog,
  noteListUpdate,
  noteList,
  deleteNote, 
}: toggleDialog) => {
  return (
    <Box>
      {/* Search bar section............... */}
      <Box sx={{ height: "15vh", display: "flex", alignItems: "center" }}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            borderRadius: 6,
            alignItems: "center",
            width: "60%",
          }}
        >
          <Search sx={{ p: 1.5 }} />
          <InputBase
            //   sx={{ width: "100%" }}
            // variant="standard"
            color="warning"
            placeholder="Search"
          ></InputBase>
        </Paper>
      </Box>

      {/* Note list Section.................. */}

      <Box
        sx={{
          height: "calc(85vh - 32px)",
          bgcolor: "#f6f6f6",
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
                      onClick={() => closeDialog()}
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
            {noteList.map((item)=><Notes key={item.id} id={item.id} desc={item.desc} title={item.title} date={item.date} color={item.color} severity={item.severity} deleteNote={deleteNote}/>)}

          </Grid>
        </Box>
      </Box>

      <NoteDialog
        openDialog={openDialog}
        closeDialog={closeDialog}
        noteListUpdate={noteListUpdate}
        noteList={noteList}
      ></NoteDialog>
    </Box>
  );
};

export default NoteListView;
