import YourCartSection from "@/components/YourCartSection/YourCartSection"

const Checkout = () => {
  return (
    <section className="max-w-screen-xl p-4 mx-auto mt-[50px]">
    
    
    <YourCartSection titleButton="Pay Now" navigatePath="/pay-success" isDisableSelect={true}/>
    </section>
  )
}

export default Checkout
