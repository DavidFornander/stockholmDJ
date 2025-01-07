"use client";
// pages/customize-mac.js
import { useState } from 'react';



const CustomizeMac = () => {
  const [memory, setMemory] = useState('16GB unified memory');
  const [storage, setStorage] = useState('256GB SSD storage');
  const [ethernet, setEthernet] = useState('Gigabit Ethernet');
  const [software, setSoftware] = useState('No, thanks');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      {/* Top Section with Image */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        {/* Left Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <img src="/assets/temp/Cool.png" alt="Mac mini" className="max-w-xs" />
        </div>

        {/* Right Form Section */}
        <div className="flex-1 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold text-gray-800">Customize your Mac mini</h2>
          <p className="text-gray-500 mt-2">Apple M4 chip with 10-core CPU, 10-core GPU, 16-core Neural Engine</p>

          {/* Memory Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Memory</h3>
            <p className="text-sm text-gray-500">How much memory is right for you?</p>
            <div className="space-y-2 mt-3">  
              {['16GB unified memory', '24GB unified memory + $200', '32GB unified memory + $400'].map(option => (
                <button
                  key={option}
                  onClick={() => setMemory(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${memory === option ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Storage Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Storage</h3>
            <p className="text-sm text-gray-500">How much storage is right for you?</p>
            <div className="space-y-2 mt-3">
              {['256GB SSD storage', '512GB SSD storage + $200', '1TB SSD storage + $400', '2TB SSD storage + $800'].map(option => (
                <button
                  key={option}
                  onClick={() => setStorage(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${storage === option ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Ethernet Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Ethernet</h3>
            <p className="text-sm text-gray-500">Which Ethernet speed is right for you?</p>
            <div className="space-y-2 mt-3">
              {['Gigabit Ethernet', '10 Gigabit Ethernet + $100'].map(option => (
                <button
                  key={option}
                  onClick={() => setEthernet(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${ethernet === option ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Pre-Installed Software Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Pre-Installed Software</h3>
            <div className="space-y-2 mt-3">
              {['No, thanks', 'Final Cut Pro + $299.99'].map(option => (
                <button
                  key={option}
                  onClick={() => setSoftware(option)}
                  className={`block w-full text-left px-4 py-3 border rounded-lg ${software === option ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Final Summary */}
          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
              Finalize your configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeMac;