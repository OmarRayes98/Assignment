import { addToCart } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hook";


const Card = ({itemObject , image, price}:{itemObject:any,image:string,price:string,title?:string}) => {

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(itemObject));
  };


  return (
    <div className="w-full p-5 rounded-[10px] border-[1.5px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <img  src={image} className="rounded-[10px] object-cover object-center mx-auto  w-[280px]  h-[300px]" alt="card image"/>

    <div className="pt-4 pb-10">
    <p className="text-primary/60 text-[18px] font-semibold">
        {price}
    </p>


    </div>

    <div className="flex items-center gap-2 text-[14px] font-normal">
    <button
          className="text-white mb-7 bg-primary transition duration-500 hover:bg-primary/85  focus:outline-none  font-medium rounded-[4px] text-sm w-full h-[44px] text-center uppercase "
          onClick={addToCartHandler}

        >
          Add To Card
    </button>

    </div>


    </div>
  )
}

export default Card
