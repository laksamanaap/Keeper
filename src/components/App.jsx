import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem] = useState([]);
  // console.log(item);

  function addItem(inputText, inputHeader) {
    setItem((prevItems) => {
      console.log(prevItems);
      return [...prevItems, { title: inputHeader, text: inputText }];
    });
  }

  function deleteItem(id) {
    // console.log(id);
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {item.map((items, index) => {
        // console.log("Items  :", items);
        // console.log("Index  :", index);
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteItem}
            title={items.title}
            content={items.text}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
