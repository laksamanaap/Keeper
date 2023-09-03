import React, { useState } from "react";

function CreateArea(props) {
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
          placeholder="Title"
          onChange={handleChange}
          value={note.titlea}
        />
        <textarea
          name="contentb"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.contentb}
        />
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
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
