import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleClickEvent = () =>{
        const upercase = text.toUpperCase();
        setText(upercase)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowercaseEvent = () =>{
        const upercase = text.toLowerCase();
        setText(upercase)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleChangeEvent = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }

    const handleClearEvent = () =>{
        setText("")
        props.showAlert("All words removed from textbox", "warning")
    }

    const handleTitleCase = () => {
        // let newText = text.split(".").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" "); // titlecase all word
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText)
        props.showAlert("All word got titalized", "success")
    }

    const handleCopy = () => {
        let texts = document.getElementById("exampleFormControlTextarea1")
        texts.select();
        navigator.clipboard.writeText(texts.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if(toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    // Remove extra space newText= text.split(/[ ]+/)
        //setText(newText.join(" "))
    const [text, setText] = useState("")
    // text = "dhdhjd" //wrong way to update
    // setText("jdhjhdjhd") // correct way to update

    const textLength = text.split(' ').filter((n) => { return n !== '' }).length
  return (
    <>
    <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"value={text} onChange={handleChangeEvent} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode === "dark" ? "#13466e":"white", color: props.mode === "dark" ? "white":"black"}} rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClickEvent}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTitleCase}>Convert to Title Case</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowercaseEvent}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearEvent}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={speak} id='toggle'>Speak</button>
    </div>
    <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2 className='my-3'>Your text summary</h2>
        <p>Your text have {textLength} words and {text.length} characters</p>
        <p>{Math.round(0.008 * textLength)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};