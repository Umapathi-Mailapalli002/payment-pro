import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function FailurePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold text-red-500 mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        ❌ Payment Failed
      </motion.h1>
      <p className="text-lg text-gray-300 mb-6">
        Something went wrong. Please try again.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        🔁 Retry Payment
      </button>
    </motion.div>
  );
}

export default FailurePage;
