import React, { useState } from "react";
import { signup } from "../services/auth";
import { toast } from "react-toastify";
import { saveUser } from "../services/firestore";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        if (form.password !== form.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);

            const user = await signup(form.name, form.email, form.password);

            await saveUser(user);

            toast.success("Account created. Please verify your email.");

            navigate("/login");
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
                <h2 className="text-white text-3xl font-bold text-center mb-6">
                    Signup
                </h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
                    required
                />

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

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
                    required
                />

                <button
                    disabled={loading}
                    className="w-full bg-yellow-500 text-black font-bold p-3 rounded hover:bg-yellow-400"
                >
                    {loading ? "Creating..." : "Create Account"}
                </button>

                <p className="text-gray-400 text-center mt-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-yellow-400">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;