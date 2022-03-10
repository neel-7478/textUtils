import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "new text" // wrong way to declare the text
    // setText("new Text") // Right way to declare the new text

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");

    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");

    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        // To remove all selected areas
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed","success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>

                <div className="mb-3">
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" type="submit" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-3" type="submit" onClick={handleLowClick}>Convert To LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" type="submit" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" type="submit" onClick={handleCopyClick}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2" type="submit" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !=0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}


