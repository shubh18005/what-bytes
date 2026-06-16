import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-slate-300 text-sm mt-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Filter Navigation Links Column */}
        <div className="space-y-3">
          <h4 className="text-white font-bold tracking-wide text-base">Filters</h4>
          <ul className="space-y-1.5 opacity-80 text-xs">
            <li className="cursor-pointer hover:text-white transition-colors">All Electronics</li>
            <li className="cursor-pointer hover:text-white transition-colors">Clothing Accessories</li>
            <li className="cursor-pointer hover:text-white transition-colors">Home & Kitchenware</li>
          </ul>
        </div>

        {/* Corporate Information Column */}
        <div className="space-y-3">
          <h4 className="text-white font-bold tracking-wide text-base">About Us</h4>
          <ul className="space-y-1.5 opacity-80 text-xs">
            <li className="cursor-pointer hover:text-white transition-colors">About Us</li>
            <li className="cursor-pointer hover:text-white transition-colors">Contact Corporate</li>
          </ul>
        </div>

        {/* Social Presence Tracking Handles */}
        <div className="space-y-4">
          <h4 className="text-white font-bold tracking-wide text-base">Follow Us</h4>
          <div className="flex items-center gap-3">
            
            {/* Facebook Badge Wrapper */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0052B4] hover:bg-[#0066cc] text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon className="w-4 h-4 fill-current" />
            </a>

            {/* Twitter Badge Wrapper */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0052B4] hover:bg-[#0066cc] text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Follow us on Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            {/* Instagram Badge Wrapper */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#0052B4] hover:bg-[#0066cc] text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>

      {/* Ground Floor Legal Line */}
      <div className="border-t border-slate-800 bg-[#071D33] py-4 px-6 text-xs text-center opacity-60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>&copy; 2024 American</span>
        </div>
      </div>
    </footer>
  );
}