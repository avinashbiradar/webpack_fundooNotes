import React from "react";
import AddNote from "../addNote/addnote";
import DisplayNote from "../displaynotes./displaynotes";
import Typography from "@material-ui/core/Typography";
import DisplayIcons from "../displayicons/displayicons";
import { getArchiveNotes } from "../../services/userservice";
import "../trashnotes/trashnote.scss";
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
  return (
    <div className="mainContent">
    {archive.map((data) => (
        <div className="notes"  >
        <div>
          <Typography className="title">{data.title}</Typography>
          <Typography className="description">{data.description}</Typography>  
        </div>
        <div className="display">
            <DisplayIcons
             noteobject={data}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
//<DisplayNote notes={trash} />