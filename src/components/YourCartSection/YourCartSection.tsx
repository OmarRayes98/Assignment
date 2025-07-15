import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useCallback, useRef, useState } from "react";
import { cartItemChangeQuantity, cartItemRemove, clearCart } from "@/store/cart/cartSlice";
import Heading from "../common/Heading/Heading";
import CartItem from "./CartItem/CartItem";
import CartSubtotalPrice from "./CartSubtotalPrice/CartSubtotalPrice";
import { useNavigate } from "react-router-dom";

const YourCartSection = ({
  isPrint,
  navigatePath,
  isDisableSelect,
  titleButton,
}: {
  isPrint?: boolean;
  navigatePath: string;
  isDisableSelect: boolean;
  titleButton: string;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addressRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const { items } = useAppSelector((state) => state.cart);

  const changeQuantityHandler = useCallback(
    (id: string, quantity: number) => {
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

  const handdleNavigate = () => {
    const address = addressRef.current?.value;

    if (!address && titleButton === "Pay Now") {
      setError("This Field is required");
      addressRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    if(titleButton ==="Pay Now"){
      dispatch(clearCart())
    }

    navigate(navigatePath);
  };


  return (
    <section className="pt-10 md:pt-20 pb-20">
      <Heading
        title={titleButton === "Pay Now" ? "Checkout" : "Your Cart"}
        text=""
      />

      {titleButton === "Pay Now" && !isPrint && (
        <div className=" mb-[50px] w-full">
          <label
            htmlFor={"deleivery"}
            className="block mb-[10px] text-secondary font-medium text-sm capitalize"
          >
            Delivery Address
          </label>
          <input
            type={"text"}
            id={"deleivery"}
            className="text-xs font-normal  border border-input rounded-[4px] outline-none  focus:border-primary/90 block w-full h-[44px] px-[15px]"
            placeholder={"your delivery address"}
            ref={addressRef}
          />
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {error}
            </p>
          )}
        </div>
      )}

      <article className="grid grid-cols-1 justify-between   gap-4">
        {items?.length > 0 ? (
          <>
            {items.map((item) => (
              <CartItem
                {...item?.info}
                key={item?.info!._id}
                isDisableSelect={isDisableSelect}
                _id={item?.info!._id}
                title={item?.info!.name}
                max={5}
                quantity={item.quantity}
                removeItemHandler={removeItemHandler}
                changeQuantityHandler={changeQuantityHandler}
                img={item?.info?.image?.url}
                price={`${item?.info?.price}`}
              />
            ))}

            <CartSubtotalPrice productsCart={items} />

            {!isPrint && (
              <button
                onClick={handdleNavigate}
                className="text-white w-[200px] mx-auto mt-auto bg-primary transition duration-500 hover:bg-primary/85  focus:outline-none  font-medium rounded-[4px] text-sm h-[44px] text-center uppercase "
              >
                {titleButton}
              </button>
            )}
          </>
        ) : (
          <h1>No Items</h1>
        )}
      </article>
    </section>
  );
};

export default YourCartSection;
