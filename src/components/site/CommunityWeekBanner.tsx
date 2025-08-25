import React from 'react';

const CommunityWeekBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#193AE6] to-blue-600 text-white py-3 px-4 text-center">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
        <span className="font-medium">Join OLake Community Week</span>
        <a 
          href="https://lu.ma/olake?k=c"
          className="ml-2 inline-flex items-center px-3 py-1 bg-white text-[#193AE6] rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
          data-luma-action="checkout"
          data-luma-event-id="evt-UBPRlqW7MxSqJJR"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default CommunityWeekBanner;
