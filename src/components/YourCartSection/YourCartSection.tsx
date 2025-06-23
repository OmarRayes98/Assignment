
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useCallback, useRef, useState } from "react";
import {
  cartItemChangeQuantity,
  cartItemRemove,
} from "@/store/cart/cartSlice";
import Heading from "../common/Heading/Heading";
import { TProduct } from "@/types/shared.types";
import CartItem from "./CartItem/CartItem";
import CartSubtotalPrice from "./CartSubtotalPrice/CartSubtotalPrice";
import { useNavigate } from "react-router-dom";



const YourCartSection = ({navigatePath,isDisableSelect,titleButton}:{navigatePath:string,isDisableSelect:boolean,titleButton:string}) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const addressRef = useRef<HTMLInputElement>(null);
    const [error ,setError]= useState("");


    const { items } = useAppSelector(
      (state) => state.cart
    );
    const { allProducts } = useAppSelector(
        (state) => state.products
      );
  
    const changeQuantityHandler = useCallback(
      (id: string, quantity: number) => {
        console.log(id,quantity,"dfsdf")
        dispatch(cartItemChangeQuantity({ id, quantity }));
      },
      [dispatch]
    );
  
    const removeItemHandler = useCallback(
      (id: string) => {
        dispatch(cartItemRemove(id));
      },
      [dispatch]
    );

    const handdleNavigate = ()=>{

      const address = addressRef.current?.value;

      if (!address &&titleButton==="Pay Now" ){
        setError("This Field is required")
        return;
      }

      navigate(navigatePath)

    }
  

    const products = allProducts.reduce<TProduct[]>((acc, product) => {
        if (product._id in items) {
          acc.push({ ...product, quantity: items[product._id] });
        }
        return acc;
      }, []);


  return (
    <section className="pt-10 md:pt-20 pb-20">
    <Heading title={titleButton==="Pay Now"?"Checkout":"Your Cart"} text="" />

    {     
          titleButton==="Pay Now"&&
          <div className=" mb-[50px] w-full">
          <label htmlFor={"deleivery"} className="block mb-[10px] text-secondary font-medium text-sm capitalize">Delivery Address</label>
          <input 
          type={"text"} 
          id={"deleivery"} 
          className="text-xs font-normal  border border-input rounded-[4px] outline-none  focus:border-primary/90 block w-full h-[44px] px-[15px]" placeholder={"your delivery address"}
          ref={addressRef}
          />
          {error &&
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {error}
            </p>
          }
          </div>
    }

    <article className="grid grid-cols-1 justify-between   gap-4">
    {
        
        (products)?.length >0 ?
        <>
        {
        products.map((item)=>(
          <CartItem {...item} key={item!._id} isDisableSelect={isDisableSelect} _id={item!._id} title={item!.name} max={5} quantity={item.quantity} removeItemHandler={removeItemHandler} changeQuantityHandler={changeQuantityHandler} img={item?.image?.url} price={`${item?.price}`}/>
        ))


       }

      <CartSubtotalPrice
          products={products}
        />

          <button 
            onClick={handdleNavigate}
              className="text-white w-[200px] mx-auto mt-auto bg-primary transition duration-500 hover:bg-primary/85  focus:outline-none  font-medium rounded-[4px] text-sm h-[44px] text-center uppercase ">
              {titleButton}
            </button>
        
      </>
        :
        <h1>
          No Items 
        </h1>
      }
    </article>

    </section>
  )
}

export default YourCartSection
