import React from "react";
import AddNote from "../addNote/addnote";
import DisplayNote from "../displaynotes/displaynotes";
import Typography from "@material-ui/core/Typography";
import DisplayIcons from "../displayicons/displayicons";
import { getArchiveNotes ,ArchiveNotes } from "../../services/userservice";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import "../archivenotes/archive.scss";
export default function Notes(props) {
    const [archive, setArchive] = React.useState([]);
  React.useEffect(() => {
    displaynotes();
  }, []);

  const displaynotes = () => {
    getArchiveNotes()
.then((data) => {
        setArchive(data.data.data.data);
        console.log(archive);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const restore = (e,nId) => {
    console.log(nId)
    // e.stopPropagation();
    let data = {
      noteIdList:[nId],
      isArchived: false,
    };
    ArchiveNotes(data)
      .then((data) => {
        console.log(data);
        displaynotes();
        props.getall();
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  }


  // const unArchiveNote = (nId) => {
  //   console.log(nId)
  //   let data = {
  //       noteIdList:[nId],
  //     isArchived: false,
  //   };
  //   ArchiveNotes(data)
  //     .then((data) => {
  //       props.getall();
  //       console.log("UnArchived Note: " + data);
  //     })
  //     .catch((err) => {
  //       console.log("UnArchived Note err = " + err);
  //     });
  // };

  return (
    <div className="mainContent">
    {archive.map((data) => (
        <div className="notestwo" style={{ backgroundColor: data.color }} >
        <div>
          <Typography className="title">{data.title}</Typography>
          <Typography className="description">{data.description}</Typography>  
        </div>
        <div>
        <PublishRoundedIcon  onClick={(e)=>{restore(e,data.id)}} />
          </div>
        </div>
      ))}
    </div>
  );
}
//<DisplayNote notes={trash} />