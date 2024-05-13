export type toggleDialog = {
    openDialog: boolean,
    noteList?:object[],
    closeDialog: () => void,
    noteListUpdate: (value : object[]) => void,
    deleteNote?:(value: string)=>void
}

export const notesColor:object[] = [{color:"Grey", value: "#e0e0e0"}, {color:"Red", value: "#ffcdd2"}, {color:"Blue", value: "#bbdefb"}, {color:"Yellow", value: "#fff9c4"}, {color:"Green", value: "#b9f6ca"}]

export const severity:object[] = [{sev:"None", value: ""}, {sev:"High", value: "#f44336"}, {sev:"Medium", value: "#ffeb3b"}, {sev:"Low", value: "#4caf50"}]
