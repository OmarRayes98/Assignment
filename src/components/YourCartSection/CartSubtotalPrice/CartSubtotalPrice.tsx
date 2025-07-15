import styles from "./styles.module.css";
import { CartItem } from "@/store/cart/cartSlice";

type CartSubtotalPriceProps = {
  productsCart: CartItem[];
};

const CartSubtotalPrice = ({
  productsCart,
}: CartSubtotalPriceProps) => {


  const subtotal = productsCart.reduce((accumulator, el) => {
    const price = el?.info.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + +price * quantity;
    } else {
      return accumulator;
    }
  }, 0);



  return (
    <>

      <div className={styles.container}>
        <span>Subtotal:</span>
        <span>{subtotal.toFixed(2)} $</span>
      </div>

    </>
  );
};

export default CartSubtotalPrice;
