import PrintCheckout from "@/components/Prints/PrintCheckout";
import YourCartSection from "@/components/YourCartSection/YourCartSection";

import { useReactToPrint } from "react-to-print";
import { FC, ReactNode, useRef } from "react";
import { useAppSelector } from "@/store/hook";

const Checkout = () => {
  const { allProducts } = useAppSelector((state) => state.products);
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: contentRef,
    documentTitle: "My Custom Print Title", 
    onAfterPrint: () => alert("Print is successfully"),
  });

  const PrintButton: FC<{
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
  }> = ({ onClick, className = "", children }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`cursor-pointer font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center ${className}`}
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M7 18H6.2C5.0799 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V10.2C3 9.0799 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.0799 7 6.2 7H7M17 18H17.8C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V10.2C21 9.07989 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H17M7 11H7.01M17 7V5.4V4.6C17 4.03995 17 3.75992 16.891 3.54601C16.7951 3.35785 16.6422 3.20487 16.454 3.10899C16.2401 3 15.9601 3 15.4 3H8.6C8.03995 3 7.75992 3 7.54601 3.10899C7.35785 3.20487 7.20487 3.35785 7.10899 3.54601C7 3.75992 7 4.03995 7 4.6V5.4V7M17 7H7M8.6 21H15.4C15.9601 21 16.2401 21 16.454 20.891C16.6422 20.7951 16.7951 20.6422 16.891 20.454C17 20.2401 17 19.9601 17 19.4V16.6C17 16.0399 17 15.7599 16.891 15.546C16.7951 15.3578 16.6422 15.2049 16.454 15.109C16.2401 15 15.9601 15 15.4 15H8.6C8.03995 15 7.75992 15 7.54601 15.109C7.35785 15.2049 7.20487 15.3578 7.10899 15.546C7 15.7599 7 16.0399 7 16.6V19.4C7 19.9601 7 20.2401 7.10899 20.454C7.20487 20.6422 7.35785 20.7951 7.54601 20.891C7.75992 21 8.03995 21 8.6 21Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
        {children}
      </button>
    );
  };
  return (
    <section className="max-w-screen-xl p-4 mx-auto mt-[50px]">
      {
      allProducts?.length > 0 && 
      <PrintButton onClick={handlePrint} />
      }

      <div className="hidden ">
        <PrintCheckout ref={contentRef} isPrint={true} />
      </div>

      <YourCartSection
        titleButton="Pay Now"
        navigatePath="/pay-success"
        isDisableSelect={true}
      />
    </section>
  );
};

export default Checkout;
