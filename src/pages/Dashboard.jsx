import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard({ userType }) {
  const advertiserStats = [
    { label: 'Active Campaigns', value: '12', icon: '📊' },
    { label: 'Total Spend', value: '$45,230', icon: '💸' },
    { label: 'Ad Impressions', value: '8.2M', icon: '👁️' },
    { label: 'Conversion Rate', value: '6.8%', icon: '🎯' },
  ];

  const platformStats = [
    { label: 'Platform Revenue', value: '$13,569', icon: '💰' },
    { label: 'Active Ad Campaigns', value: '12', icon: '📊' },
    { label: 'Total Ad Impressions', value: '8.2M', icon: '👁️' },
    { label: 'Commission Rate', value: '30%', icon: '📈' },
  ];

  const stats = userType === 'advertiser' ? advertiserStats : platformStats;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {userType === 'advertiser' 
            ? '📢 Advertiser Dashboard' 
            : '💰 Platform Revenue Dashboard'}
        </h1>
        <p className="text-xl text-gray-600">
          {userType === 'advertiser'
            ? 'Reach millions of viewers with targeted ad placements'
            : 'Monitor your platform revenue from brand advertising'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="card">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-primary mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {userType === 'advertiser' ? (
          <>
            <Link to="/ads" className="card hover:shadow-xl cursor-pointer">
              <div className="text-5xl mb-4">➕</div>
              <h3 className="text-xl font-bold mb-2">Create Ad Campaign</h3>
              <p className="text-gray-600">Launch a new advertising campaign</p>
            </Link>
            <Link to="/analytics" className="card hover:shadow-xl cursor-pointer">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Campaign Analytics</h3>
              <p className="text-gray-600">Monitor performance and ROI</p>
            </Link>
          </>
        ) : (
          <>
            <Link to="/ads" className="card hover:shadow-xl cursor-pointer">
              <div className="text-5xl mb-4">💵</div>
              <h3 className="text-xl font-bold mb-2">Revenue Tracking</h3>
              <p className="text-gray-600">Monitor your platform earnings</p>
            </Link>
            <Link to="/analytics" className="card hover:shadow-xl cursor-pointer">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Platform Analytics</h3>
              <p className="text-gray-600">Track ad performance and revenue</p>
            </Link>
          </>
        )}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">
                  {userType === 'advertiser' ? `Campaign Running #${item}` : `Revenue Generated #${item}`}
                </p>
                <p className="text-sm text-gray-600">Updated 2 hours ago</p>
              </div>
              <span className="text-primary font-semibold">View →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
