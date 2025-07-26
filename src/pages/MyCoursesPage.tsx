import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

interface Purchase {
  title: string;
  price: number;
  description: string;
}

const MyCoursesPage = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const navigate = useNavigate();

  // Simulating a fetch from backend/localStorage
  useEffect(() => {
    const stored = localStorage.getItem("myCourses"); // Simulate purchases
    if (stored) {
      setPurchases(JSON.parse(stored));
    }
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col justify-center items-center p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">🎓 My Courses</h1>

      {purchases.length === 0 ? (
        <motion.div
          className="text-center p-6 border border-gray-600 rounded-xl shadow-md bg-[#1a1a2e] max-w-md w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="text-lg text-gray-300 mb-4">
            You haven’t purchased any courses yet.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
            onClick={() => navigate("/home")}
          >
            Browse Courses
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {purchases.map((course, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a2e] border border-gray-600 p-6 rounded-xl shadow-md max-w-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-gray-300 text-sm mb-2">{course.description}</p>
              <p className="text-green-400 font-semibold">₹{course.price}</p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default MyCoursesPage;
