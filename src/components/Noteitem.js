import React, { useContext } from "react";
import { NoteContext } from "../context/notes/noteContext";

function Noteitem(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3 d-flex">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title"> {note.title} </h5>{" "}
            <i
              className="far fa-trash-alt mx-2 my-1"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted Successfully", "success");
              }}
            >
              {" "}
            </i>{" "}
            <i
              className="far fa-edit mx-2 my-1"
              onClick={() => {
                updateNote(note);
              }}
            >
              {" "}
            </i>
          </div>{" "}
          <p className="card-text"> {note.description} </p>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Noteitem;