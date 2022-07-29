import React from 'react'

const About = (props) => {

    //let state
   
    return (
        <div className="container" style={{color : props.mode==='light'?'#010a5e':'white'}}>
            <div className="my-3">
            <h1 className='p-1 d-inline'>About Us</h1>
            <h3 className='p-1 d-inline'> -- This Website brings you with some exciting features</h3></div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style = {{color : props.mode==='light'?'#010a5e':'white',backgroundColor : props.mode==='dark'?'#010a5e':'white'}}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"  style = {{color : props.mode==='light'?'#010a5e':'white',backgroundColor : props.mode==='dark'?'#010a5e':'white'}}>
                            Feature 1 -- Dark Mode
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Dark Mode.</strong>  Dark mode is a display setting for user interfaces, such as a smartphone or laptop. <p>It means that, instead of the default dark text showing up against a light screen (known as ‘light mode’), a light colour text (white or grey) is presented against a dark or black screen.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style = {{color : props.mode==='light'?'#010a5e':'white',backgroundColor : props.mode==='dark'?'#010a5e':'white'}}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style = {{color : props.mode==='light'?'#010a5e':'white',backgroundColor : props.mode==='dark'?'#010a5e':'white'}}>
                            Feature 2 -- Text Manipulator
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Text Manipulation.</strong> You can manipulate text in a variety of ways, from the length of space between letters in words of text, to the length of space between the words of a sentence.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style = {{color : props.mode==='light'?'#010a5e':'white',backgroundColor : props.mode==='dark'?'#010a5e':'white'}}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style = {{color : props.mode==='light'?'#010a5e':'white',backgroundColor : props.mode==='dark'?'#010a5e':'white'}}>
                            Feature 3 -- Text Counter and Preview
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Text Counter and Preview.</strong> Use our free text message character counter to estimate SMS length, character nature, text message cost and how it will display on different mobile devices.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" onChange={modeSel} id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div> */}
        </div>
    )
}

export default About
