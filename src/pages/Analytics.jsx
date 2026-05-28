import React from 'react';

export default function Analytics({ userType }) {
  const advertiserMetrics = [
    { label: 'Total Spend', value: '$45,230', change: '-5%' },
    { label: 'Total Impressions', value: '8.2M', change: '+18%' },
    { label: 'Conversion Rate', value: '6.8%', change: '+3%' },
    { label: 'Cost per Conversion', value: '$5.52', change: '-2%' },
  ];

  const platformMetrics = [
    { label: 'Platform Revenue', value: '$13,569', change: '+25%' },
    { label: 'Total Ad Impressions', value: '8.2M', change: '+18%' },
    { label: 'Active Campaigns', value: '12', change: '+4' },
    { label: 'Avg Commission Rate', value: '30%', change: 'Stable' },
  ];

  const metrics = userType === 'advertiser' ? advertiserMetrics : platformMetrics;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">📊 Analytics</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="card">
            <p className="text-gray-600 text-sm mb-2">{metric.label}</p>
            <p className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</p>
            <p className="text-sm text-green-600 font-semibold">{metric.change} vs last month</p>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-6">Performance Over Time</h2>
        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-2">📈 Chart visualization would display here</p>
            <p className="text-sm text-gray-500">
              {userType === 'advertiser' 
                ? 'Daily campaign performance for the last 30 days' 
                : 'Daily platform revenue for the last 30 days'}
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Campaigns */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">
            {userType === 'advertiser' ? 'Top Performing Campaigns' : 'Top Revenue Campaigns'}
          </h3>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">Campaign #{item}</p>
                  <p className="text-sm text-gray-600">
                    {userType === 'advertiser' ? '2.5M impressions' : 'Revenue generated'}
                  </p>
                </div>
                <p className="font-bold text-primary">
                  {userType === 'advertiser' ? '6.2% CTR' : '$3,500'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="card">
          <h3 className="text-xl font-bold mb-4">
            {userType === 'advertiser' ? 'Spend by Category' : 'Revenue by Ad Type'}
          </h3>
          <div className="space-y-3">
            {[
              { name: userType === 'advertiser' ? 'Technology' : 'Pre-roll Ads', value: userType === 'advertiser' ? '$15,230' : '$4,500' },
              { name: userType === 'advertiser' ? 'Fashion' : 'Mid-roll Ads', value: userType === 'advertiser' ? '$18,450' : '$6,200' },
              { name: userType === 'advertiser' ? 'Beauty' : 'Post-roll Ads', value: userType === 'advertiser' ? '$11,550' : '$2,869' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="card mt-8">
        <h3 className="text-xl font-bold mb-4">Export Analytics</h3>
        <div className="flex gap-4">
          <button className="btn-primary">📥 Download as PDF</button>
          <button className="btn-secondary">📊 Export to CSV</button>
          <button className="btn-secondary">📧 Email Report</button>
        </div>
      </div>
    </div>
  );
}
