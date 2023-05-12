import React, { useState } from "react";

export default function Textarea(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied to clipboard", "success");
  };
  const handleExtraSpace = () => {
    let newTex = text.split(/[ ]+/);
    setText(newTex.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h3>Enter The Text</h3>
        <div className="form-floating ">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="myBox"
            value={text}
            onChange={handleChange}
            rows={8}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "grey",
              color: props.mode === "dark" ? "black" : "white",
              cursor: "pointer",
              height: 200,
            }}
          ></textarea>

          <button className="btn btn-primary mt-3" onClick={handleClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-2" onClick={handleloClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>
            Copy to clipboard
          </button>
          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container">
        <h3>Your Text Summary</h3>
        <h4>
          {text.length}
          <p>characters</p>
        </h4>
        <h4>
          {text.length === 0 ? 0 : text.split(" ").length}
          <p>words</p>
        </h4>
        <h4>Preview</h4>
        {/* <p>{text}</p> */}
        
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="myBox"
            value={text}
            // onChange={handleChange}
            rows={8}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "grey",
              color: props.mode === "dark" ? "black" : "white",
              cursor: "pointer",
              height: 200,
            }}
          >{text}</textarea>
      </div>
    </>
  );
}
