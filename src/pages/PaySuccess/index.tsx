import { useNavigate } from "react-router-dom";

const PaySuccess = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen px-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "green", width: "100px", height: "100px" }}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
    
    <h1 className="text-3xl font-bold">Thanks for your order.</h1>
      <p className="text-center text-gray-600">
        We started processing it, and we will get back to you soon.
      </p>
      <button
        onClick={handleHome}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/75 transition duration-200"
      >
        Go to Home
      </button>
    </div>
  );
};

export default PaySuccess;
