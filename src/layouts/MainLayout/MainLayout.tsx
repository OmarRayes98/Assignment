import Navbar from "@/components/common/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (

    <> 
    <Navbar/>
    <Outlet/>

    </>

    )
}

export default MainLayout
