import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import TrustedBy from "./Components/TrustedBy"
import Sorted from "./Components/Sorted"
import Main from "./Components/Main"
import Card from "./Components/Card"
function App() {
  

  return (
    <div>
    <Navbar />
    <Body />
    <TrustedBy />
    <div className="jobs">
    <Sorted />
    <Main />
  
    </div>
    
   </div>
  )
}

export default App
