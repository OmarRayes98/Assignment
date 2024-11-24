import { memo } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import { TProduct } from "@/types/shared.types";
import styles from "./styles.module.css";

const { cartItem, cartItemSelection } = styles;

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
  isDisableSelect:boolean;
};

const CartItem = memo(
  ({
    id,
    title,
    img,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
    isDisableSelect,

  }: CartItemProps) => {
    // render option list
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(+id, quantity);
    };

    return (
      <div className={cartItem}>
        <ProductInfo title={title!} price={+(price)} img={img!} direction="column">
            {isDisableSelect===false&&
            <button 
            onClick={() => removeItemHandler(+id)}
              className="text-white  mt-auto bg-primary transition duration-500 hover:bg-primary/85  focus:outline-none  font-medium rounded-[4px] text-sm w-full h-[44px] text-center uppercase ">
              Remove
            </button>
            }
        </ProductInfo>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>

          <form className="cursor-pointer">
  <select id="quantity" disabled={isDisableSelect} value={quantity} onChange={changeQuantity} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700   `}>
  {renderOptions}
  </select>
</form>
        </div>
      </div>
    );
  }
);

export default CartItem;
