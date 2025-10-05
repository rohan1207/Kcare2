import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "react-feather";

const AuthModal = ({ onClose }) => {
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Lock body scroll and close on Escape
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url = authMode === "login"
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        // Redirect to patient portal on successful login/signup
        window.location.assign('http://localhost:5174');
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSwitch = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-md max-h-[85vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
        >
          <X size={24} />
        </button>

        <h2 className="font-display text-3xl text-center text-stone-800 mb-2">
          {authMode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-center text-stone-500 mb-8">
          {authMode === "login"
            ? "Sign in to access your patient portal."
            : "Get started with your personalized health journey."}
        </p>

        {authMode === "login" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength="6"
              onChange={handleChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition font-semibold shadow-sm disabled:bg-teal-300"
            >
              {loading ? "Processing..." : "Login"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength="6"
              onChange={handleChange}
              className="w-full p-3 border border-stone-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition font-semibold shadow-sm disabled:bg-amber-300"
            >
              {loading ? "Processing..." : "Sign Up"}
            </button>
          </form>
        )}

        <div className="text-center mt-4">
          <button onClick={handleSwitch} className="text-teal-500 hover:underline">
            {authMode === "login"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default AuthModal;
