import React from "react";
import AddNote from "../addNote/addnote";
import DisplayNote from "../displaynotes/displaynotes";
import Typography from "@material-ui/core/Typography";
import DisplayIcons from "../displayicons/displayicons";
import { deleteForever, getTrashNotes , deleteNotes } from "../../services/userservice";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import RestoreFromTrashRoundedIcon from "@material-ui/icons/RestoreFromTrashRounded";
import "../trashnotes/trashnote.scss";
export default function Notes(props) {
    const [trash, setTrash] = React.useState([]);
    const [noteId, setNoteId] = React.useState();
    const [notedata ,setnotedata]=React.useState();
  React.useEffect(() => {
    displaynotes();
  }, []);
  

  const displaynotes = () => {
    getTrashNotes()
      .then((data) => {
        setTrash(data.data.data.data);
        console.log(trash);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteforever = (e,nId) => {
    console.log(nId)
      // e.stopPropagation();
    let data = {  
      noteIdList: [nId],
    };
    deleteForever(data)
    .then((data) => {
      console.log("Note deleted "+data);
      displaynotes();
      props.getall();
    })
    .catch((err) => {
      console.log("Error while deleting"+err)
    })
  }
  const restore = (e,nId) => {
    console.log(nId)
    // e.stopPropagation();
    let data = {
      noteIdList:[nId],
      isDeleted: false,
    };
    deleteNotes(data)
      .then((data) => {
        console.log(data);
        displaynotes();
        props.getall();
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  }


  return (
    <div className="mainContent">
    {trash.map((data) => (
       
        <div className="notes" style={{ backgroundColor: data.color }} >
        <div>
          <Typography className="title">{data.title}</Typography>
          <Typography className="description">{data.description}</Typography>  
        </div>
        <div className="display">
        <div>
        <DisplayNote notes={trash} /> 
         </div>
          </div>
          <div>
         <DeleteForeverRoundedIcon  onClick={(e)=>{deleteforever(e,data.id)}}/>
         <RestoreFromTrashRoundedIcon  onClick={(e)=>{restore(e,data.id)}}/>
         </div>
        </div>
        
      ))}
    </div>
  );
}
//<DisplayNote notes={trash} />
//<RestoreFromTrashRoundedIcon onClick={restore}/>
// <div>
// <IconButton className={classes.button}>
// <DeleteForeverRoundedIcon onClick={deleteForever}/>
// </IconButton>
// <IconButton className={classes.button}>

// </IconButton>
// </div>