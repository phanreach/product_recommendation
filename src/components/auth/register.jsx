import React, { useState } from 'react';
import { Eye, EyeOff, Play } from 'lucide-react';
import login from '../../assets/login.png';
import logo from '../../assets/logo.png';

function RegisterPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration data:', formData);
    };

    return (
        <div className="min-h-screen bg-white grid grid-cols-3">
            {/* Left Column - Logo */}
            <div className="flex items-center justify-center bg-white p-8">
                <img src={logo} alt="Logo" className="max-w-full h-auto" />
            </div>

            {/* Middle Column - Form */}
            <div className="flex items-center justify-center p-8">
                <div className="max-w-md w-full">
                    <div className="text-center mb-8">
                        <h2 className="text-xl font-bold text-black mb-2">WELCOME</h2>
                        <p className="text-sm text-gray-600 font-medium">SIGN UP</p>
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
                            />
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Create Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm focus:outline-none focus:border-black transition-colors pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirm Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded-none text-sm focus:outline-none focus:border-black transition-colors pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full bg-black text-white py-3 px-4 font-medium text-sm hover:bg-gray-800 transition-colors"
                        >
                            Create Account
                        </button>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Already have account?{' '}
                            <button className="text-black font-medium underline hover:no-underline">
                                <a href="/auth/login">Sign In</a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Column - Image */}
           <div className="flex bg-white">
                           <img src={login} alt="Login Visual" className="max-w-full h-auto" />
                       </div>
           
        </div>
    );
}

export default RegisterPage;
