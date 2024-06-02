
import Chai from "./chai"



function App() {
  const username ='Devang Magarkar'  // this is how you create variable (the j part of jsx , x part is html)
  //curly brace operator
  // but curly brace operator ek evaluatoed expression hai
  // mtlab ye final evaluated value accept krta 
  // example {if(true) username} -> ye javascript  accept nahi krega

  return (
    <>
    <Chai/>
    <h1>chai aur react{username}</h1>  
    <p>test para</p>
    </>
  )
}

export default App
