import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;