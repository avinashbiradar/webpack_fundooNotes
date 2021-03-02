import React, { useState } from "react";
import DisplayIcons from "../displayicons/displayicons";
import "../displaynotes/displaynotes.scss";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import AddNote from "../addNote/addnote";
const DisplayNote = (props) => {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  var [title, setTitle] = React.useState("");
  var [note, setNote] = React.useState("");
  const [noteId, setNoteId] = React.useState();
  const [clr, setClr] = React.useState("#fafafa");
  const dialogOpen = (e, data) => {
    e.stopPropagation();
    setEdit(true)
    setTitle(data.title);
    setNote(data.description);
    setNoteId(data.id);

     setOpen(true);
  };

  const dialogClose = () => {
    setOpen(false);
  };  

  const AllNotes = () => {
    return (

      <div className="AllNotes">
        {props.notes.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).map((data) => (
          <div className="notes" style={{ backgroundColor: data.color }}> 
          <div onClick={(e) => dialogOpen(e, data)}>
            <Typography className="title">{data.title}</Typography>
            <Typography className="description">{data.description}</Typography>  
          </div>
          <div className="display">
              <DisplayIcons
              setEdited={edit}
              setColor={clr}
              setClr={setClr}
              editId={data.id}
              noteobject={data}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="addNote">
      <AllNotes />
      <div>
        <Dialog open={open} onClose={dialogClose} className="dialog"  >
          <AddNote
            setEdited={edit}
            editId={noteId}
            editTitle={title}
            editDisc={note}
           
          />
        </Dialog>
      </div>
    </div>
  );
};

export default DisplayNote;

