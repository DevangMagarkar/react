import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Devang",
    age:21
  }
  return (
    <>
       <h1 className='bg-green-400 text-black mb-4'>Tailwind test</h1> 
       <Card username="Devang" btnText="Go to my profile"/>
       <Card username="Devnag" btnText="Visit my Profile"/>

    </>
  )
}

export default App

// hum jsx likhre h
// jse class likhte hai js me
//vse hi jsx mei className likhte hai


//<Card channel="chaiaurcode" someObj={myObj}/>