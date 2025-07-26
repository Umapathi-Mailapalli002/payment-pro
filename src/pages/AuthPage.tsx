import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { motion } from "motion/react";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSignup = (email: string, password: string) => {
    console.log("Signup with", email, password);
    // TODO: your signup logic here
    setIsSignup(false); // move to login after signup
  };

  const handleLogin = (email: string, password: string) => {
    console.log("Login with", email, password);
    // TODO: your login logic here
  };

  return (
   <>
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col justify-center items-center p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {isSignup ? (
          <SignupForm
            onSignup={handleSignup}
            switchToLogin={() => setIsSignup(false)}
          />
        ) : (
          <LoginForm
            onLogin={handleLogin}
          />
        )}
        {!isSignup && (
          <p className="text-center mt-4 text-white">
            Don’t have an account?
            <button
              onClick={() => setIsSignup(true)}
              className="ml-2 text-green-400 underline"
            >
              Sign Up
            </button>
          </p>
        )}
      </div>
      </motion.div>
   </>
  )
}

export default AuthPage;