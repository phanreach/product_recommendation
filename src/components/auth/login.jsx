import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import leftlogo from '../../assets/left-logo.png';
import logo from '../../assets/logo.png';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-white grid grid-cols-3">
            {/* Left Column - Image */}
            <div className="flex bg-white">
                <img src={leftlogo} alt="Login Visual" className="max-w-full h-auto" />
            </div>

            {/* Middle Column - Form */}
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit} className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <h2 className="text-xl font-bold text-black mb-2">WELCOME BACK</h2>
                        <p className="text-sm text-gray-600 font-medium">SIGN IN</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm focus:outline-none focus:border-black transition-colors"
                                required
                            />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm focus:outline-none focus:border-black transition-colors pr-12"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 px-4 font-medium text-sm hover:bg-gray-800 transition-colors"
                        >
                            Log In
                        </button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="/auth/register" className="text-black font-medium underline hover:no-underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            {/* Right Column - Logo */}
            <div className="flex items-center justify-center bg-white p-8">
                <img src={logo} alt="Logo" className="max-w-full h-auto" />
            </div>
        </div>
    );
}

export default LoginPage;
