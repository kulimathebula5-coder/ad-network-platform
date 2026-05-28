import { useState } from 'react';

export default function AdCampaigns({ userType }) {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale Campaign',
      budget: '$10,000',
      impressions: '2.5M',
      clicks: '125K',
      ctr: '5.0%',
      status: 'active',
      startDate: '2026-05-01',
      endDate: '2026-06-30',
      platformRevenue: '$3,000',
    },
    {
      id: 2,
      name: 'Product Launch',
      budget: '$15,000',
      impressions: '3.8M',
      clicks: '228K',
      ctr: '6.0%',
      status: 'active',
      startDate: '2026-05-15',
      endDate: '2026-07-15',
      platformRevenue: '$4,500',
    },
    {
      id: 3,
      name: 'Brand Awareness',
      budget: '$5,000',
      impressions: '1.2M',
      clicks: '48K',
      ctr: '4.0%',
      status: 'paused',
      startDate: '2026-04-01',
      endDate: '2026-05-31',
      platformRevenue: '$1,500',
    },
  ];

  // Tiered pricing based on video duration
  const pricingTiers = [
    {
      id: 1,
      videoLength: 'Short Videos (15-60 seconds)',
      preRoll: '$3.00 CPM',
      midRoll: '$5.00 CPM',
      postRoll: '$2.00 CPM',
      description: 'Perfect for quick ads on short-form content',
    },
    {
      id: 2,
      videoLength: 'Medium Videos (1-5 minutes)',
      preRoll: '$5.00 CPM',
      midRoll: '$8.00 CPM',
      postRoll: '$3.50 CPM',
      description: 'Ideal for standard video content',
    },
    {
      id: 3,
      videoLength: 'Long Videos (5-30 minutes)',
      preRoll: '$8.00 CPM',
      midRoll: '$12.00 CPM',
      postRoll: '$5.00 CPM',
      description: 'Premium pricing for long-form content',
    },
    {
      id: 4,
      videoLength: 'Extra Long Videos (30+ minutes)',
      preRoll: '$12.00 CPM',
      midRoll: '$15.00 CPM',
      postRoll: '$7.50 CPM',
      description: 'Maximum reach on extended content',
    },
  ];

  const videoAds = [
    {
      id: 1,
      title: 'Pre-roll Ad',
      placement: 'Beginning of video',
      description: 'Plays before video starts',
      cpm: 'Varies by video length',
      impressions: '1.2M',
    },
    {
      id: 2,
      title: 'Mid-roll Ad',
      placement: 'Middle of video',
      description: 'Plays during video (for videos 5+ minutes)',
      cpm: 'Varies by video length',
      impressions: '850K',
    },
    {
      id: 3,
      title: 'Post-roll Ad',
      placement: 'End of video',
      description: 'Plays after video completes',
      cpm: 'Varies by video length',
      impressions: '450K',
    },
  ];

  if (userType === 'advertiser') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">📊 Ad Campaigns</h1>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="btn-primary"
          >
            + Create Campaign
          </button>
        </div>

        {showCreateForm && (
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6">Create New Campaign</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Campaign Name</label>
                <input type="text" className="input-field" placeholder="e.g., Summer Sale" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Budget</label>
                  <input type="number" className="input-field" placeholder="$10,000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Duration (days)</label>
                  <input type="number" className="input-field" placeholder="30" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Target Video Length</label>
                <select className="input-field">
                  <option>Short Videos (15-60 seconds)</option>
                  <option>Medium Videos (1-5 minutes)</option>
                  <option>Long Videos (5-30 minutes)</option>
                  <option>Extra Long Videos (30+ minutes)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Ad Placement Type</label>
                <select className="input-field">
                  <option>Pre-roll (Before video)</option>
                  <option>Mid-roll (During video)</option>
                  <option>Post-roll (After video)</option>
                  <option>All Placements</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex-1">Create Campaign</button>
                <button onClick={() => setShowCreateForm(false)} className="btn-secondary flex-1">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">{campaign.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {campaign.status}
                </span>
              </div>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-bold">{campaign.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impressions:</span>
                  <span className="font-bold">{campaign.impressions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CTR:</span>
                  <span className="font-bold text-primary">{campaign.ctr}</span>
                </div>
              </div>
              <button className="w-full btn-secondary text-sm">View Details</button>
            </div>
          ))}
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-6">💰 Pricing by Video Duration</h2>
          <p className="text-gray-600 mb-6">Our CPM rates vary based on video length to ensure optimal pricing for your campaigns:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingTiers.map((tier) => (
              <div key={tier.id} className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tier.videoLength}</h3>
                <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pre-roll:</span>
                    <span className="font-bold text-primary">{tier.preRoll}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mid-roll:</span>
                    <span className="font-bold text-primary">{tier.midRoll}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Post-roll:</span>
                    <span className="font-bold text-primary">{tier.postRoll}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Available Ad Placements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoAds.map((ad) => (
              <div key={ad.id} className="border border-gray-300 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{ad.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{ad.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Placement:</span>
                    <span className="font-bold">{ad.placement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pricing:</span>
                    <span className="font-bold text-primary">{ad.cpm}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Creator view
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">📺 Available Ad Networks</h1>
      <p className="text-gray-600 mb-6">Earn money by displaying ads on your videos. Rates vary based on your video length:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {pricingTiers.map((tier) => (
          <div key={tier.id} className="card">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{tier.videoLength}</h3>
            <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Pre-roll:</span>
                <span className="font-bold text-primary">{tier.preRoll}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mid-roll:</span>
                <span className="font-bold text-primary">{tier.midRoll}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Post-roll:</span>
                <span className="font-bold text-primary">{tier.postRoll}</span>
              </div>
            </div>
            <button className="w-full btn-primary text-sm">Enable Ads</button>
          </div>
        ))}
      </div>
    </div>
  );
}
