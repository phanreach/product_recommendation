import React from 'react';
import CategoryTest from '../components/CategoryTest';
import ApiTest from '../components/ApiTest';

function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">🧪 API & Category Testing</h1>
        
        <div className="space-y-8">
          {/* API Test Component */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">API Connection Test</h2>
            <ApiTest />
          </div>
          
          {/* Category Analysis */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Category Analysis</h2>
            <CategoryTest />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
