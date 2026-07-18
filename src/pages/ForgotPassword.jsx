import React, { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../services/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await resetPassword(email);

            toast.success("Password reset email sent.");

            setEmail("");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 flex justify-center items-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
            >
                <h2 className="text-3xl text-white font-bold mb-6 text-center">
                    Forgot Password
                </h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-5 p-3 rounded bg-gray-800 text-white outline-none"
                    required
                />

                <button
                    disabled={loading}
                    className="w-full bg-yellow-500 text-black font-bold p-3 rounded hover:bg-yellow-400"
                >
                    {loading ? "Sending..." : "Send Reset Link"}
                </button>

                <p className="text-center text-gray-400 mt-5">
                    <Link to="/login" className="text-yellow-400">
                        Back to Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default ForgotPassword;