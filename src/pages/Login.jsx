import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login } from "../services/auth";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from || "/";

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await login(form.email, form.password);

            toast.success("Login Successful");

            navigate(from, { replace: true });
        } catch (err) {
            console.log(err);
            console.log(err.code);
            console.log(err.message);

            toast.error(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 flex justify-center items-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
            >
                <h2 className="text-white text-3xl font-bold mb-6 text-center">
                    Login
                </h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
                    required
                />

                <p className="text-right mb-4">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-yellow-400 hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </p>

                <button
                    disabled={loading}
                    className="w-full bg-yellow-500 text-black font-bold p-3 rounded hover:bg-yellow-400"
                >
                    {loading ? "Please Wait..." : "Login"}
                </button>

                <p className="text-gray-400 mt-5 text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-yellow-400">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;