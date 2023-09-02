import React, { useState } from "react";

function CreateArea(props) {
  const [inputHeader, setInputHeader] = useState();
  const [inputText, setInputText] = useState();

  function handleTextChange(e) {
    const { value } = e.target;
    setInputText(value);
  }

  function handleHeaderChange(e) {
    const { value } = e.target;
    setInputHeader(value);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleHeaderChange}
          value={inputHeader}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleTextChange}
          value={inputText}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            props.onAdd(inputText, inputHeader);
            // setInputHeader("");
            // setInputText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
