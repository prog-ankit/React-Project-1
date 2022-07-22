import React, { useState } from 'react'
export default function TextArea(props) {
    const [text, setText] = useState("");
    const ChangeText = (event) => {
        //console.log("Text Changed");
        setText(event.target.value);
    }
    const UpperClick = () => {
        //console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const LowerClick = () => {
        //console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={ChangeText} rows="8" value={text}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1" onClick={UpperClick}>Convert to UpperCase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={LowerClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minuted to Read</p>
            </div>
            <div className="container my-2">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
