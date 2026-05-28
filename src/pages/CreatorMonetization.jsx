import React from 'react';

export default function CreatorMonetization() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="card">
        <h1 className="text-3xl font-bold mb-4">💡 About AdNetwork</h1>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-xl font-bold text-blue-900 mb-3">How AdNetwork Works</h2>
            <p className="text-blue-800 mb-3">
              AdNetwork is a platform where brands pay to advertise on creator videos. As the platform owner, you earn commission on all ad placements.
            </p>
            <ul className="text-blue-800 space-y-2">
              <li>✓ Brands create ad campaigns and pay for placements</li>
              <li>✓ Ads display on creator videos (pre-roll, mid-roll, post-roll)</li>
              <li>✓ You earn 30% commission on all ad spend</li>
              <li>✓ Revenue goes directly to your bank account</li>
            </ul>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h2 className="text-xl font-bold text-green-900 mb-3">Creator Earnings Model</h2>
            <p className="text-green-800 mb-3">
              Creators earn money through <strong>CreatorHub Brand Partnerships</strong>, not from AdNetwork ads.
            </p>
            <ul className="text-green-800 space-y-2">
              <li>✓ Brands post campaign offers on CreatorHub</li>
              <li>✓ Creators apply and complete deliverables</li>
              <li>✓ Brands pay creators directly for their work</li>
              <li>✓ You earn commission on CreatorHub partnerships</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h2 className="text-xl font-bold text-purple-900 mb-3">Your Revenue Streams</h2>
            <div className="space-y-2 text-purple-800">
              <div className="flex justify-between">
                <span><strong>AdNetwork Commission:</strong></span>
                <span>30% of brand ad spend</span>
              </div>
              <div className="flex justify-between">
                <span><strong>CreatorHub Commission:</strong></span>
                <span>15-20% of campaign budgets</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Total Monthly Revenue:</strong></span>
                <span className="font-bold">$13,569+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
