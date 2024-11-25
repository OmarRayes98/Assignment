import styles from "./styles.module.css";
import defaultImage from "@/assets/images/defaultProduct.png";

type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  quantity?: number;
  direction?: "row" | "column";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ProductInfo = ({
  title,
  img,
  price,
  quantity,
  direction = "row",
  children,
  style,
}: ProductInfoProps) => {
  return (
    <div className={`${styles[`product-${direction}`]}`} style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img src={img} alt={title} className="aspect-square" />
        <picture className="aspect-square">
      <source srcSet={img ? img : ""}/>
      <img  className="aspect-square" src={defaultImage} alt={"default"} />
      </picture>
      </div>
      <div className={`${styles[`productInfo-${direction}`]}`}>
        <h2 title={title}>{title}</h2>
        <h3>{price.toFixed(2)} $</h3>
        {quantity && <h3>Total Quantity: {quantity}</h3>}
        {quantity && <h3>Price Total: {(quantity * price).toFixed(2)}</h3>}

        {children}
      </div>
    </div>
  );
};

export default ProductInfo;
