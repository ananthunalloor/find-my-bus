import React, { FormEventHandler } from 'react'
import { InputFiles } from 'typescript'


interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

//input file as a prop on the button and append it formdata field
//onChange event handler is passed to the input file

const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputFiles: any = event.target.files
    const formData = new FormData()
    formData.append('file', inputFiles[0])
    //send form data to the server
    console.log(formData)
    var xhr = new XMLHttpRequest;
xhr.open('POST', '/', true);
xhr.send(formData);
}

function Button() {
    return (
        <input type="file" className="" onChange={input}/>
    )
}

export default Button
