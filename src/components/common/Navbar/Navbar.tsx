import { useState } from "react"
import { Link } from "react-router-dom"
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import CartIcon from "@/assets/images/cart.svg";
import { useAppSelector } from "@/store/hook";
import { getCartTotalQuantitySelector } from "@/store/cart/selectors";


const Navbar = () => {

    const [checkToggle,setCheckToggle]= useState(true);
    const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);


  return (

<nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
  <div className="max-w-screen-xl p-4 flex flex-wrap items-center justify-between mx-auto ">
  <Link  to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap">OurTask</span>
  </Link>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      
      <HeaderCounter
      to="cart"
      title="Cart"
      totalQuantity={cartTotalQuantity}
      svgIcon={CartIcon}
      />

      <button onClick={()=>setCheckToggle(prev=>!prev)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between ${checkToggle ?"hidden":""}  w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="dashboard" className="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-black md:p-0 " aria-current="page">Dashboard</Link>
      </li>

    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar
