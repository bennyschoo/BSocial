import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import useMeasure from "react-use-measure";
import Sidebar from "./components/Sidebar"
import Home from "./components/home_components/Home.tsx";
import PageNotFound from "./components/pageNotFound_components/PageNotFound.tsx";
import Search from "./components/search_components/Search.tsx";
import Create from "./components/create_components/Create.tsx";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 541});
  // useMeasure to get the width of the sidebar
  const [ref, sidebarBounds] = useMeasure();
  const sidebarWidth = sidebarBounds.width;

  const desktopLayout = (
    <div className="d-flex text-light">
        <Sidebar ref ={ref as unknown as HTMLOrSVGElement}/>
        <div className='desktop-content ms-auto d-flex flex-column align-items-center' style={{"width": `calc(100% - ${sidebarWidth}px)`}}>
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
            <Route path="search" element={<Search />} />
            <Route path="create" element={<Create />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
  
}

export default App
