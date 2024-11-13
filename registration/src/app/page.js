"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import LoginPage from './pages/login';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
    termsNotAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { passwordMismatch: false, termsNotAccepted: false };

    if (formData.password !== formData.confirmPassword) {
      newErrors.passwordMismatch = true;
      isValid = false;
    }

    if (!formData.acceptTerms) {
      newErrors.termsNotAccepted = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Handle form submission, validation, and API calls here
    console.log(formData);
    // Clear form data or redirect after successful signup
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="javascript:void(0)">
            <img
              src="https://www.arclogiq.com/wp-content/uploads/2024/08/ArcLogiQ-1.png"
              alt="ArcLogiQ logo"
              className="w-40 inline-block"
            />
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block" htmlFor="email">Email Id</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Confirm password"
                required
              />
              {errors.passwordMismatch && (
                <p className="text-red-600 text-xs mt-2">Passwords do not match.</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="acceptTerms"
                className="text-gray-800 ml-3 block text-sm"
              >
                I accept the{' '}
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            {errors.termsNotAccepted && (
              <p className="text-red-600 text-xs mt-2">You must accept the terms and conditions.</p>
            )}
          </div>

          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Create an account
            </button>
          </div>

          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
