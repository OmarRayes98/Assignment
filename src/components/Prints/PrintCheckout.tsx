import { forwardRef } from "react";
import YourCartSection from "../YourCartSection/YourCartSection";

interface PrintCheckoutProps {
  isPrint: boolean;
}

const PrintCheckout = forwardRef<HTMLDivElement, PrintCheckoutProps>(
  (props, ref) => {
    return (
      <div ref={ref} className="p-8">
        <YourCartSection
          titleButton="Pay Now"
          navigatePath="/pay-success"
          isDisableSelect={true}
          isPrint={props.isPrint}
        />
      </div>
    );
  }
);

export default PrintCheckout;
