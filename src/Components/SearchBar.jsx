import React from 'react'
import { useState } from 'react'

export default function SearchBar({HandleAddClick, SearchFunc}) {
    const [inputEle,setInputEle] = useState('')
    function intermediateHandler(){
        HandleAddClick(inputEle)
    }
    return (
        <div className="Search-and-Add">
            <input type="text" value={inputEle} onChange={(e)=>{
                setInputEle(e.target.value)
            }}/>
            <button onClick={()=>SearchFunc(inputEle)}>Search Keys</button>
            <button onClick={intermediateHandler}>Add Key</button>
        </div>
  )
}

//What I've accomplished is that you can call the search function from the button
//AND, far more importantly, keys state variable is updated, so you can add keys as per your wish
