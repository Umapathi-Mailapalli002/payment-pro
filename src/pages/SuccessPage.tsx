import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold text-green-400 mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        ✅ Payment Successful
      </motion.h1>
      <p className="text-lg text-gray-300 mb-6">
        Thank you for your purchase! Your course is now unlocked.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        🏠 Back to Home
      </button>
    </motion.div>
  );
}

export default SuccessPage;
