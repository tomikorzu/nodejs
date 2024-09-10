import React, {useState} from "react";

export default function Component() {
    const [text, setText] = useState("Text input");
    const [update, setUpdate] = useState("Text Changed");
    const textOnChange = (e) => {
        setText(e.target.value);
    }
    const updateOnChange = () => {
        setUpdate(text);
    }
  return (
    <div>
      <input type="text" placeholder="Enter your name" value={text} id="name" onChange={textOnChange} />
      <button type="submit" onClick={updateOnChange}>Enter</button>
        <p>Text input {text}</p>
        <p>Text Changed {update}</p>

    </div>
  );
}
 