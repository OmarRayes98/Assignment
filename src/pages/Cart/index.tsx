import YourCartSection from "@/components/YourCartSection/YourCartSection"

const Cart = () => {
  return (
    <section className="max-w-screen-xl p-4 mx-auto mt-[50px]">
    
    <YourCartSection titleButton="got to Checkout" navigatePath="/checkout" isDisableSelect={false}/>
    </section>
  )
}

export default Cart
