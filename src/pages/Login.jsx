import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { googleLogin } from "../services/auth";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from || "/";



    const [loading, setLoading] = useState(false);


    const handleGoogleLogin = async () => {
        try {
            setLoading(true);

            await googleLogin();

            toast.success("Google Login Successful");

            navigate(from, { replace: true });

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 flex justify-center items-center px-4">
            <form
                className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
            >
                <h2 className="text-white text-3xl font-bold mb-6 text-center">
                    Login
                </h2>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full bg-yellow-500 text-black font-bold p-3 rounded hover:bg-yellow-400"
                >
                    {loading ? "Please Wait..." : "Continue with Google"}
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