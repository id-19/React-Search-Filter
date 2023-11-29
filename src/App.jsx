import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import Display from './Components/Display'
import searchKeys from './Scripts/searchKeys'

function App() {
  const [keys, setKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])
  useEffect(()=>{
    console.log(`The keys are ${keys}`)
  },[keys])
  useEffect(()=>{
    console.log(`The selected keys are ${selectedKeys}`)
  },[selectedKeys])
  function HandleAddClick(inputEle){
    let newArr = [...keys,inputEle]
    setKeys(newArr)
  }

  return (
    <>
      <SearchBar HandleAddClick={HandleAddClick} SearchFunc={(searchEle)=>setSelectedKeys(searchKeys(keys,searchEle))}/>
      <Display keysToShow={selectedKeys}/>
    </>
  )
}

export default App
