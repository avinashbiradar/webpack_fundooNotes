import React from "react";
import AddNote from "../addNote/addnote";
import DisplayNote from "../displaynotes/displaynotes";
import { getNotes } from "../../services/userservice";
export default function Notes(props) {
  var [note, setNote] = React.useState([]);
  React.useEffect(() => {
    displaynotes();
  }, []);

  const displaynotes = () => {
    getNotes()
      .then((data) => {
        setNote(data.data.data.data);
        console.log(note);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mainContent">
      <AddNote getNoteUpdate={displaynotes}/>
      <DisplayNote notes={note} />
    </div>
  );
}
