import React, { useState } from "react";

export default function Form(props) {
    const handleClickToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase", "success");
    };
    const handleClickToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase", "success");
    };
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleCountWordLength = () => {
        let count = 0;
        let newText = text.split(" ");
        newText.forEach(element => {
            if(element.length > 0){
                count = count + 1;
            }
        });
        return count;
    };

    const [text, setText] = useState(""); // text = enter text here
    //setText("enter here");  // text = enter  here

    return (
        <>
        <div className="container" style ={{color:props.mode === 'light' ? 'grey': 'white'}}>
            <h1 >{props.heading} </h1>

            <div className="form-group" style ={{backgroundColor:props.mode === 'light' ? 'white': 'grey'}}>
                <textarea className="form-control" id="exampleFormControlTextarea1" style ={{backgroundColor:props.mode === 'light' ? 'white': 'grey',
                color:props.mode === 'light' ? 'grey': 'white'}} onChange={handleOnChange}
                    rows="2"
                ></textarea>
            </div>
            
            <button className="btn btn-primary my-3" onClick={handleClickToUpperCase}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleClickToLowerCase}>
                Convert to LowerCase
            </button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

        </div>
            
        <div className="container my-2" style ={{color:props.mode === 'light' ? 'grey': 'white'}}>

            <h2>hey para</h2>
            <p>{handleCountWordLength()} words , {text.length} char</p>            
            <p>{text.split(" ").length * 0.008} time to read</p>
            <h2>Preview :</h2>
            <p>{text}</p>
            </div>
            
        </>
    );
}
