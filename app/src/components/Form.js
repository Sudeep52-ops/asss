import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState('');

    const change = (event)=>{
        setText(event.target.value)
    }

    const handleUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted To Upper case", "success")
    }

    //speak

    const speak = ()=>{

    let msg = new SpeechSynthesisUtterance();

    msg.text = text;

    window.speechSynthesis.speak(msg);
    }

    const handleCopy = ()=>{
        console.log("i am copy");
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    //copy text

    const copy = ()=>{

        let text = document.getElementById("Box");

        text.select();
        
        navigator.clipboard.writeText(text.value)
    }

    const handleClean = ()=>{
        let space = text.split(/[  ]+/);
        setText(space.join(" "))
    }
  return (

     <>
    <div className="mb-3" style={{color : props.mode === 'dark'?'white':'black'}}>
      <label htmlFor="exampleFormControlTextarea1" className={`form-label`}>Example textarea</label>
      <textarea className="form-control" id="Box" rows="3" value={text} onChange={change} style={{backgroundColor : props.mode === 'dark'?'#31857a8c':'white',color : props.mode === 'dark'?'white':'black'}}></textarea>
      <button disabled={text.length===0} className="btn btn-primary my-3" type="submit" onClick={handleUp}>UPPERCASE</button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" type="submit" onClick={speak}>Speak</button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" type="submit" onClick={handleClean}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" type="submit" onClick={copy}>copy text</button>
      {/* <button class="btn btn-primary my-3 mx-2" type="submit" onClick={reverse}>Reverse</button> */}
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" type="submit" id="myBox" onClick={handleCopy}>Reverse</button>
      <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} Words , {text.length} character</p>
      <p>Preview</p>
        <p>{text.length>0?text:"enter your text in the above box"}</p>
        
    </div>
</>
  )
}
