import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-black/60 flex items-center justify-center z-[9999]">

      <div className="bg-white/80 p-6 rounded-xl w-[90%] max-w-md relative">

        <button
          className="absolute right-3 top-3 text-xl text-black"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4 mt-6 text-center">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {isLogin ? <LoginForm /> : <RegisterForm />}

        <p className="text-sm mt-3 text-center">
          {isLogin ? "Don't have an account?" : "Already registered?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-800 cursor-pointer ml-1"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

      </div>

    </div>
  );
}
