import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import TrustedBy from "./Components/TrustedBy"
import Sorted from "./Components/Sorted"
import Main from "./Components/Main"

import Jobs from "./Components/Jobs"
function App() {
  

  return (
    <div>
    <Navbar />
    <Body />
    <TrustedBy />
    <div className="jobs">
    <Sorted />
    <div className="main-content">
    <Main />
    <Jobs />
    
    </div>
    </div>
   
  
   </div>
  )
}

export default App
