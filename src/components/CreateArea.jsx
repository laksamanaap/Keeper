import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpanded() {
    setIsExpanded((prevCondition) => {
      return !prevCondition;
    });
  }

  const [note, setNote] = useState({
    titlea: "",
    contentb: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      console.log("Inside Note : ", prevNote);
      return { ...prevNote, [name]: value };
    });
  }

  // const [inputHeader, setInputHeader] = useState();
  // const [inputText, setInputText] = useState();

  // function handleTextChange(e) {
  //   const { value } = e.target;
  //   setInputText(value);
  // }

  // function handleHeaderChange(e) {
  //   const { value } = e.target;
  //   setInputHeader(value);
  // }

  return (
    <div>
      <form>
        <input
          name="titlea"
          placeholder={isExpanded ? "Title" : "Start type here"}
          onChange={handleChange}
          onClick={handleExpanded}
          value={note.titlea}
        />
        {isExpanded && (
          <div className="">
            <textarea
              name="contentb"
              placeholder="Take a note..."
              rows={isExpanded ? 3 : 1}
              onChange={handleChange}
              value={note.contentb}
            />
            <Zoom in={true}>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  props.onAdd(note.contentb, note.titlea);
                  setNote({
                    titlea: "",
                    contentb: ""
                  });
                  // console.log(note.title);
                  // console.log(note.content);
                }}
              >
                <AddIcon />
              </button>
            </Zoom>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
