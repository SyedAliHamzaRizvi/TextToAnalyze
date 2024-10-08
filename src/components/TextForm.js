import React,{useState} from 'react'

export default function TextForm(props) {
//            Uppercase

const handleUpClick =()=>{
let newText= text.toUpperCase()
 setText(newText)
 props.showAlert(" Converted to Uppercase", "success")
}

const handleOnChange =(event)=>{
    setText(event.target.value);
        }

    //        LowerCase
const handleLoClick=()=>{
let newText=text.toLowerCase()
setText(newText)
props.showAlert(" Converted to Lowercase", "success")
}

//          Clear
const handleClr=()=>{
    let newText=''
    setText(newText)
    props.showAlert(" Text cleared", "success")
    }
//          Copy
const handleCopy=()=>{
     navigator.clipboard.writeText(text)
    props.showAlert(" Text copied", "success")
}
//         Remove extra spaces

const handleRemove=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra spaces removed", "success")
}


        
const[text,setText]= useState('');
return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}
 id="mybox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary  mx-1 my-1 " onClick={handleUpClick}>Covert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleClr} >Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemove}>Remove extra spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <b>
    <p>{text.length===0 ? text.length : text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{text.length===0? text.length :0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p></b>

    <h2>Preview</h2>
    <b><p>{text.length>0?text:"Nothing to Preview!"}</p></b>
</div>
</>
)
}
