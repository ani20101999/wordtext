import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
  let[toggle,settoggle] = useState(false)
  return (
    <div id="main">
    {toggle===false && <h1 id="marco-polo">Marco</h1>}
    {toggle===true && <h1 id="marco-polo">Polo</h1>}
    <div>
      <button id="marco-polo-toggler" onClick={(e)=>settoggle(toggle => !toggle)}>
       {toggle===false ? "Polo":"Marco"}
      </button>
    </div>
    </div>
  )
}


export default App;
