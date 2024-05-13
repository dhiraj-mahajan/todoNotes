import { Grid, Box, Stack, Typography, IconButton } from "@mui/material";
import { MoreVert, Fullscreen, EventNote, Delete, Adjust } from "@mui/icons-material";

type Props = {
  id: Number;
  title: String;
  desc: String;
  date: String;
  color: String;
  deleteNote:(value: unknown)=>void,
  severity:string
};
const Notes = ({ id, title, desc, date, color, severity, deleteNote}: Props) => {
    console.log("sevirity", severity);
    
  return (
    <Grid item xs={6} md={4}>
      <Box
        sx={{
          height: "calc(40vh - 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          height={"90%"}
          width={"90%"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={color}
          sx={{
            borderRadius: "1.5rem",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          }}
        >
          <Stack
            height={"22%"}
            width={"100%"}
            sx={{ justifyContent: "center" }}
          >
            <Stack
              direction={"row"}
              sx={{
                px: 3,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            ><Stack direction={"row"} gap={1} alignItems={"center"}>
                {severity && <Box sx={{height:"12px", width:"12px",bgcolor:severity, borderRadius:2}}></Box>}              
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  textOverflow: "ellipsis",
                  textWrap: "nowrap",
                  overflow: "hidden",
                }}
              >
                {title}
              </Typography>

              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <IconButton onClick={()=> deleteNote(id)} size="small">
                  <Delete sx={{ fontSize: 20, color: "iconColor.main" }} />
                </IconButton>
                <IconButton size="small">
                  <MoreVert sx={{ fontSize: 20 }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
          <Box height={"50%"} width={"100%"} sx={{}}>
            <Box height={"100%"} sx={{ px: 3, overflow: "hidden" }}>
              <Typography variant="body2" sx={{}}>
                {desc}
              </Typography>
            </Box>
          </Box>
          <Stack height={"28%"} width={"100%"} sx={{ pt: 1, gap: 1 }}>
            <Box
              component="hr"
              sx={{ width: "85%", border: "0.8px solid #bdbdbd", my: 1 }}
            ></Box>
            <Stack
              direction={"row"}
              sx={{
                px: 3,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack direction={"row"} sx={{ alignItems: "center", gap: 1 }}>
                <EventNote sx={{ fontSize: 15 }} />{" "}
                <Typography variant="caption">{date}</Typography>
              </Stack>
              <IconButton
                color="secondary"
                size="small"
                sx={{ bgcolor: "iconColor.main" }}
              >
                <Fullscreen sx={{ fontSize: 17 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Notes;
