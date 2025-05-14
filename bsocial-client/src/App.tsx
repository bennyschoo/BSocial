import { useMediaQuery } from "react-responsive";
import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home_components/Home.tsx";
import PageNotFound from "./components/pageNotFound_components/PageNotFound.tsx";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 541});
  const sidebarExpanded = useMediaQuery({ minWidth: 750 });
 
  const desktopLayout = (
    <div className="d-flex text-light">
        <Sidebar expanded={sidebarExpanded} />
        <div className='desktop-content bg-secondary ms-auto d-flex flex-column align-items-center' style={{"width": `calc(100% - ${73}px)`}}>
          <Outlet />
        </div>
    </div>
  )

  const mobileLayout = (
    <div className="d-flex text-light flex-column align-items-center justify-content-center bg-dark" style={{height: "100vh"}}>
        <h1>Mobile version not ready yet</h1>
    </div>
  )

  const Layout = () => {
    return ( isDesktop ? desktopLayout : mobileLayout)
  }

  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home isDesktop={isDesktop} />} />
            <Route path="home" element={<Home isDesktop={isDesktop} />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
  
}

export default App
