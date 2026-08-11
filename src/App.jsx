import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import TrustedBy from "./Components/TrustedBy"
import Sorted from "./Components/Sorted"
import Main from "./Components/Main"

import Jobs from "./Components/Jobs"
import { useState } from "react";
function App() {
  const[isChoosen,setisChoosen]=useState(null);
  

  return (
    <div>
    <Navbar />
    <Body />
    <TrustedBy isChoosen={isChoosen} setisChoosen={setisChoosen}/>
    <div className="jobs">
    <Sorted  isChoosen={isChoosen} setisChoosen={setisChoosen} />
    <div className="main-content">
    <Main />
    <Jobs  isChoosen={isChoosen} setisChoosen={setisChoosen}/>
    
    </div>
    </div>
   
  
   </div>
  )
}

export default App
