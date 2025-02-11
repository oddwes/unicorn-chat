import React, { useState } from 'react';
import { isValidENSName } from "thirdweb/utils";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const cardStyle = "aspect-square bg-gray-800 p-6 rounded-lg flex items-center justify-center text-center";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidENSName(url)) {
      setError("Invalid ENS");
      return;
    }
    setError("");
    // Store ENS in session storage
    sessionStorage.setItem("ens", url);
    navigate("/");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen text-white p-8 flex items-center">
      <div className="max-w-5xl mx-auto relative">
        <div className="flex justify-between items-start">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">
              Your personal <span className="text-purple-500">ETHDenver</span>
              <br />Assistant
            </h1>
            <p className="text-gray-300 mb-8">
            Bridget is your personal AI agent here to answer questions about the event, your account and wallet.
            Begin by logging in with your username you chose at sign up.
            </p>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={url}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="username.ethdenver.com"
                className="flex-1 px-4 py-2 rounded-full bg-white text-gray-800"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 rounded-full font-medium"
              >
                Enter
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            <a
              href="https://app.ethdenver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-sm block mb-12"
            >
              Create ETHDenver account
            </a>
          </div>

            <div className="w-64">
                <img
                    src="/unicorn.svg"
                    alt="Unicorn Ethereum Logo"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className={cardStyle}>
            <p>Ask general Questions about ETHDenver</p>
          </div>
          <div className={cardStyle}>
            <p>Ask about speakers and official side events</p>
          </div>
          <div className={cardStyle}>
            <p>What is unicorn.eth?</p>
          </div>
          <div className={cardStyle}>
            <p>How to create accounts for your community like ETHDenver?</p>
          </div>
        </div>

        <div className="text-center">
          <a href="#" className="text-blue-400 hover:underline">
            FAQS
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;