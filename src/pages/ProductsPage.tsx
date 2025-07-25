import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { motion } from "motion/react"; // corrected import

const products = [
  {
    priceId: 'price_1RoklMIjqVRUrQ23jnXBXpas',
    title: "AI Course",
    price: 499,
    description:
      "Learn the foundations of Artificial Intelligence including supervised and unsupervised learning, neural networks, and practical AI applications. Perfect for beginners who want to break into AI with hands-on projects and real-world use cases.",
  },
  {
    priceId: 'price_1RokjZIjqVRUrQ23dxfFX7I8',
    title: "React Mastery",
    price: 999,
    description:
      "Become a front-end pro by mastering React.js, hooks, and advanced component patterns. This course covers everything from state management with Redux to building scalable SPAs. Includes real projects and certification.",
  },
  {
    priceId: 'price_1RooGHIjqVRUrQ23wAJ8Ly1h', // use your actual Stripe price ID here
    title: "Full Stack Bootcamp",
    price: 1499,
    description:
      "Master full-stack development with the MERN stack (MongoDB, Express, React, Node.js). Build real-world applications from scratch and deploy them. Ideal for aspiring full-stack engineers who want to build scalable and production-ready web apps.",
  },
];


function ProductsPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col justify-center items-center p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center mb-12"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🚀 Unlock Your Potential with These Courses
      </motion.h1>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((product, index) => (
          <motion.div
            key={product.priceId}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <ProductCard
              title={product.title}
              price={product.price}
              description={product.description}
              onClick={() =>
                navigate(
                  `/checkout?title=${product.title}&price=${product.price}&priceId=${product.priceId}`
                )
              }
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProductsPage;
