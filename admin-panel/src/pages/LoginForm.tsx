import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../features/authSlice";
import type { AppDispatch, RootState } from "../store";
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, loginStatus } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [shake, setShake] = useState(false);
  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (loginStatus === "succeeded") {
        toast.success("Login successful");
        navigate("/admin");
        
    } else if (loginStatus === "failed" && error) {
      toast.error(error || "Something went wrong");
    }
  }, [loginStatus, error]);

  // Email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form validation
  const isEmailValid = email.length === 0 || isValidEmail(email);
  const isPasswordValid = password.length >= 6;
  const canSubmit = email && password && isValidEmail(email) && isPasswordValid;

  // Shake animation on error
  useEffect(() => {
    if (error) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [error]);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!canSubmit) {
    setEmailTouched(true);
    setPasswordTouched(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
    return;
  }

  dispatch(loginAdmin({ email, password }));
};


  const handleKeyDown = (e: React.KeyboardEvent, field: string) => {
    if (e.key === "Enter") {
      if (field === "email" && passwordRef.current) {
        passwordRef.current.focus();
      } else if (field === "password") {
        handleSubmit(e as any);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 backdrop-blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative w-full max-w-md">
        {/* Glass Card */}
        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
          shake ? 'animate-bounce' : ''
        }`}>
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-purple-200/80 text-sm">
              Sign in to your admin dashboard
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'email' ? 'text-purple-400' : 'text-purple-300/60'
                }`} />
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="admin@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => {
                    setFocusedField('');
                    setEmailTouched(true);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, 'email')}
                  className={`w-full pl-12 pr-12 py-4 bg-white/5 border-2 rounded-xl transition-all duration-200 text-white placeholder-purple-300/50 focus:outline-none backdrop-blur-sm ${
                    focusedField === 'email' 
                      ? 'border-purple-400 shadow-lg shadow-purple-500/25' 
                      : emailTouched && !isEmailValid
                        ? 'border-red-400 shadow-lg shadow-red-500/25'
                        : 'border-white/20 hover:border-white/30'
                  }`}
                />
                {emailTouched && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {isEmailValid && email ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : !isEmailValid && email ? (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    ) : null}
                  </div>
                )}
              </div>
              {emailTouched && !isEmailValid && email && (
                <p className="text-red-400 text-xs mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Please enter a valid email address
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'password' ? 'text-purple-400' : 'text-purple-300/60'
                }`} />
                <input
                  ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => {
                    setFocusedField('');
                    setPasswordTouched(true);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, 'password')}
                  className={`w-full pl-12 pr-12 py-4 bg-white/5 border-2 rounded-xl transition-all duration-200 text-white placeholder-purple-300/50 focus:outline-none backdrop-blur-sm ${
                    focusedField === 'password' 
                      ? 'border-purple-400 shadow-lg shadow-purple-500/25' 
                      : passwordTouched && !isPasswordValid
                        ? 'border-red-400 shadow-lg shadow-red-500/25'
                        : 'border-white/20 hover:border-white/30'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300/60 hover:text-purple-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {passwordTouched && !isPasswordValid && password && (
                <p className="text-red-400 text-xs mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-purple-200">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-2 border-white/20 bg-white/5 text-purple-400 focus:ring-purple-400 focus:ring-2"
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-purple-300 hover:text-purple-200 transition-colors underline underline-offset-2"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading || !canSubmit}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                canSubmit && !loading
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transform hover:scale-[1.02]'
                  : 'bg-white/10 text-purple-300/50 cursor-not-allowed'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                </>
              )}
            </button>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-purple-300/60 text-xs">
              Protected by enterprise-grade security
            </p>
          </div>
        </div>

        {/* Additional Visual Elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400/30 rounded-full blur-sm"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400/30 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default LoginForm;