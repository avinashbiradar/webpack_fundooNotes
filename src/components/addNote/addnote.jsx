import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import logoicon from "../assests/pin note.jpg";
import '../addNote/addnote.scss'
import DisplayIcons from "../displayicons/displayicons"
import { addNote ,updateNotes} from "../../services/userservice";
var checkOpen = "open";

export default function AddNote(props){
  var [showTitle, titleDisplay] = React.useState(props.editOpen);
  const [edit, setEdit] = React.useState(props.setEdited);
  const [noteId, setNoteId] = React.useState(props.editId);
  const [title,settitle]=React.useState(props.editTitle);
  const [description,setdescription]=React.useState(props.editDisc);
  const [trash, setTrash] = React.useState(props.trash);
  const [clr, setClr] = React.useState("#fafafa");
  const handletitle=(Event)=>{
       settitle(Event.target.value)
  }

  const handledescription=(Event)=>{
    setdescription(Event.target.value)
}

const handleNote=()=>{
  if (props.setEdited) {
    let formData = new FormData();
    if (title == undefined && description == undefined) {
      console.log("Please Enter Data");
      titleDisplay(false);
      return null;
    }
    formData.append("title", title);
    formData.append("description", description);
    formData.append("noteId", noteId);
   
    updateNotes(formData)
      .then((data) => {
        console.log("Update Data: " + data);
      })
      .catch((err) => {
        console.log("Update Data Error = " + err);
      });
    titleDisplay(false);
  } else {
    let data = {
      title : title,
      description : description,
    }
    console.log(data)
    addNote(data).then((data)=>{
      console.log(data);
    })
    .catch ((error)=>{
      console.log(error)
    })
    if (checkOpen == "close") {
      setOpen(true);
      checkOpen = "open";
    } else if (checkOpen == "open") {
      setOpen(false);
      checkOpen = "close";
    }
     
  }
  
}

    const [open, setOpen] = React.useState(props.setEdited);
    const NotePadOpenClose = () => {
        if (checkOpen == "close") {
          setOpen(true);
          checkOpen = "open";
        } else if (checkOpen == "open") {
          setOpen(false);
          checkOpen = "close";
        }
        console.log(checkOpen);
      }
 
return(
    <div className="notesone" >
        {open ?
         <div className="contain container1">
         <div className="note1" >
           <div className="title pd">
             <InputBase placeholder='Title...' value={title}  fullWidth name='title' onChange={handletitle}/>
             <IconButton>
             <img className="logoIcon" src={logoicon} size="small"/>
             </IconButton>
           </div>
           <div className='note pd'>
             <InputBase placeholder='Take a note...' value={description} fullWidth name='description' onChange={handledescription}/>
           </div>
         </div>
         <br>
         </br>
        
         <div className="toolbar">
         <div className="toolbar1">
         <DisplayIcons 
         trash={trash}
         />

         </div>
           <div className="close-button">
             <Button size="small" onClick={handleNote} >Close</Button>
           </div>
         </div>
       </div> :
       <div className="contain container" >
       <div className="note">
       <InputBase placeholder='Take a note...' fullWidth onClick={NotePadOpenClose}/>
       </div>
         <IconButton>
           <CheckBoxOutlinedIcon />
         </IconButton>
         <IconButton> 
             <BrushIcon />
         </IconButton>
         <IconButton> 
             <ImageOutlinedIcon />
         </IconButton>
       </div>
       
       
    }
    </div>
)

}