import React from 'react';
import Link from 'next/link';
import { Headphones } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-900 py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-100 transition-colors">
          <Headphones size={28} />
          AlexListens
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="#" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#" className="text-blue-100 hover:text-white transition-colors">Features</Link></li>
            <li><Link href="#" className="text-blue-100 hover:text-white transition-colors">About</Link></li>
            <li><Link href="#" className="text-blue-100 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;