import { useMediaQuery } from "react-responsive";
import Content from "./components/Content"
import Sidebar from "./components/Sidebar"


function App() {
  const isDesktop = useMediaQuery({ minWidth: 541});

  if(isDesktop){
    return (
      <div className="d-flex text-light">
        <Sidebar />
        <Content isDesktop = {isDesktop}/>
      </div>
    )
  }
  else{
    return (
      <div className="d-flex text-light flex-column align-items-center justify-content-center bg-dark" style={{height: "100vh"}}>
        <h1>Mobile version not ready yet</h1>
      </div>
    )
  }
}

export default App
