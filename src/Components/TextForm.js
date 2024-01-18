import React, {useState} from 'react'

export default function TextForm(props) {
   const  handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
   }


   const  handleLoClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
   }


   const  handleOnChange = (event ) =>{
    console.log("On Change");
    setText(event.target.value)
    }



    const [text, setText] = useState("Enter Text Here"); 
   return (
    <>
    <div className='conatiner'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert To lowerCase</button>
    </div>
    <div className='conatiner my-4'>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}