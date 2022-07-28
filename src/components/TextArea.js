import React, { useState } from 'react'
export default function TextArea(props) {
    let name = 'Ankit Bose';
    const [text, setText] = useState("");
    const ChangeText = (event) => {
        //console.log("Text Changed");

        setText(event.target.value);
    }
    const UpperClick = () => {
        //console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert('Converted to Uppercase', 'success');
    }
    const LowerClick = () => {
        //console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert('Converted to LowerCase', 'info');
    }
    const copyText = () => {
        //console.log("Button Clicked");
        var box = document.getElementById('myarea');
        box.select();
        navigator.clipboard.writeText(box.value);
        props.showalert('Text Copied', 'danger');
    }
    const clearBox = () => {
        //console.log("Button Clicked");
        setText('');
        props.showalert('Box Cleared.', 'success');
    }
    return (
        <>
            {/* <div className="container d-flex">
                <button type="submit" className="btn btn-primary mx-1">Hello</button>

                <button type="submit" className="btn btn-primary mx-2">Hello</button>

                <button type="submit" className="btn btn-primary mx-2">Hello</button>

                <button type="submit" className="btn btn-primary mx-2">Hello</button>

                <button type="submit" className="btn btn-primary mx-2">Hello</button>

                <input class="form-control" style={{width: "20%"}} type="search" placeholder="Search" aria-label="Search"/>
                    

            </div> */}
            <div className='container' style={{color : props.mode==='light'?'#010a5e':'white'}}>
                <h1 style={{color : props.mode==='light'?'#010a5e':'white'}}>{props.heading}</h1>
                <div className="mb-3">
                    <label style={{color : props.mode==='light'?'#010a5e':'white'}} htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="myarea" style={{color : props.mode==='light'?'#010a5e':'white', backgroundColor : props.mode==='dark'?'#010a5e':'white'}} onChange={ChangeText} rows="8" value={text}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1" onClick={UpperClick}>Convert to UpperCase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={LowerClick}>Convert to LowerCase</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
                <button type="submit" className="btn btn-primary mx-2" onClick={clearBox}>Clear Text</button>
                
            </div>
            <div className="container my-2" style={{color : props.mode==='light'?'#010a5e':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minuted to Read</p>
            </div>
            <div className="container my-2" style={{color : props.mode==='light'?'#010a5e':'white'}}>
                <h2>Preview</h2>
                <p>{text.length>0?text:`Enter your text iin textbox to preview here ${name}!!` }</p>
            </div>
        </>
    )
}
