import { useState } from "react";

const SignupForm = ({
  onSignup,
  switchToLogin,
}: {
  onSignup: (email: string, password: string) => void;
  switchToLogin: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(email, password);
  };

  return (
    <div className="bg-[#1a1a2e] text-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-[#0f3460] text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded bg-[#0f3460] text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded font-semibold"
        >
          Sign Up
        </button>
      </form>

      {/* 👉 Already have account */}
      <p className="text-center mt-4 text-gray-300">
        Already have an account?
        <button
          onClick={switchToLogin}
          className="ml-2 text-blue-400 underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
