import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleClickEvent = () =>{
        const upercase = text.toUpperCase();
        setText(upercase)
    }

    const handleLowercaseEvent = () =>{
        const upercase = text.toLowerCase();
        setText(upercase)
    }
    const handleChangeEvent = (event) =>{
        console.log("On change")
        setText(event.target.value)
    }

    const handleClearEvent = () =>{
        setText("")
    }
    const [text, setText] = useState("Type your text")
    // text = "dhdhjd" //wrong way to update
    // setText("jdhjhdjhd") // correct way to update

    const textLength = text.split(" ").length
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"value={text} onChange={handleChangeEvent} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClickEvent}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowercaseEvent}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleClearEvent}>Clear</button>
    </div>
    <div className='container'>
        <h2 className='my-3'>Your text summary</h2>
        <p>Your text have {textLength} words and {text.length} characters</p>
        <p>{Math.round(0.008 * textLength)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};