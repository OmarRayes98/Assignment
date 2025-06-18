import Card from "./Card"

import Heading from "../common/Heading/Heading";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";
import actGetAllProducts from "@/store/products/act/actGetAllProducts";
import CardHomeSkeleton from "../skeletons/CardHomeSkeleton";

const CardHomeSection = () => {

  const {allProducts,loading} = useAppSelector((state) => state.products);

  
  const dispatch = useAppDispatch();

  useEffect(()=>{

    dispatch(actGetAllProducts())

  },[dispatch])


  return (
    <section className="pt-10 md:pt-20 pb-20">
    <Heading title="Products" text="" />

    <article className="grid grid-cols-1 justify-between  sm:grid-cols-2  md:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-4">
    {
        loading==="pending"?
        <CardHomeSkeleton/>
        :
        (allProducts)?.length >0 ?
        allProducts.map((item)=>(
          <Card key={item._id} id={item._id} image ={import.meta.env.VITE_API_Domain+item.image} price={`$ ${item?.price}`}/>
        ))
        :
        <h1>
          No Items 
        </h1>
      }
    </article>

    </section>
  )
}

export default CardHomeSection
